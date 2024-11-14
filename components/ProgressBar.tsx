// components/ProgressBar.tsx
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="w-full bg-gray-200 rounded h-4">
    <div className="bg-blue-500 h-4 rounded" style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;
