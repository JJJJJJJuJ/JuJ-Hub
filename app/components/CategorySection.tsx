'use client';

import { motion } from 'framer-motion';
import SoftwareCard from './SoftwareCard';
import Link from 'next/link';

interface Software {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  downloadUrl?: string;
}

interface CategorySectionProps {
  title: string;
  description: string;
  software: Software[];
  categoryId: string;
}

const CategorySection = ({ title, description, software, categoryId }: CategorySectionProps) => {
  return (
    <section id={title} className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-between gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 inline-block">
            {title}
          </h2>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
        
        <Link 
          href={`/category/${categoryId}`}
          className="inline-flex items-center px-4 py-1.5 border border-purple-500 rounded-full text-sm font-medium bg-purple-800/20 hover:bg-purple-700/30 transition-all duration-300"
          tabIndex={0}
          aria-label={`查看更多${title}`}
        >
          查看更多
        </Link>
      </motion.div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
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
    </section>
  );
};

export default CategorySection; 