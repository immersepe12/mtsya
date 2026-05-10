// MTSYA · chrome.jsx — header + footer

function Header({ route, navigate, bagCount = 0, transparent = false }) {
  const items = [
    { label: 'shirts', to: '#/shirts' },
    { label: 'tees', to: '#/tees' },
    { label: 'the story', to: '#/story' },
    { label: 'journal', to: '#/journal' },
    { label: `bag${bagCount ? ` (${bagCount})` : ''}`, to: '#/bag' },
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 10,
      height: 80,
      background: transparent ? 'transparent' : '#F5F1EA',
      borderBottom: transparent ? '0' : '1px solid #BFC4C9',
      transition: 'background 200ms ease',
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        height: '100%', padding: '0 80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a onClick={() => navigate('#/')}><Wordmark size={22} /></a>
        <nav style={{ display: 'flex', gap: 32 }}>
          {items.map(it => (
            <a key={it.label}
               onClick={() => navigate(it.to)}
               style={{
                 fontFamily: 'var(--font-ui)', fontSize: 13,
                 letterSpacing: '0.15em', textTransform: 'uppercase',
                 color: '#1F3A4D', textDecoration: 'none',
               }}
               onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; e.target.style.textUnderlineOffset = '4px'; }}
               onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}
            >{it.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function MiniHeader() {
  return (
    <header style={{ height: 80, borderBottom: '1px solid #BFC4C9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Wordmark size={22} />
    </header>
  );
}

function Footer() {
  return (
    <footer style={{
      background: '#F5F1EA',
      padding: '96px 80px',
      marginTop: 128,
    }}>
      <div style={{
        maxWidth: 1440, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48,
      }}>
        <div>
          <Wordmark size={22} />
          <p className="body" style={{ fontStyle: 'italic', color: '#5A6B78', fontSize: 14, marginTop: 14, maxWidth: 'none' }}>
            the wardrobe that endures the deluge
          </p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['shirts','tees','the story','journal','contact'].map(l => (
            <a key={l} style={{
              fontFamily: 'var(--font-ui)', fontSize: 13,
              color: '#5A6B78', letterSpacing: '0.05em',
            }}>{l}</a>
          ))}
        </nav>
        <div>
          <span style={{
            display: 'block', fontFamily: 'var(--font-ui)', fontSize: 13,
            fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#5A6B78', marginBottom: 8,
          }}>Letters, twice a year</span>
          <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <input placeholder="email"
                style={{
                  width: '100%', background: 'transparent', border: 0,
                  borderBottom: '1px solid #5A6B78', padding: '12px 0',
                  fontFamily: 'var(--font-serif)', fontSize: 17, color: '#1F3A4D', outline: 'none',
                }} />
            </div>
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </div>
      <div style={{
        maxWidth: 1440, margin: '64px auto 0',
        display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-ui)', fontSize: 12, color: '#5A6B78',
        letterSpacing: '0.05em',
        paddingTop: 24, borderTop: '1px solid #BFC4C9',
      }}>
        <span>© 2026 MTSYA · Made in India</span>
        <span style={{ display: 'flex', gap: 24 }}>
          <a>privacy</a><a>returns</a><a>instagram</a>
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { Header, MiniHeader, Footer });
