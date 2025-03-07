import React from 'react';
import '../index.css'; 

// Sample data array which can be expanded in the future.
const favouritesData = [
  {
    id: 1,
    track:'Trap',
    song: 'Good Drank',
    artist: '2 chains, Gucci Mane, Quavo',
    duration: '3:57',
    added: '1 day ago'
  },
  {
    id : 2,
    song: 'Long Story Short',
    artist:'2 chains, Lil Wayne',
    duration: '2:45',
    added: '2 months ago'
  },
  {
    id: 3,
    song: 'Baby',
    artist: '21 Savage',
    duration: '3:20',
    added: '3 weeks ago'
  },
  {
    id: 4,
    song: 'Gangsta',
    artist: '21 Savage',
    duration: '4:05',
    added: '4 months ago'
  }
];

const Favourites = () => (
  <div className="favourites-container">
    <h2>Favourites</h2>
    <table className="favourites-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Artist</th>
          <th>Date added</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {favouritesData.map(({ id, artist, added, duration }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{artist}</td>
            <td>{added}</td>
            <td>{duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default React.memo(Favourites);
