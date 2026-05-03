import { useState } from 'react'

function Account({ favorites, searchText, setSearchText }) {
  const [showTips, setShowTips] = useState(true)

  return (
    <section className="page-section">
      <div className="section-heading">
        <div>
          <span>Account dashboard</span>
          <h2>Your Prime membership details</h2>
        </div>
      </div>

      <div className="account-panel">
        <div className="account-card">
          <h3>Prime benefits</h3>
          <p>Fast delivery on products, premium streaming, and the best new releases.</p>
          <div className="card-actions" style={{ marginTop: '20px' }}>
            <button type="button" className="primary-button">
              Manage membership
            </button>
            <button type="button" className="secondary-button" onClick={() => setShowTips((current) => !current)}>
              {showTips ? 'Hide tips' : 'Show tips'}
            </button>
          </div>

          {showTips && (
            <div style={{ marginTop: '22px', color: 'rgba(241, 247, 255, 0.8)' }}>
              <strong>Prime tip:</strong> Use the search bar above to find the latest movies before you click through.
            </div>
          )}
        </div>

        <div className="account-card">
          <h3>Your watchlist</h3>
          <p>Save titles here to resume them anytime from any device.</p>
          {favorites.length > 0 ? (
            <ul className="favorite-list">
              {favorites.map((item) => (
                <li key={item.id} className="favorite-item">
                  <div>
                    <strong>{item.title}</strong>
                    <div style={{ opacity: 0.75 }}>{item.tagline || item.episodes || item.title}</div>
                  </div>
                  <span>🎬</span>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ marginTop: '14px', color: 'rgba(241, 247, 255, 0.7)' }}>
              No items yet. Add a movie or original to your watchlist from the home or browse pages.
            </p>
          )}
        </div>
      </div>

      <div className="page-section">
        <div className="section-heading">
          <div>
            <span>Quick search</span>
            <h2>Find your next watch</h2>
          </div>
        </div>
        <div className="search-bar" style={{ maxWidth: '520px' }}>
          <span>🔎</span>
          <input
            className="search-input"
            value={searchText}
            placeholder="Search favorites or titles"
            onChange={(event) => setSearchText(event.target.value)}
          />
        </div>
      </div>
    </section>
  )
}

export default Account
