import React from "react";

interface HeaderProps {
  selectedMonth: string;
}

const Header: React.FC<HeaderProps> = ({ selectedMonth }) => {
  return (
    <header className="bg-white p-4 shadow-md rounded-md mb-4">
      <h1 className="text-2xl font-semibold text-blue-700">
        📅 {selectedMonth} Bible Reading Plan
      </h1>
    </header>
  );
};

export default Header;
