import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/global.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Calendar from "./pages/CalendarPage";
import About from "./pages/About";
import Footer from "./components/Footer";
import BookMarked from "./pages/BookMarked";
import { NavbarItem } from "./types";
import Bible from "./pages/Bible";
import YorubaBiblePage from "./pages/YorubaBiblePage";

const Navbars: NavbarItem[] = [
  { path: "/", element: <Home /> },
  { path: "/calendar", element: <Calendar /> },
  { path: "/about", element: <About /> },
  { path: "/bookmarked", element: <BookMarked /> },
  { path: "/Bible", element: <Bible /> },
  { path: "/yoruba-Bible", element: <YorubaBiblePage /> },
];

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {Navbars.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
