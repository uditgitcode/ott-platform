import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="page-section" style={{ textAlign: 'center', padding: '90px 24px' }}>
      <div style={{ maxWidth: '620px', margin: '0 auto' }}>
        <span style={{ color: '#7fd6ff', textTransform: 'uppercase', letterSpacing: '0.18em', fontSize: '0.85rem' }}>
          404 • page missing
        </span>
        <h2 style={{ margin: '24px 0 16px' }}>Oops — we can’t find that channel.</h2>
        <p style={{ color: 'rgba(241, 247, 255, 0.78)', marginBottom: '28px' }}>
          The page you are looking for might have moved, or the link may be broken.
        </p>
        <Link to="/" className="primary-button">
          Return to Prime home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
