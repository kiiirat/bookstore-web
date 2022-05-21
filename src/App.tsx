import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import EditBook from "pages/editBook";
import { ApolloProvider } from "@apollo/client";
import { client } from "apollo/client";
import ProtectedPage from "components/protectPage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedPage />}>
            <Route path="/" element={<BookList />} />
            <Route path="/new" element={<AddBook />} />
            <Route path="/edit" element={<EditBook />} />s
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
