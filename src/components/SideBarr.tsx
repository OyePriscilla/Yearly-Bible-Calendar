import React from "react";

interface SidebarProps {
  selectedMonth: string;
  setSelectedMonth: (month: string) => void;
}

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Sidebar: React.FC<SidebarProps> = ({ selectedMonth, setSelectedMonth }) => {
  return (
    <aside className="w-64 bg-blue-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Months</h2>
      <ul>
        {months.map((month) => (
          <li
            key={month}
            className={`p-2 cursor-pointer rounded-md ${
              selectedMonth === month ? "bg-blue-600" : "hover:bg-blue-700"
            }`}
            onClick={() => setSelectedMonth(month)}
          >
            {month}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
