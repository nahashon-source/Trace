import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/home';
import PlaylistPage from './pages/PlaylistPage'; // Import the PlaylistPage component
import './App.css'; // Import your CSS file for styling
import Navbar from './components/Navbar';


const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Adjust based on your needs
  const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`); // Example data

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
          <Route path="/playlist" element={<PlaylistPage />} /> {/* Route for PlaylistPage */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
