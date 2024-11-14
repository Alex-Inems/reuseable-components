// components/ToggleSwitch.tsx
import React, { useState } from 'react';

interface ToggleSwitchProps {
  onToggle: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onToggle(!checked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" checked={checked} onChange={handleChange} className="hidden" />
      <span className={`block w-10 h-6 rounded-full ${checked ? 'bg-green-500' : 'bg-gray-300'}`}>
        <span
          className={`block w-4 h-4 bg-white rounded-full transform transition-transform ${
            checked ? 'translate-x-4' : ''
          }`}
        />
      </span>
    </label>
  );
};

export default ToggleSwitch;
