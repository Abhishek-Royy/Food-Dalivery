import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import SearchBar from "./searchbar/SearchBAr";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
