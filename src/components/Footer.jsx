import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-col">
        <strong>Prime Stream</strong>
        <p>
          A polished React clone experience with rich browsing, easy routing, and
          a human-centered layout.
        </p>
      </div>

      <div className="footer-col">
        <h4>Explore</h4>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/originals">Originals</Link>
      </div>

      <div className="footer-col">
        <h4>More</h4>
        <Link to="/channels">Channels</Link>
        <Link to="/account">Account</Link>
        <Link to="/">Support</Link>
      </div>

      <div className="footer-col">
        <h4>Stay connected</h4>
        <p>Built for quick decisions, human-friendly browsing, and a warm Prime vibe.</p>
      </div>

      <div className="footer-note">
        © 2026 Prime Stream clone. All content is sample UI and not an official service.
      </div>
    </footer>
  )
}

export default Footer
