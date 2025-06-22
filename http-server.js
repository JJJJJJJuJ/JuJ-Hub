const http = require('http');

// 创建HTTP服务器，将所有请求重定向到HTTPS
http.createServer((req, res) => {
  // 获取主机名
  const host = req.headers.host;
  // 构建重定向URL
  const redirectUrl = `https://${host}${req.url}`;
  
  console.log(`重定向: ${req.url} -> ${redirectUrl}`);
  
  // 设置301永久重定向
  res.writeHead(301, { 'Location': redirectUrl });
  res.end();
}).listen(3000, () => {
  console.log('> HTTP重定向服务已启动，监听端口 3000');
  console.log('> 所有HTTP请求将被重定向到HTTPS');
}); 