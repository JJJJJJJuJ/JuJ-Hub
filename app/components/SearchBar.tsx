'use client';

import { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { software, Software } from '../data/software';
import Link from 'next/link';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Software[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // 搜索功能实现
  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = software.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered.slice(0, 5)); // 最多显示5个结果
  };

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  // 处理搜索提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim() !== '') {
      // 如果有结果，跳转到第一个结果
      if (results.length > 0) {
        const firstResult = results[0];
        if (firstResult.downloadUrl) {
          window.open(firstResult.downloadUrl, '_blank');
        } else {
          router.push(`/software/${firstResult.id}`);
        }
      }
      setIsOpen(false);
    }
  };

  // 点击外部关闭搜索结果
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(true)}
          placeholder="搜索软件..."
          className="w-full bg-gray-800/50 border border-gray-700 rounded-full px-4 py-2 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          aria-label="搜索软件"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </form>

      {/* 搜索结果下拉框 */}
      {isOpen && results.length > 0 && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
          <ul>
            {results.map((item) => (
              <li key={item.id} className="border-b border-gray-700 last:border-b-0">
                <Link 
                  href={item.downloadUrl ? item.downloadUrl : `/software/${item.id}`}
                  target={item.downloadUrl ? "_blank" : "_self"}
                  rel={item.downloadUrl ? "noopener noreferrer" : ""}
                  className="block px-4 py-3 hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="text-white font-medium">{item.name}</div>
                  <div className="text-xs text-gray-400">{item.category}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 无结果提示 */}
      {isOpen && query.trim() !== '' && results.length === 0 && (
        <div className="absolute mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 text-center z-50">
          <p className="text-gray-400">未找到相关软件</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 