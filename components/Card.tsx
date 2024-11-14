// components/Card.tsx
import React from 'react';

interface CardProps {
  header?: string;
  footer?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, footer, children }) => (
  <div className="border rounded shadow-md p-4">
    {header && <div className="font-bold mb-2">{header}</div>}
    <div>{children}</div>
    {footer && <div className="mt-2 text-sm text-gray-500">{footer}</div>}
  </div>
);

export default Card;
