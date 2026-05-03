import MediaCard from '../components/MediaCard.jsx'

function Movies({ searchText, setSearchText, movies, favorites, toggleFavorite }) {
  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span>Movie theater</span>
          <h2>Stream the latest and the greatest</h2>
        </div>
      </div>

      <div className="search-bar" style={{ maxWidth: '460px', marginBottom: '24px' }}>
        <span>🎬</span>
        <input
          className="search-input"
          type="search"
          value={searchText}
          placeholder="Search movies"
          onChange={(event) => setSearchText(event.target.value)}
        />
      </div>

      <div className="card-grid">
        {filteredMovies.map((item) => (
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

export default Movies
