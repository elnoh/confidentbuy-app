const saasTools = [
  {
    name: 'ProjectFlow Pro',
    price: '$29/mo',
    icon: '◈',
    status: 'Good Signal',
    statusClass: 'good',
    detail: 'Cancel anytime'
  },
  {
    name: 'CloudVault AI',
    price: '$19/mo',
    icon: '☁',
    status: 'Attention',
    statusClass: 'attention',
    detail: 'Annual billing only'
  },
  {
    name: 'TaskBoost Ultra',
    price: '$49/mo',
    icon: '⚡',
    status: 'Risk',
    statusClass: 'risk',
    detail: 'Terms unclear'
  }
];

const signalCards = [
  {
    title: 'Good Signal',
    icon: '✓',
    subtitle: 'Proceed with confidence.',
    text: 'Transparent pricing, clear cancellation, strong privacy and security, healthy public reputation.',
    className: 'good'
  },
  {
    title: 'Attention',
    icon: '!',
    subtitle: 'Review before subscribing.',
    text: 'Mixed signals found. Check cancellation terms, pricing transparency, privacy policy, and user feedback.',
    className: 'attention'
  },
  {
    title: 'Risk',
    icon: '×',
    subtitle: 'Proceed with caution.',
    text: 'Hidden terms, unclear cancellation, weak privacy or security signals, or poor public reputation detected.',
    className: 'risk'
  }
];

const pricingTiers = [
  { tier: 'Free',      amount: '$0',    period: '',    detail: 'Get started',       highlight: false },
  { tier: 'Pro',       amount: '$4.22', period: '/mo', detail: 'Full signal access', highlight: true  },
  { tier: 'Family',    amount: '$12',   period: '/mo', detail: 'Up to 6 members',   highlight: false },
  { tier: 'Corporate', amount: '$90',   period: '/mo', detail: 'Team access',        highlight: false },
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
          <p className="eyebrow">Evaluate SaaS before you pay.</p>
          <h1>Know the signal before you subscribe.</h1>
          <p className="hero-text">
            ConfidentBuy analyzes SaaS trust, pricing transparency, cancellation terms,
            privacy, security, and user reputation so you can evaluate software and
            digital services before you pay.
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
            <div><span>🛡️</span><strong>Works Everywhere</strong><small>Any SaaS pricing page</small></div>
            <div><span>⚡</span><strong>Instant Signal</strong><small>Trust insights on demand</small></div>
          </div>
        </div>

        <div className="browser-card" aria-label="ConfidentBuy SaaS signal example">
          <div className="browser-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <div className="search-bar">asana.com/pricing</div>
            <div className="cart">🔐</div>
          </div>

          <div className="browser-content">
            <section className="product-area">
              <h2>Compare plans</h2>
              <div className="product-grid">
                {saasTools.map((tool) => (
                  <article key={tool.name} className={`product-card ${tool.statusClass}`}>
                    <span className="status-badge">
                      {tool.statusClass === 'good' ? '✓' : tool.statusClass === 'attention' ? '!' : '×'}
                    </span>
                    <div className="plan-display">
                      <div className="plan-icon-char">{tool.icon}</div>
                      <div className="plan-price">{tool.price}</div>
                    </div>
                    <h3>{tool.name}</h3>
                    <div className={`stars ${tool.statusClass}`}>
                      <small>{tool.detail}</small>
                    </div>
                    <div className="mini-pill">{tool.status}</div>
                  </article>
                ))}
              </div>
            </section>

            <aside className="extension-panel" aria-label="ConfidentBuy result panel">
              <div className="panel-head"><strong>ConfidentBuy</strong><span>⚙</span></div>
              <div className="result-main">
                <div className="big-check">✓</div>
                <div><h3>Good Signal</h3><p>Safe to subscribe.</p></div>
              </div>
              <ul className="check-list">
                <li>Transparent pricing <span>ⓘ</span></li>
                <li>Clear cancellation terms <span>ⓘ</span></li>
                <li>Privacy policy found <span>ⓘ</span></li>
                <li>Security page found <span>ⓘ</span></li>
                <li>Healthy user reputation <span>ⓘ</span></li>
              </ul>
              <div className="signal-guide">
                <h4>Signal Guide</h4>
                <p className="guide good"><span>✓</span><strong>Good Signal</strong><small>Proceed with confidence</small></p>
                <p className="guide attention"><span>!</span><strong>Attention</strong><small>Review before subscribing</small></p>
                <p className="guide risk"><span>×</span><strong>Risk</strong><small>Proceed with caution</small></p>
              </div>
              <p className="panel-foot">Analyzed across SaaS vendors globally</p>
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
          <article>
            <span className="step-number">1</span>
            <div className="step-icon">⌕</div>
            <h3>Analyze</h3>
            <p>We scan SaaS pricing pages, cancellation terms, privacy policy, security signals, and public reputation.</p>
          </article>
          <article>
            <span className="step-number attention">2</span>
            <div className="step-icon attention">◇</div>
            <h3>Understand</h3>
            <p>Our signal engine evaluates evidence quality, transparency, and trust indicators to determine the verdict.</p>
          </article>
          <article>
            <span className="step-number">3</span>
            <div className="step-icon">盾</div>
            <h3>Decide</h3>
            <p>Get a clear signal—subscribe with confidence or walk away before you pay.</p>
          </article>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          {pricingTiers.map((t) => (
            <div key={t.tier} className={`price-card${t.highlight ? ' good' : ''}`}>
              <div className="price-tier">{t.tier}</div>
              <div className="price-amount">{t.amount}<span>{t.period}</span></div>
              <div className="price-detail">{t.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <span>✓ SaaS trust analysis</span>
        <span>★ Clear subscription signal</span>
        <span>↻ Continuously updated</span>
        <span>◎ Any SaaS pricing page</span>
      </footer>
    </main>
  );
}
