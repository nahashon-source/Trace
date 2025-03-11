import React from 'react';
import '../index.css';
import Navbar from '../components/Navbar.jsx';

// Sample data
const discoverData = [
  {
    title: 'Popular Genres',
    genres: ['All', 'Pop', 'Rock', 'Hip-Hop', 'R&B'],
  },
];

const topSongs = [
  { id: 1, title: 'Careless Whisper', duration: '5:04' },
  { id: 2, title: 'Blinding Lights', duration: '4:21' },
  { id: 3, title: 'Shape of You', duration: '3:56' },
  { id: 4, title: "Don't Start Now", duration: '3:20' },
  { id: 5, title: 'Stairway to Heaven', duration: '4:28' },
];

const pop = [
  { id: 6, title: 'Paint It, Black', duration: '4:05' },
  { id: 7, title: 'Stairway to Heaven', duration: '4:28' },
  { id: 8, title: 'Sugar', duration: '4:13' },
  { id: 9, title: 'Love Story', duration: '3:47' },
  { id: 10, title: 'Uptown Funk', duration: '4:11' },
];

const rock = [
  { id: 11, title: 'Bohemian Rhapsody', duration: '5:55' },
  { id: 12, title: 'Hotel California', duration: '6:30' },
  { id: 13, title: 'Sweet Child O’ Mine', duration: '5:56' },
];

const Discover = () => {
  return (
    <div>
      <Navbar />
      <section>
        <header>
          <h2>Discover Music</h2>
          <p>Discover new artists, albums, and playlists</p>
          <img src="" alt="" />
        </header>

        <div>
          <h3>Genres</h3>
          {discoverData.map(({ title, genres }) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3>Top Songs</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Song</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {topSongs.map(({ id, title, duration }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{duration}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {pop.map(({ id, title, duration }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{duration}</td>
                </tr>
              ))}
            </tbody>
            <tbody>
              {rock.map(({ id, title, duration }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Discover;
