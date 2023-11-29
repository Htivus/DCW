import { useState, FormEvent } from 'react';

interface TextFormProps {
  onSubmit: (text: string) => void; // Assuming onSubmit is a function taking a string parameter
}

const TextForm: React.FC<TextFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 ">
      <textarea
        className="w-full h-40 p-2 border border-gray-300 text-black rounded-lg"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default TextForm;
