import { jsx as _jsx } from "react/jsx-runtime";
import DayCard from "./DayCard";
const sampleReadings = {
    "Old Testament I": "Genesis 1",
    "Old Testament II": "Psalm 1",
    "New Testament": "Matthew 1",
};
const Calendar = ({ selectedMonth }) => {
    return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [...Array(31)].map((_, index) => (_jsx(DayCard, { date: index + 1, readings: sampleReadings }, index))) }));
};
export default Calendar;
