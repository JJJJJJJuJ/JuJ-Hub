'use client';

import { motion } from 'framer-motion';
import { FaLaptop, FaGamepad, FaTools, FaRocket } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="relative py-12 md:py-20">
      {/* 主内容区 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* 左侧文字区域 */}
          <div className="mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-sm font-semibold text-purple-400 tracking-wide uppercase mb-4">JuJ Hub</h2>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="block text-white">发现你需要的</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mt-2">
                  所有实用软件
                </span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-lg">
                一站式下载中心，精选常用软件，电脑开荒不愁
              </p>
            </motion.div>
            
            {/* 特性标签 */}
            <motion.div 
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['下载便捷', '安全可靠', '避免广告', '精选推荐'].map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 text-base bg-gray-800/50 border border-gray-700 rounded-full text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
          
          {/* 右侧卡片区域 */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { icon: <FaLaptop />, title: '常用软件', desc: '办公、浏览、通讯工具', color: 'from-purple-500 to-blue-500', href: '#常用软件' },
              { icon: <FaGamepad />, title: '游戏必备', desc: '语音聊天与网络加速', color: 'from-blue-500 to-cyan-500', href: '#游戏必备' },
              { icon: <FaTools />, title: '外设驱动', desc: '鼠标、键盘、耳机等', color: 'from-cyan-500 to-emerald-500', href: '#驱动下载' },
              { icon: <FaRocket />, title: '系统工具', desc: '驱动、优化与维护', color: 'from-emerald-500 to-yellow-500', href: '#好用的小软件' },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                className="relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700 p-5 hover:bg-gray-800 transition-all group cursor-pointer"
                tabIndex={0}
                aria-label={`查看${item.title}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-xl`}></div>
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-90 text-white mb-4 backdrop-blur-sm`}>
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* 底部统计数据 */}
        <motion.div 
          className="mt-10 pt-6 border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { number: '语音', label: '全都备齐' },
            { number: '外设', label: '驱动下载' },
            { number: '直播', label: '推流工具' },
            { number: '工具', label: '方便好用' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 