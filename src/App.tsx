import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import AddBook from "./pages/addBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
