import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Header = ({ selectedMonth }) => {
    return (_jsx("header", { className: "bg-white p-4 shadow-md rounded-md mb-4", children: _jsxs("h1", { className: "text-2xl font-semibold text-blue-700", children: ["\uD83D\uDCC5 ", selectedMonth, " Bible Reading Plan"] }) }));
};
export default Header;
