import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const Sidebar = ({ selectedMonth, setSelectedMonth }) => {
    return (_jsxs("aside", { className: "w-64 bg-blue-800 text-white p-4", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Months" }), _jsx("ul", { children: months.map((month) => (_jsx("li", { className: `p-2 cursor-pointer rounded-md ${selectedMonth === month ? "bg-blue-600" : "hover:bg-blue-700"}`, onClick: () => setSelectedMonth(month), children: month }, month))) })] }));
};
export default Sidebar;
