import './Hero.css' // Import styles

function Hero() {
    return (
    <div className="hero">
        <video autoPlay loop muted className="hero-video">
        <source src="https://videos.pexels.com/video-files/7122113/7122113-sd_640_360_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
        <h1>Discover Your Sound</h1>
        <p>Find the best music that fits your vibe</p>
        <button className="button">EXPLORE</button>

        </div>
    </div>
)
}

export default Hero