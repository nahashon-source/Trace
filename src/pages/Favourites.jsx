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
    duration: '4:10',
    added: '4 months ago'
  },
  {
    id: 5,
    song: 'Deli',
    artist: 'Ice spice',
    duration: '4:25',
    added: '3 months ago'
  },
  {
    id: 6,
    song: 'Highschool',
    artist: 'Nicki minaj',
    duration: '4:30',
    added: '4 months ago'
  },
  {
    id: 7,
    song: 'Mi Baby',
    artist: 'Vybz Kartel',
    duration: '4:45',
    added: '4 months ago'
  },
  {
    id: 8,
    song: 'Silence',
    artist: 'Khalid',
    duration: '4:50',
    added: '4 months ago'
  },
  {
    id: 9,
    song: 'Money',
    artist: 'Cardi B',
    duration: '4:55',
    added: '4 months ago'
  }, 
  {
    id: 10,
    song: 'Streets',
    artist: 'Doja Cat',
    duration: '4:57',
    added: '4 months ago'
  },
  {
    id: 11,
    song: 'Loyal',
    artist: 'Partynextdoor',
    duration: '5:00',
    added: '4 months ago'
  },
  {
    id: 12,
    song: '2 on',
    artist: 'Tinashe',
    duration: '5:05',
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
