import { useState } from "react";

interface DailyReadingProps {
  date: string;
  oldTestament: string;
  newTestament: string;
}

const DailyReading = ({ date, oldTestament, newTestament }: DailyReadingProps) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{date}</h2>
      <p><strong>OT:</strong> {oldTestament}</p>
      <p><strong>NT:</strong> {newTestament}</p>
      <button
        className={`mt-2 px-4 py-2 text-white ${completed ? "bg-green-500" : "bg-gray-500"}`}
        onClick={() => setCompleted(!completed)}
      >
        {completed ? "Completed" : "Mark as Read"}
      </button>
    </div>
  );
};

export default DailyReading;
