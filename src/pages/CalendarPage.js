import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import bibleReadingPlan from "../data/bibleReadingPlan.json";
const CalendarPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [reading, setReading] = useState(null);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [fontSize, setFontSize] = useState("medium");
    const [bookmarks, setBookmarks] = useState([]);
    const [selectedSection, setSelectedSection] = useState("Old Testament I");
    const renderCalendarDays = (month) => {
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1).map((date) => (_jsxs("div", { className: `calendar-day ${isToday(date.toString()) ? "bg-blue-500 text-white" : ""}`, "data-date": date, onClick: () => setSelectedDate(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${date}`), children: [date, _jsx("button", { className: "bookmark-btn", onClick: () => toggleBookmark(date.toString()), children: "\u2606" })] }, date)));
    };
    // Function to toggle bookmark status
    const toggleBookmark = (date) => {
        let updatedBookmarks = [...bookmarks];
        // Check if the date is already bookmarked
        if (updatedBookmarks.includes(date)) {
            updatedBookmarks = updatedBookmarks.filter((bookmark) => bookmark !== date); // Remove bookmark
        }
        else {
            updatedBookmarks.push(date); // Add bookmark
        }
        // Save updated bookmarks to localStorage and update the state
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        setBookmarks(updatedBookmarks);
    };
    // Function to check if a date is bookmarked
    const isBookmarked = (date) => {
        return bookmarks.includes(date);
    };
    // Load Bookmarks from localStorage
    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
        setBookmarks(storedBookmarks);
    }, []);
    // Check if the date is today
    const isToday = (date) => date === new Date().toISOString().split("T")[0];
    // Function to toggle Dark Mode
    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
        const newMode = !darkMode;
        localStorage.setItem("darkMode", newMode ? "enabled" : "disabled");
        document.documentElement.classList.toggle("dark", newMode);
    };
    // Load Dark Mode Preference
    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode === "enabled") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);
    // Utility to get month name from date
    const getMonthName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString("en-US", { month: "long" });
    };
    // Utility to get day from date
    const getDay = (dateString) => {
        const date = new Date(dateString);
        return date.getDate();
    };
    // Navigate to previous or next day
    const navigateDay = (offset) => {
        const currentDate = new Date(selectedDate);
        currentDate.setDate(currentDate.getDate() + offset);
        setSelectedDate(currentDate.toISOString().split("T")[0]);
    };
    const fetchBibleVerse = async (passage, title) => {
        if (!passage)
            return `❌ No passage provided for ${title}`;
        try {
            const encodedPassage = encodeURIComponent(passage);
            const response = await fetch(`https://bible-api.com/${encodedPassage}?translation=kjv`);
            const data = await response.json();
            if (data.verses) {
                // Format verses with hr separator
                const formattedVerses = data.verses
                    .map((verse) => {
                    return `<div>${verse.chapter}:${verse.verse}. ${verse.text.trim()}</div><hr class="border-t border-gray-300 dark:border-gray-950 mt-2" />`;
                })
                    .join(""); // Join verses as a single string
                return `📖 ${title}: ${passage}<br /><br />${formattedVerses}`;
            }
            else {
                return `❌ No verse found for ${passage}`;
            }
        }
        catch (error) {
            console.error("Error fetching Bible verse:", error);
            return `⚠️ Error fetching passage: ${passage}`;
        }
    };
    useEffect(() => {
        if (selectedDate) {
            setLoading(true);
            const monthName = getMonthName(selectedDate);
            const day = getDay(selectedDate).toString();
            const monthData = bibleReadingPlan.yearly_bible_calendar.months[monthName];
            const readingPlan = monthData ? monthData[day] : null;
            if (readingPlan) {
                const { "Old Testament I": old1, "Old Testament II": old2, "New Testament": newT, } = readingPlan;
                const sectionsToFetch = [];
                // Logic to fetch the correct sections based on selectedSection
                if (selectedSection === "Old Testament I") {
                    sectionsToFetch.push(fetchBibleVerse(old1, "Old Testament I"));
                }
                if (selectedSection === "Old Testament II") {
                    sectionsToFetch.push(fetchBibleVerse(old2, "Old Testament II"));
                }
                if (selectedSection === "New Testament") {
                    sectionsToFetch.push(fetchBibleVerse(newT, "New Testament"));
                }
                // If the selected section includes both Old Testament I & II or both OT and NT, fetch both
                if (selectedSection === "Old Testament I & II" || selectedSection === "Old Testament I & II, New Testament") {
                    sectionsToFetch.push(fetchBibleVerse(old1, "Old Testament I"));
                    sectionsToFetch.push(fetchBibleVerse(old2, "Old Testament II"));
                }
                if (selectedSection === "Old Testament I & II, New Testament") {
                    sectionsToFetch.push(fetchBibleVerse(newT, "New Testament"));
                }
                // Handle case when there are no readings to display
                if (sectionsToFetch.length === 0) {
                    setReading(null);
                    setLoading(false);
                    return;
                }
                // Fetch all the necessary readings
                Promise.all(sectionsToFetch).then((results) => {
                    const readingResults = {};
                    if (selectedSection === "Old Testament I" || selectedSection === "Old Testament I & II" || selectedSection === "Old Testament I & II, New Testament") {
                        readingResults.oldTestament1 = results[0];
                    }
                    if (selectedSection === "Old Testament II" || selectedSection === "Old Testament I & II" || selectedSection === "Old Testament I & II, New Testament") {
                        readingResults.oldTestament2 = results[1];
                    }
                    if (selectedSection === "New Testament" || selectedSection === "Old Testament I & II, New Testament") {
                        readingResults.newTestament = results[2];
                    }
                    setReading(readingResults);
                    setLoading(false);
                }).catch((error) => {
                    setLoading(false);
                });
            }
            else {
                setReading(null);
                setLoading(false);
            }
        }
    }, [selectedDate, selectedSection]);
    return (_jsxs("div", { className: `p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`, children: [_jsxs("div", { className: "flex justify-between items-center mb-2 mt-20", children: [_jsx("button", { onClick: () => navigateDay(-1), className: "bg-gray-300 dark:bg-gray-700 p-2 rounded shadow-md", children: "\u25C0\uFE0F Prev" }), _jsxs("h1", { className: "text-xl font-bold", children: ["\uD83D\uDCC5 ", getMonthName(selectedDate), " ", getDay(selectedDate)] }), _jsx("button", { onClick: () => navigateDay(1), className: "bg-gray-300 dark:bg-gray-700 p-2 rounded shadow-md", children: "Next \u25B6\uFE0F" })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 p-4 w-full max-w-6xl mx-auto rounded-md text-black bg-blue-50", children: renderCalendarDays(getMonthName(selectedDate)) }), _jsxs("div", { className: "flex flex-wrap justify-between items-end w-full h-18 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md", children: [_jsxs("div", { className: "w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0 mr-4", children: [_jsx("label", { className: "block font-semibold text-gray-800 dark:text-white mb-2", children: "Select Section" }), _jsxs("select", { value: selectedSection, onChange: (e) => setSelectedSection(e.target.value), className: "w-full p-3 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500", children: [_jsx("option", { value: "Old Testament I & II", children: "Old Testament I & II" }), _jsx("option", { value: "Old Testament I & II, New Testament", children: "Old Testament I & II, New Testament" }), _jsx("option", { value: "New Testament", children: "New Testament" })] })] }), _jsxs("div", { className: "w-full sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0", children: [_jsx("label", { className: "block font-semibold text-gray-800 dark:text-white mb-2", children: "Select Date" }), _jsx("input", { type: "date", value: selectedDate, onChange: (e) => setSelectedDate(e.target.value), className: "w-full p-3 border rounded-md bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { className: "flex gap-x-4 mt-4 sm:mt-0", children: [_jsx("button", { onClick: () => toggleBookmark(selectedDate), className: "flex items-center p-3 bg-yellow-400 dark:bg-yellow-600 text-gray-900 dark:text-white rounded-md shadow-md transition duration-200 ease-in-out hover:bg-yellow-500 dark:hover:bg-yellow-500", children: isBookmarked(selectedDate) ? "⭐ Bookmarked" : "☆ Bookmark" }), _jsx("button", { onClick: toggleDarkMode, className: "flex items-center p-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md shadow-md transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600", children: darkMode ? "🌙 Dark" : "☀️ Light" })] })] }), loading && _jsx("p", { className: "mt-4", children: "\uD83D\uDD04 Loading..." }), reading && (_jsxs("div", { className: "max-w-screen-lg mx-auto mt-6 space-y-4", children: [_jsxs("div", { className: "p-4 bg-blue-100 dark:bg-blue-900 rounded-lg shadow-md", children: [_jsx("h2", { className: "font-semibold text-lg", children: "\uD83D\uDCDC Old Testament I" }), _jsx("p", { className: "text-gray-800 dark:text-white", dangerouslySetInnerHTML: { __html: reading.oldTestament1 } })] }), _jsxs("div", { className: "p-4 bg-green-100 dark:bg-green-900 rounded-lg shadow-md mt-8", children: [_jsx("h2", { className: "font-semibold text-lg", children: "\uD83D\uDCDC Old Testament II" }), _jsx("p", { className: "text-gray-800 dark:text-white", dangerouslySetInnerHTML: { __html: reading.oldTestament2 } })] }), _jsxs("div", { className: "pb-24 bg-yellow-100 dark:bg-yellow-900 rounded-lg shadow-md mt-8", children: [_jsx("h2", { className: "font-semibold text-lg", children: "\uD83D\uDCDC New Testament" }), _jsx("p", { className: "text-gray-800 dark:text-white", dangerouslySetInnerHTML: { __html: reading.newTestament } })] })] })), !loading && selectedDate && !reading && (_jsx("p", { className: "mt-4", children: "\u274C No reading plan found for this date." }))] }));
};
export default CalendarPage;
