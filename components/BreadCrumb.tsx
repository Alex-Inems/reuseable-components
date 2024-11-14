// components/Breadcrumb.tsx
import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  items: { name: string; href: string }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav>
    {items.map((item, index) => (
      <span key={index}>
        <Link href={item.href}>{item.name}</Link>
        {index < items.length - 1 && ' / '}
      </span>
    ))}
  </nav>
);

export default Breadcrumb;
