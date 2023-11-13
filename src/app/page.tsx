'use client';

import { useState } from "react"

const Page = () => {
  const [input, setInput] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Input cannot be empty');
      setMessage('');
    } else {
      setError('');
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      setMessage(diceRoll % 2 === 0 ? 'The provided corpus of text is AI generated' : 'The provided corpus of text has been written by a human');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold mb-4">True AI Detector</h1>
      <div className="flex justify-between w-full">
        <form className="flex flex-col flex-grow" onSubmit={handleSubmit}>
          <textarea className="mb-4 p-2 border border-gray-300 w-full h-full text-black" onChange={(e) => setInput(e.target.value)}></textarea>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="p-2 bg-blue-500 text-white">Check</button>
        </form>
        <div className="flex flex-col flex-grow p-4">
          <p>{message}</p>
        </div>
      </div>
      <footer className="mt-4">
        <a href="https://github.com/0plus1/trueaidetector.com" className="text-blue-500">View on GitHub</a>
      </footer>
    </main>
  )
}

export default Page;