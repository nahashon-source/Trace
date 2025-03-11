import React from "react";
import Navbar from "../components/Navbar.jsx";
import WaveSoundIcon from '../assets/wave-sound.png';
import '../index.css'; 

const Button = ({ text, onClick }) => {
  return <button onClick={onClick} >{text}</button>;
};

const MusicStats = ({ genre, hours, artists }) => {
  return (
    <section>
      <h2>My Music Stats</h2>
      <img src={WaveSoundIcon} alt="Library Icon" className="library-icon" />
      <div>
        <p>Favourite Genre</p>
        <h2>{genre}</h2>
      </div>  
      <div>
        <p>Hours Listened</p>
        <h2>{hours}</h2>
      </div>
      <div>
        <p>Favourite Artists</p>
        <h2>{artists}</h2>
      </div>
    </section>
  );
};

const RecentlyPlayed = ({ songs }) => {
  return (
    <section>
      <h2>Recently Played</h2>
      <img src={WaveSoundIcon} alt="Library Icon" className="library-icon" />
      {songs.map((song, index) => (
        <div key={index}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
        </div>
      ))}
    </section>
  );
};

const Profile = () => {
  const handleEditProfile = () => {
    console.log("Edit Profile Clicked");
  };

  const recentlyPlayed = [
    { title: "Billy Jean", artist: "Michael Jackson" },
    { title: "Baby Comeback", artist: "Player" },
    { title: "Super Star", artist: "No Gun No Knife" },
  ];

  return (
    <div className="p-6">
      <Navbar />
      <section>
        <div>
          <h1>Johndoe</h1>
          <img 
            className="profile-img"
            src="https://media.istockphoto.com/id/2194874231/photo/photo-of-cool-crazy-retired-man-grandfather-dressed-yellow-bright-trendy-clothes-empty-space.jpg?s=612x612&w=0&k=20&c=Q9DHzYXqkDFMucUcJDyFk2IhNFWWRaJGWW7WNB2PADk=" 
            alt="Profile" 
          />
          <a href="mailto:johndoe@gmail.com">Johndoe@gmail.com</a><br></br>
      <button><p>profile contains information about your listening habits, preferences, and more.</p></button>
        </div>
      </section>
      <section>
        <Button text="Edit Profile" onClick={handleEditProfile} />
      </section>
      <MusicStats genre="Pop" hours="127" artists="24" />
      <RecentlyPlayed songs={recentlyPlayed} />
    </div>
  );
};

export default Profile;
