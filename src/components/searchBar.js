import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// components/SearchBar.tsx
import { useState } from "react";
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim())
            onSearch(query.trim());
    };
    return (_jsxs("form", { onSubmit: handleSubmit, className: "flex gap-2 p-4", children: [_jsx("input", { type: "text", placeholder: "Search Bible (e.g. 'love' or 'John 3:16')", className: "flex-1 border px-4 py-2 rounded", value: query, onChange: (e) => setQuery(e.target.value) }), _jsx("button", { className: "bg-blue-600 text-white px-4 py-2 rounded", children: "Search" })] }));
};
export default SearchBar;
