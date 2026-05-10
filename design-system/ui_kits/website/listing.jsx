// MTSYA · listing.jsx — /shirts grid

function ProductCard({ product, navigate }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 16 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(`#/product/${product.slug}`)}
    >
      <div style={{
        opacity: hover ? 0.85 : 1,
        transition: 'opacity 200ms ease',
      }}>
        <ImagePanel product={product} />
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: '#1F3A4D' }}>
        {product.name}
      </div>
      <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14, color: '#5A6B78', marginTop: -10 }}>
        {product.subtitle}
      </div>
      <div style={{ fontFamily: 'var(--font-ui)', fontSize: 14, color: '#1F3A4D', marginTop: -8 }}>
        ₹3,000
      </div>
    </div>
  );
}

function ListingPage({ navigate }) {
  return (
    <main style={{ maxWidth: 1440, margin: '0 auto', padding: '96px 80px 0' }}>
      <div style={{ textAlign: 'center', maxWidth: '65ch', margin: '0 auto 96px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400,
          color: '#5A6B78', margin: '0 0 48px', lineHeight: 1.2, letterSpacing: 0,
        }}>the five shirts</h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.6, color: '#1F3A4D' }}>
          Five shirts, each named for a moment in the myth. Made of Egyptian Giza cotton woven with TENCEL Lyocell. ₹3,000 each. Three fits. Restocked every eight weeks; the silhouettes do not change.
        </p>
      </div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: 48, rowGap: 96,
      }}>
        {PRODUCTS.map(p => <ProductCard key={p.slug} product={p} navigate={navigate} />)}
      </div>
      <div style={{ textAlign: 'center', margin: '128px 0 0' }}>
        <a onClick={() => navigate('#/tees')}
           style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18, color: '#5A6B78', textDecoration: 'underline', textUnderlineOffset: 6, cursor: 'pointer' }}>
          — and five plain T-shirts.
        </a>
      </div>
    </main>
  );
}

Object.assign(window, { ListingPage, ProductCard });
