import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Quiz from "./pages/quizzes";
import Home from "./pages/Home";
import Tools from "./pages/tools";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PasswordStrengthChecker from './pages/checker';
import PasswordGenerator from './pages/pg';
import Encryption from './pages/en';
import Deception from './pages/de';
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
          <Route path="/checker" element={<PasswordStrengthChecker />} />
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
