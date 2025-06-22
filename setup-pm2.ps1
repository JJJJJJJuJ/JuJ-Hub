# PM2开机自启设置脚本
# 此脚本用于配置PM2开机自启，确保服务器重启后JuJ Hub网站自动运行
# 需要以管理员身份运行

# 检查是否以管理员身份运行
$currentPrincipal = New-Object Security.Principal.WindowsPrincipal([Security.Principal.WindowsIdentity]::GetCurrent())
if (-not $currentPrincipal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "错误: 请以管理员身份运行此脚本!" -ForegroundColor Red
    Write-Host "请右键点击PowerShell，选择'以管理员身份运行'，然后重新执行此脚本。" -ForegroundColor Yellow
    exit 1
}

Write-Host "JuJ Hub - PM2开机自启配置工具" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host "此脚本将配置PM2开机自启，确保服务器重启后网站自动运行" -ForegroundColor White
Write-Host ""

# 检查PM2是否已安装
try {
    $pm2Version = pm2 -v
    Write-Host "已检测到PM2版本: $pm2Version" -ForegroundColor Green
} catch {
    Write-Host "错误: 未检测到PM2，请先安装PM2" -ForegroundColor Red
    Write-Host "可以使用以下命令安装PM2: npm install -g pm2" -ForegroundColor Yellow
    exit 1
}

# 检查部署目录
$deployPath = "C:\websites\jujhub\JuJ-Hub"
if (-not (Test-Path $deployPath)) {
    Write-Host "错误: 未找到部署目录: $deployPath" -ForegroundColor Red
    
    # 询问是否继续
    $continue = Read-Host "是否继续配置PM2自启? (Y/N)"
    if ($continue -ne "Y" -and $continue -ne "y") {
        Write-Host "操作已取消" -ForegroundColor Yellow
        exit 0
    }
    
    # 创建临时目录
    $deployPath = "C:\websites\jujhub"
    Write-Host "将使用临时目录: $deployPath" -ForegroundColor Yellow
    
    if (-not (Test-Path $deployPath)) {
        Write-Host "创建临时目录..." -ForegroundColor Yellow
        New-Item -ItemType Directory -Path $deployPath -Force | Out-Null
    }
}

# 创建PM2启动脚本
$batchPath = "C:\websites\jujhub\start-jujhub.bat"
Write-Host "创建PM2启动脚本: $batchPath" -ForegroundColor Yellow

$batchContent = @"
@echo off
echo 启动JuJ Hub PM2服务...

REM 设置PM2_HOME环境变量
set PM2_HOME=C:\Users\Administrator\.pm2

REM 切换到项目目录
cd /d C:\websites\jujhub\JuJ-Hub

REM 恢复PM2进程
pm2 resurrect

REM 如果resurrect失败，尝试使用配置文件启动
if %ERRORLEVEL% NEQ 0 (
  echo PM2恢复失败，尝试使用配置文件启动...
  if exist ecosystem.config.js (
    pm2 start ecosystem.config.js
  ) else if exist ecosystem-https.config.js (
    pm2 start ecosystem-https.config.js
  ) else (
    pm2 start npm --name "jujhub" -- start
  )
)

echo PM2服务启动完成!
"@

$batchContent | Out-File -FilePath $batchPath -Encoding ascii -Force
Write-Host "PM2启动脚本已创建" -ForegroundColor Green

# 保存当前PM2状态
Write-Host "保存当前PM2状态..." -ForegroundColor Yellow
try {
    # 切换到项目目录
    if (Test-Path "C:\websites\jujhub\JuJ-Hub") {
        Set-Location -Path "C:\websites\jujhub\JuJ-Hub"
        pm2 save
        Write-Host "PM2状态已保存" -ForegroundColor Green
    } else {
        Write-Host "警告: 无法切换到项目目录，跳过PM2状态保存" -ForegroundColor Yellow
    }
} catch {
    Write-Host "警告: PM2状态保存失败，可能没有运行中的应用" -ForegroundColor Yellow
}

# 创建计划任务
Write-Host "创建PM2开机自启计划任务..." -ForegroundColor Yellow

# 检查任务是否已存在
$taskExists = Get-ScheduledTask -TaskName "PM2-JuJHub" -ErrorAction SilentlyContinue

if ($taskExists) {
    Write-Host "删除现有的计划任务..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName "PM2-JuJHub" -Confirm:$false
}

$action = New-ScheduledTaskAction -Execute $batchPath
$trigger = New-ScheduledTaskTrigger -AtStartup
$principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
$settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable -ExecutionTimeLimit (New-TimeSpan -Minutes 5)

Register-ScheduledTask -TaskName "PM2-JuJHub" -Action $action -Trigger $trigger -Principal $principal -Settings $settings
Write-Host "PM2开机自启计划任务已创建" -ForegroundColor Green

# 创建PM2日志轮转
Write-Host "配置PM2日志轮转..." -ForegroundColor Yellow
try {
    pm2 install pm2-logrotate
    pm2 set pm2-logrotate:max_size 10M
    pm2 set pm2-logrotate:retain 10
    pm2 set pm2-logrotate:compress false
    Write-Host "PM2日志轮转已配置" -ForegroundColor Green
} catch {
    Write-Host "警告: PM2日志轮转配置失败" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "PM2开机自启配置完成!" -ForegroundColor Green
Write-Host "服务器重启后，PM2将自动启动JuJ Hub网站" -ForegroundColor Cyan
Write-Host ""
Write-Host "您可以使用以下命令检查PM2状态:" -ForegroundColor White
Write-Host "pm2 list" -ForegroundColor Yellow
Write-Host "pm2 logs" -ForegroundColor Yellow 