const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// 检查环境变量
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// 证书文件路径 - 请根据Certify The Web的实际存储位置修改
const certPath = process.env.CERT_PATH || 'C:/ProgramData/certify/certes/assets/pfx';
const certFile = path.join(certPath, 'jujcsgo.cn.pfx'); // 可能需要根据实际文件名修改
const certPassword = process.env.CERT_PASSWORD || ''; // 如果证书有密码，请在环境变量中设置

// HTTPS配置
let httpsOptions;
try {
  // 尝试加载PFX证书
  httpsOptions = {
    pfx: fs.readFileSync(certFile),
    passphrase: certPassword
  };
  console.log('成功加载PFX证书');
} catch (err) {
  console.error('加载PFX证书失败，尝试加载PEM格式证书', err);
  
  try {
    // 备用方案：尝试加载PEM格式证书
    httpsOptions = {
      key: fs.readFileSync(path.join(certPath, 'privkey.pem')),
      cert: fs.readFileSync(path.join(certPath, 'fullchain.pem'))
    };
    console.log('成功加载PEM证书');
  } catch (err) {
    console.error('加载证书失败，请检查证书路径和格式', err);
    process.exit(1);
  }
}

// 准备Next.js应用
app.prepare().then(() => {
  // 创建HTTPS服务器
  createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3001, (err) => {
    if (err) throw err;
    console.log('> HTTPS服务已启动，监听端口 3001');
    console.log('> 请确保将443端口转发到3001端口');
  });
}); 