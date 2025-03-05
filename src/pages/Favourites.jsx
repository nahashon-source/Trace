import React from 'react';
import '../index.css'; // Import the CSS file

const Favourites = () => {
  return (
    <div className="favourites-container">
      <h2>Favourites</h2>
      <table className="favourites-table">
        <thead>
          <tr>
            <th>Track</th>
            <th>Date added</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample Track</td>
            <td>3:45</td>
            <td>1 day ago</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Favourites;
