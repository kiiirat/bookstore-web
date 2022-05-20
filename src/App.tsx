import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import AddBook from "./pages/addBook";
import EditBook from "pages/editBook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new" element={<AddBook />} />
        <Route path="/edit" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
