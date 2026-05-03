import { NavLink } from 'react-router-dom'

function TopNav({ searchText, setSearchText, favorites }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="branding">
          <div className="brand-badge">Prime</div>
          <strong>Prime Stream</strong>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Movies
          </NavLink>
          <NavLink to="/originals" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Originals
          </NavLink>
          <NavLink to="/channels" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Channels
          </NavLink>
          <NavLink to="/account" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
            Account
          </NavLink>
        </nav>

        <div className="search-bar">
          <span>🔎</span>
          <input
            className="search-input"
            type="search"
            value={searchText}
            placeholder="Search for titles, shows, or channels"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>

        <button type="button" className="secondary-button icon-button" aria-label="Watchlist count">
          📌 {favorites.length}
        </button>
      </div>
    </header>
  )
}

export default TopNav
