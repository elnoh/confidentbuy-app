const products = [
  {
    name: 'Mirrorless Camera',
    price: '$129.99',
    image: '/products/camera.svg',
    status: 'Good Signal',
    statusClass: 'good',
    ratingText: '(1,251)',
    stars: '★★★★★'
  },
  {
    name: 'Stainless Bottle',
    price: '$24.99',
    image: '/products/bottle.svg',
    status: 'Attention',
    statusClass: 'attention',
    ratingText: '(620)',
    stars: '★★★☆☆'
  },
  {
    name: 'Wireless Headphones',
    price: '$89.99',
    image: '/products/headphones.svg',
    status: 'Risk',
    statusClass: 'risk',
    ratingText: '(172)',
    stars: '★☆☆☆☆'
  }
];

const signalCards = [
  {
    title: 'Good Signal',
    icon: '✓',
    subtitle: 'Proceed with confidence.',
    text: 'Strong trust signs, positive reviews, secure checkout, and low scam risk.',
    className: 'good'
  },
  {
    title: 'Attention',
    icon: '!',
    subtitle: 'Review before buying.',
    text: 'Mixed signals found. Check reviews, seller details, return policy, and product evidence.',
    className: 'attention'
  },
  {
    title: 'Risk',
    icon: '×',
    subtitle: 'Proceed with caution.',
    text: 'Warning signs detected, poor trust indicators, low review confidence, or high scam risk.',
    className: 'risk'
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Main navigation">
        <a className="producer-logo" href="#top" aria-label="AdamRemix home">
          <img src="/adamremix-logo.png" alt="AdamRemix" />
        </a>

        <div className="brand-center" aria-label="ConfidentBuy">
          <div className="brand-mark">✓</div>
          <div>
            <div className="brand-name">ConfidentBuy</div>
            <nav className="nav-links" aria-label="Page sections">
              <a href="#features">Features</a>
              <a href="#how">How It Works</a>
              <a href="#pricing">Pricing</a>
              <a href="#extension">Extension</a>
            </nav>
          </div>
        </div>

        <div className="top-cta under-development">UNDER DEVELOPMENT</div>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Shop smarter. Avoid regrets.</p>
          <h1>Know the signal before you buy.</h1>
          <p className="hero-text">
            ConfidentBuy analyzes merchant trust, product quality signals, reviews, and scam
            risk—so you can shop online with clarity and confidence.
          </p>

          <div className="hero-actions" id="extension">
            <a className="primary-action" href="#install">
              <span className="chrome-dot" aria-hidden="true"></span>
              <span>
                <strong>Add to Chrome</strong>
                <small>It&apos;s free to get started</small>
              </span>
            </a>
            <a className="secondary-action" href="#how">
              <span className="play">▶</span>
              <span>
                <strong>See How It Works</strong>
                <small>Watch 60-second demo</small>
              </span>
            </a>
          </div>

          <div className="trust-row" id="features">
            <div><span>🔒</span><strong>Privacy First</strong><small>Your data stays private</small></div>
            <div><span>🛡️</span><strong>Works Everywhere</strong><small>On any shopping site</small></div>
            <div><span>⚡</span><strong>Real-Time Analysis</strong><small>Instant trust insights</small></div>
          </div>
        </div>

        <div className="browser-card" aria-label="ConfidentBuy product signal example">
          <div className="browser-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <div className="search-bar">Search products...</div>
            <div className="cart">🛒<sup>2</sup></div>
          </div>

          <div className="browser-content">
            <section className="product-area">
              <h2>Popular picks for you</h2>
              <div className="product-grid">
                {products.map((product) => (
                  <article key={product.name} className={`product-card ${product.statusClass}`}>
                    <span className="status-badge">{product.statusClass === 'good' ? '✓' : product.statusClass === 'attention' ? '!' : '×'}</span>
                    <img src={product.image} alt="" />
                    <p className="price">{product.price}</p>
                    <h3>{product.name}</h3>
                    <div className={`stars ${product.statusClass}`} aria-label={`${product.status} rating`}>
                      <span>{product.stars}</span> <small>{product.ratingText}</small>
                    </div>
                    <div className="mini-pill">{product.status}</div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="extension-panel" aria-label="ConfidentBuy result panel">
              <div className="panel-head"><strong>ConfidentBuy</strong><span>⚙</span></div>
              <div className="result-main">
                <div className="big-check">✓</div>
                <div><h3>Good Signal</h3><p>This looks safe to buy.</p></div>
              </div>
              <ul className="check-list">
                <li>Trusted merchant <span>ⓘ</span></li>
                <li>Strong customer reviews <span>ⓘ</span></li>
                <li>Secure payment <span>ⓘ</span></li>
                <li>Good product signals <span>ⓘ</span></li>
                <li>Low scam risk <span>ⓘ</span></li>
              </ul>
              <div className="signal-guide">
                <h4>Signal Guide</h4>
                <p className="guide good"><span>✓</span><strong>Good Signal</strong><small>Proceed with confidence</small></p>
                <p className="guide attention"><span>!</span><strong>Attention</strong><small>Review before buying</small></p>
                <p className="guide risk"><span>×</span><strong>Risk</strong><small>Proceed with caution</small></p>
              </div>
              <p className="panel-foot">Analyzed across thousands of stores</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="signals" aria-label="Signal meanings">
        {signalCards.map((card) => (
          <article key={card.title} className={`signal-card ${card.className}`}>
            <div className="signal-icon">{card.icon}</div>
            <div>
              <h2>{card.title}</h2>
              <h3>{card.subtitle}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="how" className="how-it-works">
        <h2>How ConfidentBuy Works</h2>
        <div className="steps">
          <article><span className="step-number">1</span><div className="step-icon">⌕</div><h3>Analyze</h3><p>We scan the merchant, product, reviews, and web signals in real time.</p></article>
          <article><span className="step-number attention">2</span><div className="step-icon attention">◇</div><h3>Understand</h3><p>Our AI evaluates trust, quality, and risk to determine the overall signal.</p></article>
          <article><span className="step-number">3</span><div className="step-icon">盾</div><h3>Decide</h3><p>Get a clear signal so you can buy with confidence—or walk away.</p></article>
        </div>
      </section>

      <footer className="footer" id="pricing">
        <span>✓ 1M+ install goal</span>
        <span>★ Clear consumer signal</span>
        <span>↻ Continuously updated</span>
        <span>◎ Works on major stores</span>
      </footer>
    </main>
  );
}
