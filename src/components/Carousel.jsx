import { useState } from 'react'

function Carousel({ items, favorites, toggleFavorite }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]
  const isFavorite = favorites.some((favorite) => favorite.id === activeItem.id)

  return (
    <section className="section-carousel page-section">
      <div className="section-heading">
        <div>
          <span>Trending now</span>
          <h2>Prime picks for your next watch</h2>
        </div>
        <div className="carousel-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => setActiveIndex((current) => (current - 1 + items.length) % items.length)}
          >
            Previous
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() => setActiveIndex((current) => (current + 1) % items.length)}
          >
            Next
          </button>
        </div>
      </div>

      <div className="carousel-shell">
        <img className="carousel-image" src={activeItem.image} alt={activeItem.title} />
        <div className="carousel-copy">
          <span className="carousel-tag">{activeItem.category}</span>
          <h3>{activeItem.title}</h3>
          <p>{activeItem.subtitle}</p>
          <button
            type="button"
            className={`watchlist-button ${isFavorite ? 'active' : ''}`}
            onClick={() => toggleFavorite(activeItem)}
          >
            {isFavorite ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>

      <div className="carousel-dots">
        {items.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`dot-button ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Select ${item.title}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
