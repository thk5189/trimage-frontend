import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Album from "./pages/Album";
import Photos from "./pages/Photos";
import Photo from "./pages/Photo";
import Editor from "./pages/Editor";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Update from "./pages/Update"

function App() {
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Banner /> {/* Include the Banner component */}
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Album" element={<Album URL={URL} />} />
          <Route exact path="/Photos" element={<Photos URL={URL} />} />
          <Route exact path="/Photo/:id" element={<Photo URL={URL} />} />
          <Route exact path="/Editor" element={<Editor URL={URL} />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Update" element={<Update />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
