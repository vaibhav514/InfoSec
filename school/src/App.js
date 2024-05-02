import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Checker from "./pages/checker";
import Deception from "./pages/de";
import Encryption from "./pages/en";
import PasswordGenerator from "./pages/pg";
import Quiz from "./pages/quizzes";
import Tools from "./pages/tools";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/pg" element={<PasswordGenerator />} />
          <Route path="/en" element={<Encryption />} />
          <Route path="/de" element={<Deception />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
