import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { BibleVerses } from "../data/BibleVerses.json";
import { Link } from "react-router-dom";
const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * BibleVerses.length);
    const verse = BibleVerses[randomIndex];
    return { reference: verse.verse, text: verse.text };
};
const HomePage = () => {
    const [randomVerse, setRandomVerse] = useState(null);
    useEffect(() => {
        const verse = getRandomVerse();
        setRandomVerse(verse);
    }, []);
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6", children: [_jsx("h1", { className: "text-4xl font-bold mb-6", children: "\uD83D\uDCC5 Bible Yearly Calendar" }), _jsx("p", { className: "text-xl mb-8 text-center max-w-xl", children: "Welcome to the Bible Yearly Calendar! Your daily companion to read through the Bible in one year. Discover daily reading plans from the Old Testament and New Testament, and track your progress effortlessly." }), _jsxs("div", { className: "flex gap-4", children: [_jsx(Link, { to: "/calendar", className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition", children: "\uD83D\uDCD6 View Calendar" }), _jsx(Link, { to: "/Bible", className: "bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition", children: "\uD83D\uDCD6 English Bible" }), _jsx(Link, { to: "/yoruba-Bible", className: "bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition", children: "\uD83D\uDCD6 Yoruba Bible" }), _jsx(Link, { to: "/about", className: "bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition", children: "\u2139\uFE0F About" })] }), _jsx("div", { className: "p-4 text-center", children: randomVerse && (_jsxs("div", { className: "p-4 bg-blue-100 dark:bg-gray-800 rounded-lg shadow-md", children: [_jsxs("h2", { className: "text-2xl font-bold text-blue-600 mb-2", children: [_jsx("h1", { children: "Bible Verse for Today" }), "\uD83D\uDCD6 ", randomVerse.reference] }), _jsx("p", { className: "text-lg text-gray-700 dark:text-white whitespace-pre-wrap", children: randomVerse.text })] })) }), _jsx("footer", { className: "fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center", children: _jsxs("p", { children: ["\u00A9 ", new Date().getFullYear(), " Bible Yearly Calendar. All rights reserved."] }) })] }));
};
export default HomePage;
