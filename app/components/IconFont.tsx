'use client';

import React from 'react';

interface IconFontProps {
  type: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * IconFont组件 - 用于显示阿里巴巴矢量图标库的图标
 * @param type 图标类型，例如 'icon-wechat'
 * @param className 自定义类名
 * @param style 自定义样式
 * @param onClick 点击事件
 */
const IconFont: React.FC<IconFontProps> = ({ type, className = '', style = {}, onClick }) => {
  return (
    <i 
      className={`iconfont ${type} ${className}`} 
      style={style} 
      onClick={onClick}
      aria-hidden="true"
    />
  );
};

export default IconFont; 