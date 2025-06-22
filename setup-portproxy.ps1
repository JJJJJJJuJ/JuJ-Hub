# 端口转发设置脚本 - 完整版
# 此脚本用于配置Windows端口转发和创建开机自启任务
# 需要以管理员身份运行

# 检查是否以管理员身份运行
$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "错误: 请以管理员身份运行此脚本!" -ForegroundColor Red
    Write-Host "请右键点击PowerShell，选择'以管理员身份运行'，然后重新执行此脚本。" -ForegroundColor Yellow
    exit 1
}

Write-Host "JuJ Hub - 端口转发配置工具" -ForegroundColor Cyan
Write-Host "============================" -ForegroundColor Cyan
Write-Host "此脚本将配置端口转发并创建开机自启任务" -ForegroundColor White
Write-Host ""

# 停止IIS服务（如果正在运行）
try {
    $iisService = Get-Service -Name "W3SVC" -ErrorAction SilentlyContinue
    if ($iisService -and $iisService.Status -eq "Running") {
        Write-Host "停止IIS服务，释放80端口..." -ForegroundColor Yellow
        Stop-Service -Name "W3SVC" -Force
        Write-Host "IIS服务已停止" -ForegroundColor Green
        
        # 禁用IIS自动启动
        Write-Host "禁用IIS自动启动..." -ForegroundColor Yellow
        Set-Service -Name "W3SVC" -StartupType Disabled
        Write-Host "IIS自动启动已禁用" -ForegroundColor Green
    }
} catch {
    Write-Host "IIS服务未运行或不存在" -ForegroundColor Cyan
}

# 检查端口占用情况
Write-Host "检查端口占用情况..." -ForegroundColor Yellow
$port80 = netstat -ano | findstr ":80 "
$port443 = netstat -ano | findstr ":443 "

if ($port80) {
    Write-Host "警告: 80端口已被占用:" -ForegroundColor Red
    Write-Host $port80
    
    # 尝试识别占用进程
    $matches = $port80 -match "LISTENING\s+(\d+)"
    if ($matches) {
        $pid = $matches[1]
        $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
        if ($process) {
            Write-Host "占用进程: $($process.Name) (PID: $pid)" -ForegroundColor Red
        }
    }
}

if ($port443) {
    Write-Host "警告: 443端口已被占用:" -ForegroundColor Red
    Write-Host $port443
    
    # 尝试识别占用进程
    $matches = $port443 -match "LISTENING\s+(\d+)"
    if ($matches) {
        $pid = $matches[1]
        $process = Get-Process -Id $pid -ErrorAction SilentlyContinue
        if ($process) {
            Write-Host "占用进程: $($process.Name) (PID: $pid)" -ForegroundColor Red
        }
    }
}

# 如果端口被占用，询问是否继续
if ($port80 -or $port443) {
    $continue = Read-Host "端口被占用，是否继续配置端口转发? (Y/N)"
    if ($continue -ne "Y" -and $continue -ne "y") {
        Write-Host "操作已取消" -ForegroundColor Yellow
        exit 0
    }
}

# 删除现有的端口转发规则
Write-Host "删除现有的端口转发规则..." -ForegroundColor Yellow
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=0.0.0.0
netsh interface portproxy delete v4tov4 listenport=443 listenaddress=0.0.0.0

# 添加新的端口转发规则
Write-Host "添加新的端口转发规则..." -ForegroundColor Yellow
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=3000 connectaddress=127.0.0.1
netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=3001 connectaddress=127.0.0.1

# 显示当前端口转发配置
Write-Host "当前端口转发配置:" -ForegroundColor Green
netsh interface portproxy show all

# 创建批处理脚本
$deployPath = "C:\websites\jujhub"
if (-not (Test-Path $deployPath)) {
    Write-Host "创建部署目录: $deployPath" -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $deployPath -Force | Out-Null
}

$batchPath = "$deployPath\portproxy-setup.bat"
Write-Host "创建端口转发批处理脚本: $batchPath" -ForegroundColor Yellow

$batchContent = @"
@echo off
echo 配置JuJ Hub端口转发规则...

REM 删除现有的端口转发规则
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=3000 connectaddress=127.0.0.1

REM 如果配置了HTTPS，添加443端口转发
netsh interface portproxy delete v4tov4 listenport=443 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=3001 connectaddress=127.0.0.1

echo 端口转发配置完成!
"@

$batchContent | Out-File -FilePath $batchPath -Encoding ascii -Force
Write-Host "批处理脚本已创建" -ForegroundColor Green

# 创建计划任务
Write-Host "创建开机自启计划任务..." -ForegroundColor Yellow

# 检查任务是否已存在
$taskExists = Get-ScheduledTask -TaskName "PortProxy-JuJHub" -ErrorAction SilentlyContinue

if ($taskExists) {
    Write-Host "删除现有的计划任务..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName "PortProxy-JuJHub" -Confirm:$false
}

$action = New-ScheduledTaskAction -Execute $batchPath
$trigger = New-ScheduledTaskTrigger -AtStartup
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable

Register-ScheduledTask -TaskName "PortProxy-JuJHub" -Action $action -Trigger $trigger -Principal $principal -Settings $settings
Write-Host "计划任务已创建" -ForegroundColor Green

# 配置防火墙规则
Write-Host "配置防火墙规则..." -ForegroundColor Yellow

# 检查防火墙规则是否存在
$httpRule = Get-NetFirewallRule -DisplayName "JuJHub-HTTP" -ErrorAction SilentlyContinue
$httpsRule = Get-NetFirewallRule -DisplayName "JuJHub-HTTPS" -ErrorAction SilentlyContinue

if ($httpRule) {
    Write-Host "删除现有HTTP防火墙规则..." -ForegroundColor Yellow
    Remove-NetFirewallRule -DisplayName "JuJHub-HTTP"
}

if ($httpsRule) {
    Write-Host "删除现有HTTPS防火墙规则..." -ForegroundColor Yellow
    Remove-NetFirewallRule -DisplayName "JuJHub-HTTPS"
}

# 创建新的防火墙规则
New-NetFirewallRule -DisplayName "JuJHub-HTTP" -Direction Inbound -Protocol TCP -LocalPort 80 -Action Allow
New-NetFirewallRule -DisplayName "JuJHub-HTTPS" -Direction Inbound -Protocol TCP -LocalPort 443 -Action Allow

Write-Host "防火墙规则已配置" -ForegroundColor Green

Write-Host ""
Write-Host "端口转发配置完成!" -ForegroundColor Green
Write-Host "HTTP: 80 -> 3000" -ForegroundColor Cyan
Write-Host "HTTPS: 443 -> 3001" -ForegroundColor Cyan
Write-Host ""
Write-Host "服务器重启后，端口转发将自动配置" -ForegroundColor White
Write-Host "您的网站现在应该可以通过以下地址访问:" -ForegroundColor White
Write-Host "http://您的域名" -ForegroundColor Cyan
Write-Host "https://您的域名 (如果已配置HTTPS)" -ForegroundColor Cyan 