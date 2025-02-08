import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'

// Sample music data
const musicData = [
  {
    id: 1,
    title: "Midnight Dreams",
    artist: "Luna Echo",
    cover: "https://picsum.photos/seed/music1/300"
  },
  {
    id: 2,
    title: "Summer Waves",
    artist: "Solar Beats",
    cover: "https://picsum.photos/seed/music2/300"
  },
  {
    id: 3,
    title: "Urban Jungle",
    artist: "Metro Pulse",
    cover: "https://picsum.photos/seed/music3/300"
  },
  {
    id: 4,
    title: "Neon Lights",
    artist: "Digital Dreams",
    cover: "https://picsum.photos/seed/music4/300"
  },
  {
    id: 5,
    title: "Ocean Breeze",
    artist: "Wave Riders",
    cover: "https://picsum.photos/seed/music5/300"
  },
  {
    id: 6,
    title: "Mountain High",
    artist: "Peak Experience",
    cover: "https://picsum.photos/seed/music6/300"
  },
  {
    id: 7,
    title: "Desert Storm",
    artist: "Sand Warriors",
    cover: "https://picsum.photos/seed/music7/300"
  },
  {
    id: 8,
    title: "City Lights",
    artist: "Urban Sound",
    cover: "https://picsum.photos/seed/music8/300"
  }
]

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredMusic = musicData.filter(music =>
    music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    music.artist.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Cards musicData={filteredMusic} />
    </div>
  )
}

export default HomePage