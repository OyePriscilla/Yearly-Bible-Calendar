import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_BIBLE_API_KEY;
const BIBLE_ID = "b8d1feac6e94bd74-01"; // Yoruba Bible

const YorubaBiblePage: React.FC = () => {
  const [books, setBooks] = useState<any[]>([]);
  const [selectedBookId, setSelectedBookId] = useState("");
  const [chapters, setChapters] = useState<any[]>([]);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [verses, setVerses] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load Bible books
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books`,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      );
      setBooks(response.data.data);
    };
    fetchBooks();
  }, []);

  // Load chapters when a book is selected
  useEffect(() => {
    const fetchChapters = async () => {
      if (!selectedBookId) return;
      const response = await axios.get(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/books/${selectedBookId}/chapters`,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      );
      setChapters(response.data.data);
    };
    fetchChapters();
  }, [selectedBookId]);

  // Load verses when a chapter is selected
  useEffect(() => {
    const fetchChapterContent = async () => {
      if (!selectedChapter) return;
      setIsLoading(true);
      const response = await axios.get(
        `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/chapters/${selectedChapter}`,
        {
          headers: {
            "api-key": API_KEY,
          },
        }
      );
      setVerses(response.data.data.content || []);
      setIsLoading(false);
    };
    fetchChapterContent();
  }, [selectedChapter]);

  return (
    <div className="pb-24 max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Bíbélì Mímọ́ Yorùbá
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setSelectedBookId(e.target.value)}
          value={selectedBookId}
        >
          <option value="">Select Book</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.name}
            </option>
          ))}
        </select>

        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setSelectedChapter(e.target.value)}
          value={selectedChapter}
          disabled={!chapters.length}
        >
          <option value="">Select Chapter</option>
          {chapters.map((chapter) => (
            <option key={chapter.id} value={chapter.id}>
              {chapter.reference}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <p className="text-center">N ń kó àyọkà wá...</p>
      ) : (
        <div className="space-y-4">
          {verses.length === 0 && selectedChapter && (
            <p className="italic text-center">Ko si àyọkà fun ori yìí.</p>
          )}
          {typeof verses === "string" ? (
            <div className="bg-white border p-4 rounded shadow">
              <div
                dangerouslySetInnerHTML={{ __html: verses }}
                className="prose prose-sm"
              />
            </div>
          ) : (
            verses.map((verse, idx) => (
              <div
                key={idx}
                className="bg-white border p-4 rounded shadow"
              >
                <p className="font-semibold text-lg">Verse {verse.verse}:</p>
                <div
                  dangerouslySetInnerHTML={{ __html: verse.text }}
                  className="prose prose-sm whitespace-pre-wrap"
                />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default YorubaBiblePage;
