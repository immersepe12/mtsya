// MTSYA · home.jsx — homepage

function Hero({ navigate }) {
  // The hero is the welcome. No overlay text. No CTA. Single image.
  // Stand-in: full-bleed Paper-Cream-into-product-warmth panel with subtle photo-mood label.
  return (
    <section style={{
      width: '100%', height: '100vh', minHeight: 720,
      background: '#F4EFE5',
      position: 'relative',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
      overflow: 'hidden',
    }}>
      {/* photograph stand-in: a soft Manu-White panel with a quieter Veda-Cream
          floor, suggesting morning light on cloth. Replace with real worn shot. */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0,
        background: '#F4EFE5',
      }} />
      <div aria-hidden style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: '38%', background: '#EFE6D2',
      }} />
      <div style={{
        position: 'absolute', left: 80, bottom: 40,
        fontFamily: 'var(--font-ui)', fontSize: 11,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(31,58,77,0.45)',
      }}>mood · worn · manu white · morning</div>
    </section>
  );
}

function FoundersLetter({ navigate }) {
  return (
    <section style={{
      maxWidth: 1440, margin: '0 auto',
      padding: '128px 80px 96px',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}>
      <div style={{ maxWidth: '65ch', width: '100%' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5A6B78', textAlign: 'center', marginBottom: 48 }}>
          a letter
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.65, color: '#1F3A4D', marginBottom: 24 }}>
          There was a deluge. A boat was carried through it, tied to the horn of a fish, and what the boat carried became the world.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.65, color: '#1F3A4D', marginBottom: 24 }}>
          A wardrobe is a small thing. It is, in the end, fewer than a hundred objects. The working part of it — the part a man actually reaches for — is fewer than thirty. Of those, fewer than ten will see him through the year that matters. There is, somewhere in that drawer, a single shirt he packs first. He does not always know which one. But there is one.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.65, color: '#1F3A4D', marginBottom: 24 }}>
          MTSYA makes those things. Not collections, not seasons, not trends. Five plain shirts and five plain T-shirts in Egyptian Giza cotton woven with TENCEL Lyocell, ₹3,000 each. Colours a man can live inside for years. Details that are felt rather than seen.
        </p>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, lineHeight: 1.65, color: '#1F3A4D', marginBottom: 48 }}>
          This is not minimalism. Minimalism is a style, and styles change. This is something older. This is what the fish carried in the boat.
        </p>
        <div style={{ textAlign: 'center', marginTop: 24, marginBottom: 32 }}>
          <FishEmblem size={56} />
        </div>
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: '#5A6B78', fontSize: 16 }}>
          — kushal at mtsya
        </p>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a onClick={() => navigate('#/shirts')}
             style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#1F3A4D', textDecoration: 'underline', textUnderlineOffset: 6, cursor: 'pointer' }}>
            the five shirts →
          </a>
        </div>
      </div>
    </section>
  );
}

function CategoryStack({ navigate }) {
  const cats = [
    { label: 'shirts',  product: PRODUCTS[0], to: '#/shirts' },
    { label: 'tees',    product: PRODUCTS[2], to: '#/tees' },
    { label: 'the story', product: PRODUCTS[3], to: '#/story' },
    { label: 'journal', product: PRODUCTS[4], to: '#/journal' },
  ];
  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'flex', flexDirection: 'column', gap: 128 }}>
      {cats.map((c) => (
        <div key={c.label}
             onClick={() => navigate(c.to)}
             style={{ cursor: 'pointer' }}>
          <div style={{ height: '80vh', minHeight: 600, background: c.product.hex }} />
          <div style={{ marginTop: 32, textAlign: 'left' }}>
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: 32,
              color: '#1F3A4D', textDecoration: 'underline', textUnderlineOffset: 8,
            }}>{c.label}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <FoundersLetter navigate={navigate} />
      <CategoryStack navigate={navigate} />
    </>
  );
}

Object.assign(window, { HomePage });
