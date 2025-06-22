const { spawn } = require('child_process');
const path = require('path');

// 启动HTTPS服务器
const httpsServer = spawn('node', [path.join(__dirname, 'https-server.js')], {
  stdio: 'inherit',
  shell: true
});

// 启动HTTP重定向服务器
const httpServer = spawn('node', [path.join(__dirname, 'http-server.js')], {
  stdio: 'inherit',
  shell: true
});

// 处理进程退出
process.on('SIGINT', () => {
  console.log('正在关闭服务器...');
  httpsServer.kill();
  httpServer.kill();
  process.exit();
});

console.log('服务器已启动');
console.log('- HTTP重定向服务运行在端口 3000');
console.log('- HTTPS服务运行在端口 3001');
console.log('请确保配置了以下端口转发规则:');
console.log('1. 80 -> 3000 (HTTP)');
console.log('2. 443 -> 3001 (HTTPS)');
console.log('按Ctrl+C停止服务器'); 