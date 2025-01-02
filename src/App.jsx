// src/App.jsx
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import RoastDisplay from './components/RoastDisplay';
import Loader from './components/Loader';

const App = () => {
  const [roast, setRoast] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch real Instagram roast from backend
  const fetchRoast = async (username) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/instagram/roast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
  
      const data = await response.json();
      if (data.error) throw new Error(data.error);
  
      setRoast(data.roast);
    } catch (error) {
      console.error(error.message);
      setRoast("Couldn't fetch the roast. Try again later!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <InputForm onFetchData={fetchRoast} />
      {loading && <Loader />}
      <RoastDisplay roast={roast} />
    </div>
  );
};

export default App;
