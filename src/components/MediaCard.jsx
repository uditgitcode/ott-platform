function MediaCard({ item, isFavorite, onToggleFavorite }) {
  return (
    <article className="media-card">
      <img className="media-visual" src={item.image} alt={item.title} />
      <div className="card-copy">
        <div>
          <h3>{item.title}</h3>
          <div className="card-meta-info">
            {item.year && <span className="meta-item">{item.year}</span>}
            {item.rating && <span className="meta-item">{item.rating}</span>}
            {item.episodes && <span className="meta-item">{item.episodes}</span>}
          </div>
          <p>{item.tagline || item.episodes || item.title}</p>
        </div>

        <div className="card-actions">
          <button
            type="button"
            className={`watchlist-button ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(item)}
          >
            {isFavorite ? 'Remove from Watchlist' : 'Add to Watchlist'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default MediaCard
