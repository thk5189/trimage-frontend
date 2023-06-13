// import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Header from "./components/Header";
// import Banner from "./components/Banner";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Album from "./pages/Album";
// import Photos from "./pages/Photos";
// import Photo from "./pages/Photo";
// import Editor from "./pages/Editor";
// import Learnmore from "./pages/Learnmore"

// function App() {
//   const URL = "http://localhost:4000/";

//   return (
//     <div className="App">
//       <Router>
//         <Header />
//         <Banner />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Album" element={<Album URL={URL} />} />
//           <Route path="/Photos" element={<Photos URL={URL} />} />
//           <Route path="/Photo/:id" element={<Photo URL={URL} />} />
//           <Route path="/Editor" element={<Editor URL={URL} />} />
//           <Route path="/Learnmore" element={<Learnmore />} />


//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

import Home from './pages/Home';
import Editor from './pages/Editor';
import Learnmore from './pages/Learnmore';
import Album from './pages/Album';
import AlbumDetail from './pages/AlbumDetail';

function App() {
  // const URL = 'http://localhost:4000';
  const URL = 'https://trimage-backend.herokuapp.com/'


  return (
    <div className="App">
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Editor" element={<Editor URL={URL} />} />
        <Route path="/Learnmore" element={<Learnmore />} />
        <Route path="/Album" element={<Album />} /> {/* Add the Album route */}
        <Route path="/Album/:id" element={<AlbumDetail />} /> 
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
