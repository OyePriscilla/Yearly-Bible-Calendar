import React from "react";

interface Reading {
  "Old Testament I": string;
  "Old Testament II": string;
  "New Testament": string;
}

interface DayProps {
  date: number;
  readings: Reading;
}

const DayCard: React.FC<DayProps> = ({ date, readings }) => (
  <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
    <h3 className="text-xl font-semibold text-blue-700">Day {date}</h3>
    <p className="text-gray-600">📖 {readings["Old Testament I"]}</p>
    <p className="text-gray-600">📖 {readings["Old Testament II"]}</p>
    <p className="text-gray-600">📖 {readings["New Testament"]}</p>
  </div>
);

export default DayCard;
