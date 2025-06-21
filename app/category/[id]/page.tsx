'use client';

import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getSoftwareByCategory, getAllSoftwareCategories, Software, CategoryInfo } from '../../data/software';
import SoftwareCard from '../../components/SoftwareCard';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  
  const [software, setSoftware] = useState<Software[]>([]);
  const [category, setCategory] = useState<CategoryInfo | null>(null);
  
  useEffect(() => {
    // 获取分类信息
    const categories = getAllSoftwareCategories();
    const currentCategory = categories.find(cat => cat.id === categoryId);
    
    if (!currentCategory) {
      notFound();
    }
    
    setCategory(currentCategory);
    
    // 获取该分类下的所有软件
    const categorySoftware = getSoftwareByCategory(categoryId);
    setSoftware(categorySoftware);
  }, [categoryId]);
  
  if (!category) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="w-16 h-16 border-4 border-t-purple-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
          {category.name}
        </h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">{category.description}</p>
      </motion.div>

      {software.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {software.map((item) => (
            <SoftwareCard
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              imageUrl={item.imageUrl}
              downloadUrl={item.downloadUrl}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-400">暂无软件</p>
        </div>
      )}
    </div>
  );
} 