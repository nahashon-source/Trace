import './Cards.css'
function Cards({ musicData }) {
  return (
    <div className="music-grid">
      {musicData.map((music) => (
        <div key={music.id} className="music-card">
          <img src={music.cover} alt={music.title} />
          <h3>{music.title}</h3>
          <p>{music.artist}</p>
          <button className="play-button" aria-label={`Play ${music.title}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
