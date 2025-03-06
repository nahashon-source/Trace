// import { Link } from 'react-router-dom';
// import  WaveSoundIcon from '../assets/wave-sound.png';
// import React from 'react'
// import '../index.css';


// function Library() {
//   return (
//     <div>
//         <section>
//             <div>
//                <img src={WaveSoundIcon} alt="wave sound icon" />
//                 <h2>Library</h2>
//                 <p>Your playlis , liked songs , Artist and Downloads</p>
//             </div>
//         </section>
//         <li><Link to="/Playlist">Playlist</Link></li>
//        <li><Link to="/Favourites">Favourites</Link></li> 
//        <li><Link to="/Discover">Discover</Link></li>
//        <li><Link to="/Downloads">Downloads</Link></li> 
//     </div>
//   )
// }

// export default Library






import { Link } from 'react-router-dom';
import WaveSoundIcon from '../assets/wave-sound.png';
import React from 'react';
import '../index.css';  // Import the CSS file

function Library() {
  return (
    <div className="library-container">
      <section className="library-card">
        <div className="library-header">
          <img src={WaveSoundIcon} alt="Library Icon" className="library-icon" />
          <h2 className="library-title">Library</h2>
        </div>

        <p className="library-description">
          Your playlists, liked songs, artists, and downloads.
        </p>

        <div className="library-list">
          <Link to="/Playlist" className="library-button">Playlist</Link>
          <Link to="/Favourites" className="library-button">Favourites</Link>
          <Link to="/Discover" className="library-button">Discover</Link>
          <Link to="/Downloads" className="library-button">Downloads</Link>
        </div>
      </section>
    </div>
  );
}

export default Library;
