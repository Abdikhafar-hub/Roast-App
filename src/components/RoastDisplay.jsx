// src/components/RoastDisplay.jsx
import React from 'react';

const RoastDisplay = ({ roast }) => {
  if (!roast) return null;

  return (
    <div className="p-4 mt-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-2">Your Roaster:</h2>
      <p className="text-gray-700">{roast}</p>
    </div>
  );
};

export default RoastDisplay;
