import React from 'react';

export const Alert = ({ children, variant }) => {
  const alertStyles = {
    destructive: 'bg-red-100 text-red-700',
    success: 'bg-green-100 text-green-700',
  };

  return (
    <div className={`p-4 rounded ${alertStyles[variant] || ''}`}>
      {children}
    </div>
  );
};

export const AlertTitle = ({ children }) => (
  <h4 className="font-bold">{children}</h4>
);

export const AlertDescription = ({ children }) => (
  <p className="text-sm">{children}</p>
);
