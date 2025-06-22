# 设置HTTPS服务脚本

# 1. 复制HTTPS服务器文件到正确位置
Copy-Item -Path "https-server.js" -Destination "C:\websites\jujhub\JuJ-Hub\https-server.js" -Force
Write-Host "HTTPS服务器文件已复制到目标位置" -ForegroundColor Green

# 2. 复制PM2配置文件到正确位置
Copy-Item -Path "ecosystem-https.config.js" -Destination "C:\websites\jujhub\JuJ-Hub\ecosystem-https.config.js" -Force
Write-Host "PM2配置文件已复制到目标位置" -ForegroundColor Green

# 3. 停止现有PM2服务
Write-Host "停止现有PM2服务..." -ForegroundColor Yellow
cd C:\websites\jujhub\JuJ-Hub
pm2 stop all

# 4. 使用新的配置启动服务
Write-Host "使用新配置启动服务..." -ForegroundColor Yellow
pm2 start ecosystem-https.config.js
pm2 save

# 5. 配置端口转发（添加443端口转发到3001）
Write-Host "配置HTTPS端口转发..." -ForegroundColor Yellow
netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=3001 connectaddress=127.0.0.1

# 6. 显示当前端口转发配置
Write-Host "当前端口转发配置:" -ForegroundColor Green
netsh interface portproxy show all

# 7. 更新端口转发启动脚本
$portproxyScript = @"
@echo off
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=3000 connectaddress=127.0.0.1
netsh interface portproxy delete v4tov4 listenport=443 listenaddress=0.0.0.0
netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=3001 connectaddress=127.0.0.1
"@

$portproxyScript | Out-File -FilePath "C:\websites\jujhub\portproxy-setup.bat" -Encoding ascii -Force
Write-Host "端口转发启动脚本已更新" -ForegroundColor Green

Write-Host "HTTPS设置完成!" -ForegroundColor Green
Write-Host "您的网站现在可以通过以下地址访问:" -ForegroundColor Green
Write-Host "HTTP: http://jujcsgo.cn" -ForegroundColor Cyan
Write-Host "HTTPS: https://jujcsgo.cn" -ForegroundColor Cyan 