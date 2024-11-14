// components/Avatar.tsx
import React from 'react';

interface AvatarProps {
  src: string;
  size?: 'small' | 'medium' | 'large';
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 'medium', alt }) => {
  const dimensions = size === 'large' ? 'w-20 h-20' : size === 'small' ? 'w-8 h-8' : 'w-12 h-12';
  return <img src={src} alt={alt} className={`rounded-full ${dimensions}`} />;
};

export default Avatar;
