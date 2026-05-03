import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopNav from './components/TopNav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Movies from './pages/Movies.jsx'
import Originals from './pages/Originals.jsx'
import Channels from './pages/Channels.jsx'
import Account from './pages/Account.jsx'
import NotFound from './pages/NotFound.jsx'

const featured = [
  {
    id: 1,
    title: 'New Releases Weekly',
    subtitle: 'Stream the latest blockbuster movies and Prime Originals every week.',
    category: 'Featured',
    image:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Family Entertainment',
    subtitle: 'Handpicked movies and shows perfect for family movie nights.',
    category: 'Family',
    image:
      'https://images.unsplash.com/photo-1606774588800-c6a6b7d95b5b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Exclusive Originals',
    subtitle: 'Binge award-winning Prime Original series and films only on Prime Video.',
    category: 'Originals',
    image:
      'https://images.unsplash.com/photo-1500462918059-b1a0cb1a113b?auto=format&fit=crop&w=1200&q=80',
  },
]

const allMovies = [
  {
    id: 'm1',
    title: 'The Last Adventure',
    type: 'Movie',
    year: 2024,
    rating: 'PG-13',
    tagline: 'An epic journey across forgotten worlds.',
    image:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm2',
    title: 'Neon Hearts',
    type: 'Movie',
    year: 2024,
    rating: 'R',
    tagline: 'Love in the city that never sleeps.',
    image:
      'https://images.unsplash.com/photo-1606774588800-c6a6b7d95b5b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm3',
    title: 'Echo Protocol',
    type: 'Movie',
    year: 2023,
    rating: 'PG-13',
    tagline: 'A hacker must break into the most secure system ever built.',
    image:
      'https://images.unsplash.com/photo-1500462918059-b1a0cb1a113b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm4',
    title: 'Midnight Run',
    type: 'Movie',
    year: 2024,
    rating: 'PG-13',
    tagline: 'High-speed thrills and dangerous curves.',
    image:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm5',
    title: 'Silent Witness',
    type: 'Movie',
    year: 2023,
    rating: 'R',
    tagline: 'A detective solves her toughest case yet.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm6',
    title: 'Beyond Tomorrow',
    type: 'Movie',
    year: 2024,
    rating: 'PG',
    tagline: 'Where science meets humanity.',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm7',
    title: 'The Lost City',
    type: 'Movie',
    year: 2024,
    rating: 'PG-13',
    tagline: 'Discover what has been hidden for centuries.',
    image:
      'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm8',
    title: 'Crimson Sky',
    type: 'Movie',
    year: 2023,
    rating: 'R',
    tagline: 'When loyalty becomes a weapon.',
    image:
      'https://images.unsplash.com/photo-1606641945897-369b0d6b9b5f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm9',
    title: 'Echoes',
    type: 'Movie',
    year: 2024,
    rating: 'PG-13',
    tagline: 'Some secrets refuse to stay buried.',
    image:
      'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'm10',
    title: 'Quantum Leap',
    type: 'Movie',
    year: 2023,
    rating: 'PG',
    tagline: 'A journey through time and space.',
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
  },
]

const allOriginals = [
  {
    id: 'o1',
    title: 'Hidden Alley',
    episodes: 'S1 • 8 episodes',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'o2',
    title: 'Capital Trial',
    episodes: 'S2 • 10 episodes',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1606774588800-c6a6b7d95b5b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'o3',
    title: 'Skyline Stories',
    episodes: 'Miniseries • 6 episodes',
    year: 2023,
    image:
      'https://images.unsplash.com/photo-1500462918059-b1a0cb1a113b?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'o4',
    title: 'Midnight Chronicles',
    episodes: 'S1 • 12 episodes',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'o5',
    title: 'The Secret Files',
    episodes: 'S3 • 9 episodes',
    year: 2024,
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
  },
]

const popularChannels = [
  {
    id: 'c1',
    title: 'Prime Sports Plus',
    tagline: 'Live sports, tournaments, and expert analysis.',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'c2',
    title: 'Prime Kids World',
    tagline: 'Safe, fun, and engaging content for families.',
    image:
      'https://images.unsplash.com/photo-1488902388656-641c54d37625?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'c3',
    title: 'Prime Documentaries',
    tagline: 'Compelling real stories from around the world.',
    image:
      'https://images.unsplash.com/photo-1498038432885-1fdd6efc5c2a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'c4',
    title: 'Prime Drama',
    tagline: 'Intense dramas and emotional storytelling.',
    image:
      'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=900&q=80',
  },
]

function App() {
  const [searchText, setSearchText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [favorites, setFavorites] = useState([])
  const [alertMessage, setAlertMessage] = useState('Welcome to Prime view!')

  const toggleFavorite = (item) => {
    setFavorites((current) => {
      const exists = current.find((favorite) => favorite.id === item.id)
      if (exists) {
        setAlertMessage(`${item.title} removed from Watchlist.`)
        return current.filter((favorite) => favorite.id !== item.id)
      }
      setAlertMessage(`${item.title} added to Watchlist.`)
      return [...current, item]
    })
  }

  return (
    <div className="prime-app">
      <TopNav
        searchText={searchText}
        setSearchText={setSearchText}
        favorites={favorites}
      />

      <div className="app-message">
        <span>{alertMessage}</span>
      </div>

      <main className="content-shell">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchText={searchText}
                setSearchText={setSearchText}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                featured={featured}
                movies={allMovies}
                originals={allOriginals}
                channels={popularChannels}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                searchText={searchText}
                setSearchText={setSearchText}
                category={selectedCategory}
                movies={allMovies}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/originals"
            element={
              <Originals
                originals={allOriginals}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/channels"
            element={
              <Channels
                channels={popularChannels}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/account"
            element={
              <Account
                favorites={favorites}
                searchText={searchText}
                setSearchText={setSearchText}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
