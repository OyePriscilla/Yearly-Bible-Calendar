import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const DailyReading = ({ date, oldTestament, newTestament }) => {
    const [completed, setCompleted] = useState(false);
    return (_jsxs("div", { className: "border p-4 rounded shadow", children: [_jsx("h2", { className: "text-lg font-semibold", children: date }), _jsxs("p", { children: [_jsx("strong", { children: "OT:" }), " ", oldTestament] }), _jsxs("p", { children: [_jsx("strong", { children: "NT:" }), " ", newTestament] }), _jsx("button", { className: `mt-2 px-4 py-2 text-white ${completed ? "bg-green-500" : "bg-gray-500"}`, onClick: () => setCompleted(!completed), children: completed ? "Completed" : "Mark as Read" })] }));
};
export default DailyReading;
