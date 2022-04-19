import React from "react";
import Home from "./components/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
