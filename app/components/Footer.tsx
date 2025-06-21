'use client';

import { motion } from 'framer-motion';
import { FaWeixin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="mt-20 py-10 bg-gradient-to-t from-gray-900/80 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">JuJ Hub</h3>
            <p className="mt-2 text-gray-400 text-sm">一站式软件下载平台</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-2 text-gray-300">
              <FaWeixin className="h-5 w-5 text-green-500" />
              <span>微信号：JuJCSGO</span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">© {new Date().getFullYear()} JuJ Hub. 保留所有权利。</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 