import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import chatimg2 from "./assets/chatimg2.png";
import Button from "./Components/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewContainer from "./Components/NewContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />}></Route>
      <Route path="/signup" element={<NewContainer />}></Route>
    </Routes>
  );
}

export default App;
