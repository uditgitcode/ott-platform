import { useState } from 'react'
import MediaCard from '../components/MediaCard.jsx'

function Channels({ channels, favorites, toggleFavorite }) {
  const [searchText, setSearchText] = useState('')

  const filteredChannels = channels.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span>Channel lineup</span>
          <h2>Live experiences and curated libraries</h2>
        </div>
      </div>

      <div className="search-bar" style={{ maxWidth: '460px', marginBottom: '24px' }}>
        <span>📺</span>
        <input
          className="search-input"
          type="search"
          value={searchText}
          placeholder="Search channels"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <div className="card-grid">
        {filteredChannels.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
            isFavorite={favorites.some((favorite) => favorite.id === item.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  )
}

export default Channels
