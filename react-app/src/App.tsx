import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./components/Styles.css";
import Developer from "./components/Developer";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Developer></Developer>
      <About></About>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
