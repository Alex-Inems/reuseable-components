// components/Tooltip.tsx
import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => (
  <div className="relative flex items-center group">
    {children}
    <div className="absolute bottom-full mb-2 hidden group-hover:flex bg-gray-700 text-white text-sm px-2 py-1 rounded">
      {text}
    </div>
  </div>
);

export default Tooltip;
