import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-text">NT</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Library">Library</Link></li>
                {/* <li><Link to="/Playlist">Playlist</Link></li>
                <li><Link to="/Favourites">Favourites</Link></li> 
                <li><Link to="/Downloads">Downloads</Link></li>  */}
                <li><Link to="/Profile">Profile</Link></li> 
            </ul>
        </nav>
    );
};

export default Navbar;
