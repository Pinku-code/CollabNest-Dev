// src/components/Spinner.jsx
import React from 'react';

const Spinner = ({ size = '18', color = 'white' }) => {
  return (
    <span
      className={`animate-spin inline-block h-${size} w-${size} border-2 border-${color} border-t-transparent rounded-full`}
    />
  );
};

export default Spinner;
