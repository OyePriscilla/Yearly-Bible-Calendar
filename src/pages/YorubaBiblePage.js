import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
const BIBLE_ID = "b8d1feac6e94bd74-01"; // Yoruba Bible
const YorubaBiblePage = () => {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState("");
    const [chapters, setChapters] = useState([]);
    const [selectedChapter, setSelectedChapter] = useState("");
    const [verses, setVerses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // Load Bible books
    useEffect(() => {
        const fetchBooks = async () => {
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books`, {
                headers: {
                    "api-key": API_KEY,
                },
            });
            setBooks(response.data.data);
        };
        fetchBooks();
    }, []);
    // Load chapters when a book is selected
    useEffect(() => {
        const fetchChapters = async () => {
            if (!selectedBookId)
                return;
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books/${selectedBookId}/chapters`, {
                headers: {
                    "api-key": API_KEY,
                },
            });
            setChapters(response.data.data);
        };
        fetchChapters();
    }, [selectedBookId]);
    // Load verses when a chapter is selected
    useEffect(() => {
        const fetchChapterContent = async () => {
            if (!selectedChapter)
                return;
            setIsLoading(true);
            const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/chapters/${selectedChapter}`, {
                headers: {
                    "api-key": API_KEY,
                },
            });
            setVerses(response.data.data.content || []);
            setIsLoading(false);
        };
        fetchChapterContent();
    }, [selectedChapter]);
    return (_jsxs("div", { className: "pb-24 max-w-3xl mx-auto p-6", children: [_jsx("h1", { className: "text-2xl font-bold text-center mb-4", children: "B\u00EDb\u00E9l\u00EC M\u00EDm\u1ECD\u0301 Yor\u00F9b\u00E1" }), _jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-6", children: [_jsxs("select", { className: "w-full p-2 border rounded", onChange: (e) => setSelectedBookId(e.target.value), value: selectedBookId, children: [_jsx("option", { value: "", children: "Select Book" }), books.map((book) => (_jsx("option", { value: book.id, children: book.name }, book.id)))] }), _jsxs("select", { className: "w-full p-2 border rounded", onChange: (e) => setSelectedChapter(e.target.value), value: selectedChapter, disabled: !chapters.length, children: [_jsx("option", { value: "", children: "Select Chapter" }), chapters.map((chapter) => (_jsx("option", { value: chapter.id, children: chapter.reference }, chapter.id)))] })] }), isLoading ? (_jsx("p", { className: "text-center", children: "N \u0144 k\u00F3 \u00E0y\u1ECDk\u00E0 w\u00E1..." })) : (_jsxs("div", { className: "space-y-4", children: [verses.length === 0 && selectedChapter && (_jsx("p", { className: "italic text-center", children: "Ko si \u00E0y\u1ECDk\u00E0 fun ori y\u00EC\u00ED." })), typeof verses === "string" ? (_jsx("div", { className: "bg-white border p-4 rounded shadow", children: _jsx("div", { dangerouslySetInnerHTML: { __html: verses }, className: "prose prose-sm" }) })) : (verses.map((verse, idx) => (_jsxs("div", { className: "bg-white border p-4 rounded shadow", children: [_jsxs("p", { className: "font-semibold text-lg", children: ["Verse ", verse.verse, ":"] }), _jsx("div", { dangerouslySetInnerHTML: { __html: verse.text }, className: "prose prose-sm whitespace-pre-wrap" })] }, idx))))] }))] }));
};
export default YorubaBiblePage;
