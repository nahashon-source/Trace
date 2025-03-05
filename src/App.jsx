import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import PlaylistPage from './pages/PlaylistPage'; 
import './App.css'; 
import Navbar from './components/Navbar';
import Library from './pages/Library';
import Favourites from './pages/Favourites.jsx'


const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; 
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); 

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <Router>
      <div className="app-container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Navbar/>} />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/library" element={<Library data={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
