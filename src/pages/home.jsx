import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import './HomePage.css';
import Footer from '../components/Footer';

const musicData = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Echo",
    cover: "https://picsum.photos/seed/music1/300",
  },
  {
    id: 2,
    title: "Summer Waves",
    artist: "Solar Beats",
    cover: "https://picsum.photos/seed/music2/300",
  },
  {
    id: 3,
    title: "Urban Jungle",
    artist: "Metro Pulse",
    cover: "https://picsum.photos/seed/music3/300",
  },
  {
    id: 4,
    title: "Neon Lights",
    artist: "Digital Dreams",
    cover: "https://picsum.photos/seed/music4/300",
  },
  {
    id: 5,
    title: "Ocean Breeze",
    artist: "Wave Riders",
    cover: "https://picsum.photos/seed/music5/300",
  },
  {
    id: 6,
    title: "Mountain High",
    artist: "Peak Experience",
    cover: "https://picsum.photos/seed/music6/300",
  },
  {
    id: 7,
    title: "Desert Storm",
    artist: "Sand Warriors",
    cover: "https://picsum.photos/seed/music7/300",
  },
  {
    id: 8,
    title: "City Lights",
    artist: "Urban Sound",
    cover: "https://picsum.photos/seed/music8/300",
  },
  {
    id: 9,
    title: "Midnight Groove",
    artist: "Nocturnal Beats",
    cover: "https://picsum.photos/seed/music9/300",
  },
  {
    id: 10,
    title: "Dreamscape",
    artist: "Echo Rhythms",
    cover: "https://picsum.photos/seed/music10/300",
  },
  {
    id: 11,
    title: "Sunset Vibes",
    artist: "Beach Sounds",
    cover: "https://picsum.photos/seed/music11/300",
  },
  {
    id: 12,
    title: "Rising Star",
    artist: "Night Owls",
    cover: "https://picsum.photos/seed/music12/300",
  },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Items per page

  // Filter music based on search term
  const filteredMusic = musicData.filter(
    (music) =>
      music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      music.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the current page's music items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMusic.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(filteredMusic.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="homepage">
      <Hero /> {/* Hero Section */}
      <div className="content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Cards musicData={currentItems} />
      </div>
      
      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <Footer /> {/* Footer Section */}
    </div>
  );
}

export default HomePage;
