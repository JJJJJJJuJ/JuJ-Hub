'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: '常用软件', href: '/category/common', id: 'common' },
    { name: '游戏必备', href: '/category/gaming', id: 'gaming' },
    { name: '驱动下载', href: '/category/drivers', id: 'drivers' },
    { name: '检测工具', href: '/category/testing', id: 'testing' },
    { name: '直播推流', href: '/category/streaming', id: 'streaming' },
    { name: '桌面美化', href: '/category/desktop', id: 'desktop' },
    { name: '好用的小软件', href: '/category/utilities', id: 'utilities' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-gradient-to-b from-gray-800/85 to-gray-900/75 backdrop-blur-lg border-purple-500/10 shadow-md shadow-purple-500/15' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-md shadow-purple-500/20">
                <Image 
                  src="https://s21.ax1x.com/2025/06/19/pVVAWmn.png" 
                  alt="JuJ Hub Logo" 
                  width={40} 
                  height={40}
                  className="object-cover"
                  priority={true}
                />
              </div>
              <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                JuJ Hub
              </span>
            </Link>
          </motion.div>

          {/* 搜索栏 - 桌面版显示 */}
          <div className="hidden md:block mx-4 flex-1 max-w-md">
            <SearchBar />
          </div>

          {/* 桌面版导航 - 简化为下拉菜单 */}
          <div className="hidden md:flex items-center">
            <div className="relative group">
              <button 
                className="flex items-center gap-2 bg-gray-800/70 hover:bg-gray-700/70 text-gray-200 px-4 py-2 rounded-lg transition-all duration-200 border border-gray-700/30"
                tabIndex={0}
              >
                <span>分类浏览</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute right-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2 bg-gray-800/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/30">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-700/30 transition-colors duration-200"
                      tabIndex={0}
                      aria-label={link.name}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              tabIndex={0}
              aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
            >
              {isMobileMenuOpen ? 
                <FaTimes className="h-6 w-6" /> : 
                <FaBars className="h-6 w-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-md"
        >
          {/* 移动端搜索栏 */}
          <div className="p-4">
            <SearchBar />
          </div>
          
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white hover:bg-purple-700/30 block px-3 py-2 rounded-md text-base font-medium"
                tabIndex={0}
                aria-label={link.name}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 