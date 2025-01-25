// src/components/InputForm.jsx
import React, { useState } from 'react';

const InputForm = ({ onFetchData }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return alert('Please enter a username!');
    setLoading(true);
    await onFetchData(username);
    setLoading(false);
  };  

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">instagram Roaster App</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Instagram username"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Fetching...' : 'Roast Me!'}
        </button>
      </form>
    </div>
  );
};

export default InputForm;






djh