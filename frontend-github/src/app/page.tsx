"use client"

import { useState, useEffect } from 'react';

export default function Home() {
  const [commits, setCommits] = useState<any[]>([]);

  useEffect(() => {
    const fetchCommits = async () => {
      const res = await fetch('http://localhost:3001/github/commits');
      const data = await res.json();
      setCommits(data);
    };

    fetchCommits();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-400 via-blue-500 to-indigo-600 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">GitHub Commits</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul>
            {commits.map(commit => (
              <li key={commit.sha} className="border-b-2 py-4">
                <div className="flex justify-between">
                  <span className="font-bold text-lg text-purple-600">{commit.commit.author.name}</span>
                  <span className="text-sm text-gray-500">{new Date(commit.commit.author.date).toLocaleDateString()}</span>
                </div>
                <p className="mt-2 text-gray-700">{commit.commit.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
