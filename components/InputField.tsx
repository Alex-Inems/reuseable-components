// components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder, type = 'text', onChange }) => (
  <div className="mb-4">
    {label && <label className="block text-gray-700">{label}</label>}
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-3 py-2 border rounded"
    />
  </div>
);

export default InputField;
