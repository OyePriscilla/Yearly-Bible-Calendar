import React, { useEffect, useState } from "react";
import { BibleVerses } from "../data/BibleVerses.json";
import { Link } from "react-router-dom";

const getRandomVerse = () => {
  const randomIndex = Math.floor(Math.random() * BibleVerses.length);
  const verse = BibleVerses[randomIndex];
  return { reference: verse.verse, text: verse.text };
};

const HomePage = () => {

  const [randomVerse, setRandomVerse] = useState<{ reference: string; text: string } | null>(null);

  useEffect(() => {
    const verse = getRandomVerse();
    setRandomVerse(verse);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">📅 Bible Yearly Calendar</h1>
      <p className="text-xl mb-8 text-center max-w-xl">
        Welcome to the Bible Yearly Calendar! Your daily companion to read
        through the Bible in one year. Discover daily reading plans from the Old
        Testament and New Testament, and track your progress effortlessly.
      </p>
      <div className="flex gap-4">
        <Link
          to="/calendar"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          📖 View Calendar
        </Link>
        <Link
          to="/Bible"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
           📖 English Bible
        </Link>
        <Link
          to="/yoruba-Bible"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
            📖 Yoruba Bible
        </Link>
        <Link
          to="/about"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          ℹ️ About
        </Link>
      </div>

        {/* Display Random Verse */}
        <div className="p-4 text-center">

      {randomVerse && (
        <div className="p-4 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">
          <h1>Bible Verse for Today</h1>
            📖 {randomVerse.reference}
          </h2>
          <p className="text-lg text-gray-700 dark:text-white whitespace-pre-wrap">
            {randomVerse.text}
          </p>
        </div>
      )}
    </div>

      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Bible Yearly Calendar. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
