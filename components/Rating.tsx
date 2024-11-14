// components/Rating.tsx
import React from 'react';

interface RatingProps {
  stars: number;
  maxStars?: number;
}

const Rating: React.FC<RatingProps> = ({ stars, maxStars = 5 }) => (
  <div>
    {[...Array(maxStars)].map((_, index) => (
      <span key={index}>{index < stars ? '★' : '☆'}</span>
    ))}
  </div>
);

export default Rating;
