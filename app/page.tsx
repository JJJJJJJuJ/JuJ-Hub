'use client';

import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import { getAllSoftwareCategories, getSoftwareByCategory } from './data/software';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLaptop, FaGamepad, FaTools, FaSearch, FaVideo, FaPaintBrush, FaCogs } from 'react-icons/fa';
import { ReactNode } from 'react';

// 定义颜色集合的接口
interface ColorSet {
  gradient: string;
  gradientLight: string;
  shadow: string;
}

export default function Home() {
  // 获取所有软件分类
  const categories = getAllSoftwareCategories();
  
  // 为每个分类选择前5个软件展示
  const categorySoftware = categories.map(category => {
    return {
      ...category,
      software: getSoftwareByCategory(category.id).slice(0, 5)
    };
  });

  // 分类图标映射
  const categoryIcons: Record<string, ReactNode> = {
    'common': <FaLaptop className="text-2xl text-white" />,
    'gaming': <FaGamepad className="text-2xl text-white" />,
    'drivers': <FaTools className="text-2xl text-white" />,
    'testing': <FaSearch className="text-2xl text-white" />,
    'streaming': <FaVideo className="text-2xl text-white" />,
    'desktop': <FaPaintBrush className="text-2xl text-white" />,
    'utilities': <FaCogs className="text-2xl text-white" />
  };

  // 分类颜色映射 - 使用固定类名而非动态生成
  const categoryColors: Record<string, ColorSet> = {
    'common': {
      gradient: 'bg-gradient-to-br from-purple-600 to-blue-600',
      gradientLight: 'bg-gradient-to-br from-purple-600/30 to-blue-600/30',
      shadow: 'shadow-purple-500/20'
    },
    'gaming': {
      gradient: 'bg-gradient-to-br from-blue-600 to-cyan-600',
      gradientLight: 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30',
      shadow: 'shadow-blue-500/20'
    },
    'drivers': {
      gradient: 'bg-gradient-to-br from-emerald-600 to-green-600',
      gradientLight: 'bg-gradient-to-br from-emerald-600/30 to-green-600/30',
      shadow: 'shadow-emerald-500/20'
    },
    'testing': {
      gradient: 'bg-gradient-to-br from-amber-600 to-orange-600',
      gradientLight: 'bg-gradient-to-br from-amber-600/30 to-orange-600/30',
      shadow: 'shadow-amber-500/20'
    },
    'streaming': {
      gradient: 'bg-gradient-to-br from-red-600 to-pink-600',
      gradientLight: 'bg-gradient-to-br from-red-600/30 to-pink-600/30',
      shadow: 'shadow-red-500/20'
    },
    'desktop': {
      gradient: 'bg-gradient-to-br from-fuchsia-600 to-purple-600',
      gradientLight: 'bg-gradient-to-br from-fuchsia-600/30 to-purple-600/30',
      shadow: 'shadow-fuchsia-500/20'
    },
    'utilities': {
      gradient: 'bg-gradient-to-br from-cyan-600 to-teal-600',
      gradientLight: 'bg-gradient-to-br from-cyan-600/30 to-teal-600/30',
      shadow: 'shadow-cyan-500/20'
    }
  };

  return (
    <div className="pb-10">
      <Hero />
      
      {/* 快速分类导航 - 美化版 */}
      <div className="my-0 relative">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] -z-10"></div>
        <div className="absolute -left-20 top-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -right-20 bottom-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
              探索分类
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              浏览我们精心整理的软件分类，找到您需要的一切工具和应用
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
            {categories.map((category, index) => {
              // 确保分类ID存在于映射中
              const colorSet = categoryColors[category.id] || categoryColors['common'];
              
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Link 
                    href={`/category/${category.id}`}
                    className="block h-full"
                    tabIndex={0}
                    aria-label={`查看${category.name}分类`}
                  >
                    <div className="relative h-full group">
                      {/* 卡片背景 */}
                      <div className={`absolute inset-0 ${colorSet.gradientLight} rounded-xl blur-sm transform group-hover:scale-105 transition-all duration-300`}></div>
                      
                      {/* 卡片内容 */}
                      <div className="relative bg-gray-800/70 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 rounded-xl p-5 h-full flex flex-col items-center justify-center gap-4 overflow-hidden group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                        {/* 图标 */}
                        <div className={`relative z-10 ${colorSet.gradient} p-3.5 rounded-full transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg ${colorSet.shadow}`}>
                          {categoryIcons[category.id]}
                        </div>
                        
                        {/* 名称 */}
                        <h3 className="text-center font-medium text-white relative z-10 transform group-hover:scale-105 transition-all duration-300">
                          {category.name}
                        </h3>
                        
                        {/* 装饰元素 */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* 每个分类的精选内容 */}
      {categorySoftware.map((category) => (
        <div key={category.id} id={category.id}>
          <CategorySection
            title={category.name}
            description={category.description}
            software={category.software}
            categoryId={category.id}
          />
        </div>
      ))}
    </div>
  );
}
