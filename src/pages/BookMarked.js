import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const BookmarkPage = () => {
    const [bookmarks, setBookmarks] = useState([]);
    // Load Bookmarks from localStorage
    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setBookmarks(storedBookmarks);
    }, []);
    // Remove bookmark by date
    const removeBookmark = (date) => {
        const updatedBookmarks = bookmarks.filter((bookmark) => bookmark !== date);
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
    };
    return (_jsxs("div", { className: "pb-24 min-h-screen mt-12 flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white", children: [_jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700", children: [_jsx("h1", { className: "text-2xl font-bold", children: "\uD83D\uDCDA Bookmarked Dates" }), _jsx("button", { onClick: () => window.history.back(), className: "px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none", children: "Back to Calendar" })] }), _jsx("div", { className: "p-6", children: bookmarks.length === 0 ? (_jsx("p", { className: "text-lg text-center text-gray-500", children: "\u274C No bookmarks found. Start bookmarking some dates from the calendar!" })) : (_jsx("div", { className: "space-y-4", children: bookmarks.map((date, index) => (_jsx("div", { className: "flex justify-between items-center p-4 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-md", children: _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "mr-3 text-xl font-semibold", children: date }), _jsx("button", { onClick: () => removeBookmark(date), className: "text-red-500 hover:text-red-700 focus:outline-none", children: "\u274C Remove" })] }) }, index))) })) })] }));
};
export default BookmarkPage;
