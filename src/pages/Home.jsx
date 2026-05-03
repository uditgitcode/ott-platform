import { Link } from 'react-router-dom'
import MediaCard from '../components/MediaCard.jsx'
import Carousel from '../components/Carousel.jsx'

function Home({
  searchText,
  setSearchText,
  selectedCategory,
  setSelectedCategory,
  featured,
  movies,
  originals,
  channels,
  favorites,
  toggleFavorite,
}) {
  const categories = ['All', 'Movies', 'Originals', 'Channels']

  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()),
  )

  const topFeatured = featured[0]

  return (
    <section>
      <div className="hero-card page-section">
        <div className="hero-copy">
          <span>Prime Originals & blockbusters</span>
          <h1>Discover fresh stories, fast action and unforgettable characters.</h1>
          <p>
            Your Prime home is built for easy browsing, quick clicks, and feel-good
            recommendations that match your mood.
          </p>
          <div className="hero-buttons">
            <Link to="/movies" className="primary-button">
              Browse Movies
            </Link>
            <Link to="/originals" className="secondary-button">
              Watch Originals
            </Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src={topFeatured.image}
            alt={topFeatured.title}
          />
        </div>
      </div>

      <Carousel
        items={featured}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      <div className="page-section">
        <div className="section-heading">
          <div>
            <span>Browse by category</span>
            <h2>Choose your next watch</h2>
          </div>
          <Link to="/movies">See all</Link>
        </div>

        <div className="category-row">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-chip ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="card-grid">
          {filteredMovies.slice(0, 3).map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>

      <div className="page-section">
        <div className="section-heading">
          <div>
            <span>Prime Originals</span>
            <h2>Exclusive series and films</h2>
          </div>
          <Link to="/originals">View originals</Link>
        </div>

        <div className="card-grid">
          {originals.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>

      <div className="page-section">
        <div className="section-heading">
          <div>
            <span>Live channels</span>
            <h2>Watch curated libraries anytime</h2>
          </div>
          <Link to="/channels">Browse channels</Link>
        </div>

        <div className="card-grid">
          {channels.map((item) => (
            <MediaCard
              key={item.id}
              item={item}
              isFavorite={favorites.some((favorite) => favorite.id === item.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
