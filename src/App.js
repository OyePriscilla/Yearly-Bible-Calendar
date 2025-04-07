import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calendar from "./pages/CalendarPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import BookMarked from "./pages/BookMarked";
import Bible from "./pages/Bible";
import YorubaBiblePage from "./pages/YorubaBiblePage";
const Navbars = [
    { path: "/", element: _jsx(Home, {}) },
    { path: "/calendar", element: _jsx(Calendar, {}) },
    { path: "/about", element: _jsx(About, {}) },
    { path: "/bookmarked", element: _jsx(BookMarked, {}) },
    { path: "/Bible", element: _jsx(Bible, {}) },
    { path: "/yoruba-Bible", element: _jsx(YorubaBiblePage, {}) },
];
function App() {
    return (_jsxs(_Fragment, { children: [_jsxs(Router, { children: [_jsx(Navbar, {}), _jsx(Routes, { children: Navbars.map((item) => (_jsx(Route, { path: item.path, element: item.element }, item.path))) })] }), _jsx(Footer, {})] }));
}
export default App;
