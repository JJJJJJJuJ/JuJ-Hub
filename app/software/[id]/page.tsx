'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { software as allSoftware, Software } from '../../data/software';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageWithFallback from '../../components/ImageWithFallback';

export default function SoftwareDetailPage() {
  const params = useParams();
  const softwareId = params.id as string;
  
  const [softwareData, setSoftwareData] = useState<Software | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 查找对应ID的软件
    const foundSoftware = allSoftware.find(item => item.id === softwareId);
    
    if (foundSoftware) {
      setSoftwareData(foundSoftware);
    }
    
    setIsLoading(false);
  }, [softwareId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!softwareData) {
    return notFound();
  }

  return (
    <div className="pt-24 pb-10">
      <div className="max-w-5xl mx-auto">
        <Link 
          href={`/category/${softwareData.categoryId}`}
          className="inline-flex items-center text-gray-400 hover:text-white mb-6"
          tabIndex={0}
          aria-label={`返回${softwareData.category}分类`}
        >
          <FaArrowLeft className="mr-2" />
          返回{softwareData.category}
        </Link>
        
        <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-6">
            {/* 软件图标 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-64 h-64 relative overflow-hidden rounded-lg"
            >
              <ImageWithFallback 
                src={softwareData.imageUrl}
                alt={softwareData.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </motion.div>
            
            {/* 软件信息 */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{softwareData.name}</h1>
                <div className="text-sm text-purple-400 mb-6">{softwareData.category}</div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-200 mb-2">软件简介</h2>
                  <p className="text-gray-400">{softwareData.description}</p>
                </div>
                
                {softwareData.downloadUrl && (
                  <a
                    href={softwareData.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-medium transition-all duration-300"
                    tabIndex={0}
                    aria-label={`下载${softwareData.name}`}
                  >
                    <FaDownload className="mr-2" />
                    下载软件
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 