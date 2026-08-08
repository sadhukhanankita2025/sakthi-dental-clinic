import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main>
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* About Page */}
          <Route
            path="/about"
            element={<About />}
          />

        </Routes>
      </main>

    </BrowserRouter>
  );
}