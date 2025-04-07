import React from "react";
import DayCard from "./DayCard";

interface CalendarProps {
  selectedMonth: string;
}

const sampleReadings = {
  "Old Testament I": "Genesis 1",
  "Old Testament II": "Psalm 1",
  "New Testament": "Matthew 1",
};

const Calendar: React.FC<CalendarProps> = ({ selectedMonth }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {[...Array(31)].map((_, index) => (
        <DayCard key={index} date={index + 1} readings={sampleReadings} />
      ))}
    </div>
  );
};

export default Calendar;
