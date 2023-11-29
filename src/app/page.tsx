"use client";
import { useState } from 'react';
import TextForm from './components/TextForm';
import TextDisplay from './components/TextDisplay';

const Home = () => {
  const [displayText, setDisplayText] = useState('');

  const handleSubmit = async (text:any) => {
    // In a real application, you would send the text to your server and save it in MongoDB
    // For simplicity, we'll just update the state here
    setDisplayText(text);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <TextDisplay text={displayText} />
      <TextForm onSubmit={handleSubmit} />
      
    </div>
  );
};

export default Home;
