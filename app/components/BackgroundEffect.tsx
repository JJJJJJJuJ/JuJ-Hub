'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffect = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
  }>>([]);
  
  useEffect(() => {
    // 创建足够多的粒子覆盖整个页面
    const particleCount = 100;
    const newParticles = Array(particleCount).fill(0).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 300, // 扩大y轴范围，覆盖更长的页面
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* 固定背景层 - 始终可见 */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* 主背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-black opacity-90"></div>
        
        {/* 网格效果 */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '50px 50px' 
          }}
        ></div>
        
        {/* 发光圆形 - 更加分散且边缘更加平滑 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 left-1/5 w-96 h-96 rounded-full bg-purple-600/10 filter blur-[130px] animate-pulse"></div>
          <div className="absolute top-2/3 right-1/5 w-96 h-96 rounded-full bg-blue-600/10 filter blur-[130px] animate-pulse"></div>
          <div className="absolute top-1/2 left-2/3 w-80 h-80 rounded-full bg-indigo-600/10 filter blur-[120px] animate-pulse"></div>
          <div className="absolute top-5/6 left-1/3 w-72 h-72 rounded-full bg-pink-600/5 filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-600/5 filter blur-[110px] animate-pulse"></div>
        </div>
      </div>
      
      {/* 粒子层 - 覆盖整个文档高度 */}
      <div className="fixed inset-0 -z-5 overflow-visible pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}vh`,
              opacity: particle.opacity,
              boxShadow: particle.size > 2 ? `0 0 ${particle.size * 2}px rgba(255,255,255,${particle.opacity * 0.5})` : 'none'
            }}
            animate={{
              y: [`${particle.y}vh`, `${particle.y - 100}vh`],
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
            }}
            transition={{
              duration: 30 / particle.speed,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>
      
      {/* 光线效果 - 更柔和的过渡 */}
      <div className="fixed top-0 left-0 w-full h-full -z-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-500/5 to-transparent blur-sm"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent blur-sm"></div>
        <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-radial from-indigo-500/5 to-transparent blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/10 w-1/4 h-1/4 bg-gradient-radial from-cyan-500/5 to-transparent blur-sm"></div>
      </div>
    </>
  );
};

export default BackgroundEffect; 