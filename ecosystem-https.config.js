module.exports = {
  apps: [
    {
      // 现有的HTTP服务（保持不变）
      name: 'jujhub-http',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './JuJ-Hub',  // 根据实际路径调整
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      // 新增的HTTPS服务
      name: 'jujhub-https',
      script: './https-server.js',
      cwd: './JuJ-Hub',  // 根据实际路径调整
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
}; 