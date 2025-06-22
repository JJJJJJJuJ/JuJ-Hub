@echo off
echo 配置JuJ Hub端口转发规则...

REM 删除现有的端口转发规则
netsh interface portproxy delete v4tov4 listenport=80 listenaddress=0.0.0.0
netsh interface portproxy delete v4tov4 listenport=443 listenaddress=0.0.0.0

REM 添加HTTP端口转发（80 -> 3000）
netsh interface portproxy add v4tov4 listenport=80 listenaddress=0.0.0.0 connectport=3000 connectaddress=127.0.0.1

REM 添加HTTPS端口转发（443 -> 3001）
netsh interface portproxy add v4tov4 listenport=443 listenaddress=0.0.0.0 connectport=3001 connectaddress=127.0.0.1

REM 显示当前端口转发配置
echo 当前端口转发配置:
netsh interface portproxy show all

echo 端口转发配置完成!
echo HTTP: 80 -> 3000
echo HTTPS: 443 -> 3001 