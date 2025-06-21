'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import ImageWithFallback from './ImageWithFallback';
import IconFont from './IconFont';

interface SoftwareCardProps {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  downloadUrl?: string;
  officialUrl?: string;
  iconType?: string; // 添加iconType属性，用于指定iconfont图标类型
}

const SoftwareCard = ({ 
  id, 
  name, 
  category, 
  imageUrl, 
  downloadUrl, 
  officialUrl,
  iconType 
}: SoftwareCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // 优先使用官方下载链接，如果没有则使用软件详情页
  const linkUrl = downloadUrl || `/software/${id}`;
  const isExternalLink = !!downloadUrl;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <Link 
        href={linkUrl}
        tabIndex={0}
        aria-label={`查看${name}详情`}
        className="block"
        target={isExternalLink ? "_blank" : "_self"}
        rel={isExternalLink ? "noopener noreferrer" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/30 transition-all duration-300 ${isHovered ? 'shadow-lg shadow-purple-500/20 scale-[1.02] border-purple-500/30' : ''}`}>
          {/* 图标容器 - 使用固定尺寸并居中显示图标 */}
          <div className="aspect-square relative overflow-hidden p-6 flex items-center justify-center">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 z-0"></div>
            <div className="absolute -inset-1 bg-grid-white/[0.02] z-0"></div>
            
            {/* 图标容器 */}
            <div className="relative w-3/4 h-3/4 flex items-center justify-center z-10">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-md"></div>
              <div className="relative w-full h-full p-3">
                {iconType ? (
                  // 如果提供了iconType，则使用IconFont组件显示图标
                  <div className="w-full h-full flex items-center justify-center">
                    <IconFont 
                      type={iconType} 
                      className="text-6xl text-white" 
                      style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
                    />
                  </div>
                ) : (
                  // 否则使用图片
                  <ImageWithFallback 
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>
            </div>
            
            {/* 底部渐变 */}
            <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-900/90 to-transparent z-20"></div>
          </div>

          {/* 软件信息 */}
          <div className="p-4 border-t border-gray-700/20 bg-gray-800/50 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white truncate">{name}</h3>
            <p className="text-xs text-gray-300 mt-1 truncate">{category}</p>
            {isExternalLink && (
              <div className="flex items-center mt-2">
                <span className="text-xs text-purple-400 flex items-center">
                  <FaExternalLinkAlt className="mr-1 h-3 w-3" /> 官方下载
                </span>
              </div>
            )}
          </div>

          {/* 悬浮效果 */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-700/70 to-blue-900/70 flex items-center justify-center z-30"
            >
              <div className="bg-white rounded-full p-3 shadow-lg shadow-purple-500/30">
                <FaDownload className="h-6 w-6 text-purple-600" />
              </div>
            </motion.div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default SoftwareCard; 