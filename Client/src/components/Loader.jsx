import React from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  const text = "CollabNest";

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Background Glow */}
      <div className="absolute -z-10 w-96 h-96 bg-indigo-500 opacity-10 blur-xl rounded-full animate-spin" />

      {/* Spinner */}
      <Loader2 className="w-14 h-14 text-indigo-600 dark:text-indigo-400 animate-spin mb-6" />

      {/* Text Animation */}
      <div className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-widest flex space-x-1">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="animate-reveal inline-block"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '2.5s',
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
