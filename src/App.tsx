import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";
import AddBook from "./pages/addBook";
import EditBook from "pages/editBook";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<AddBook />} />
          <Route path="/edit" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
