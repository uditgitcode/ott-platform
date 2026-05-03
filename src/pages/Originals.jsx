import { useState } from 'react'
import MediaCard from '../components/MediaCard.jsx'

function Originals({ originals, favorites, toggleFavorite }) {
  const [searchText, setSearchText] = useState('')

  const filteredOriginals = originals.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span>Prime Originals</span>
          <h2>Fresh stories made for streaming</h2>
        </div>
      </div>

      <div className="search-bar" style={{ maxWidth: '460px', marginBottom: '24px' }}>
        <span>📺</span>
        <input
          className="search-input"
          type="search"
          value={searchText}
          placeholder="Search originals and series"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <div className="card-grid">
        {filteredOriginals.map((item) => (
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

export default Originals
