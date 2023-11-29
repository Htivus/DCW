"use client";
// components/TextDisplay.tsx

interface TextDisplayProps {
    text: string; // Assuming text is a string, adjust the type accordingly
  }
  
  const TextDisplay: React.FC<TextDisplayProps> = ({ text }) => {
    return (
      <div className="max-w-md mx-auto m-4 p-4  border border-gray-400 rounded-lg">
        <p className="text-xl">{text}</p>
      </div>
    );
  };
  
  export default TextDisplay;
  