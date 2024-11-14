// components/Accordion.tsx
import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="font-bold">
        {title}
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default Accordion;
