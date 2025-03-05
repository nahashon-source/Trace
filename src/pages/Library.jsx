import { Link } from 'react-router-dom';
import React from 'react'


function Library() {
  return (
    <div>
        <section>
            <div>
                <h2>Library</h2>
                <p>Your playlis , liked songs , Artist and Downloads</p>
            </div>
        </section>
        <li><Link to="/Playlist">Playlist</Link></li>
       <li><Link to="/Favourites">Favourites</Link></li> 
       <li><Link to="/Artist">Artist</Link></li>
       <li><Link to="/Downloads">Downloads</Link></li> 
    </div>
  )
}

export default Library
