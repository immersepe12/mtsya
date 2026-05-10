// MTSYA · product.jsx — product detail

function FitSelector({ value, onChange }) {
  const fits = ['Slim','Modern','Relaxed'];
  return (
    <div>
      <span style={{ display:'block', fontFamily:'var(--font-ui)', fontSize:13, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78', marginBottom:12 }}>Fit</span>
      <div style={{ display:'flex', gap:8 }}>
        {fits.map(f => <Pill key={f} selected={value === f} onClick={() => onChange(f)}>{f}</Pill>)}
      </div>
    </div>
  );
}

function SizeSelector({ value, onChange }) {
  const sizes = ['XS','S','M','L','XL'];
  return (
    <div>
      <span style={{ display:'block', fontFamily:'var(--font-ui)', fontSize:13, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78', marginBottom:12 }}>Size</span>
      <div style={{ display:'flex', gap:8 }}>
        {sizes.map(s => <Pill key={s} selected={value === s} onClick={() => onChange(s)}>{s}</Pill>)}
      </div>
    </div>
  );
}

function FabricStory() {
  return (
    <section style={{ maxWidth: 960, margin: '128px auto 0', padding: '0 80px' }}>
      <p style={{ fontFamily:'var(--font-ui)', fontSize:13, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78', textAlign:'center', marginBottom:48 }}>
        the cloth
      </p>
      <div style={{ columns: 2, columnGap: 48 }}>
        <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.65, color:'#1F3A4D', margin:'0 0 16px' }}>
          The cloth is woven in a small mill outside Coimbatore from Egyptian Giza 87 cotton — long-staple, hand-picked, the same fibre that has dressed Mediterranean shoulders for a hundred years — twisted with TENCEL Lyocell drawn from sustainably harvested eucalyptus.
        </p>
        <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.65, color:'#1F3A4D', margin:'0 0 16px' }}>
          The blend is 70 / 30. The Giza gives the shirt its hand — that close-grained, slightly cool surface that improves with washing. The Lyocell gives it drape, a quiet sheen, and a weight that does not shrink in monsoon.
        </p>
        <p style={{ fontFamily:'var(--font-serif)', fontSize:17, lineHeight:1.65, color:'#1F3A4D', margin:'0 0 16px' }}>
          The garment is cut in three fits and finished with mother-of-pearl buttons, French-seamed sides, and a single embroidered fish at the inside-tail seam. There is no logo on the chest.
        </p>
      </div>
      <p style={{ marginTop: 48, fontFamily: 'var(--font-ui)', fontSize: 13, letterSpacing:'0.05em', color:'#5A6B78' }}>
        Care: cold wash, line dry in shade, warm iron on reverse.
      </p>
    </section>
  );
}

function ProductPage({ slug, navigate, onAddToBag }) {
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const [fit, setFit] = React.useState('Modern');
  const [size, setSize] = React.useState('M');
  const [hero, setHero] = React.useState(0);
  const thumbs = [product, product, product];

  return (
    <main>
      <section style={{
        maxWidth: 1440, margin: '0 auto',
        padding: '96px 80px 0',
        display: 'grid', gridTemplateColumns: '60% 40%', columnGap: 48,
      }}>
        <div>
          <ImagePanel product={product} />
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16, marginTop: 16 }}>
            {thumbs.map((p, i) => (
              <div key={i} onClick={() => setHero(i)}
                   style={{ cursor:'pointer', height: 96, background: p.hex, opacity: i === hero ? 1 : 0.6 }} />
            ))}
          </div>
        </div>
        <div style={{ paddingLeft: 24, position: 'sticky', top: 120, alignSelf: 'start' }}>
          <h1 style={{ fontFamily:'var(--font-display)', fontSize: 36, fontWeight: 400, color:'#1F3A4D', margin:'0 0 12px', letterSpacing: 0 }}>{product.name}</h1>
          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:18, color:'#5A6B78', margin:'0 0 24px' }}>
            {product.subtitle}. the foundational shirt.
          </p>
          <p style={{ fontFamily:'var(--font-ui)', fontSize:18, color:'#1F3A4D', margin:'0 0 48px', fontFeatureSettings: '"lnum" 1' }}>₹3,000</p>

          <div style={{ display:'flex', flexDirection:'column', gap: 24, marginBottom: 48 }}>
            <FitSelector value={fit} onChange={setFit} />
            <SizeSelector value={size} onChange={setSize} />
          </div>

          <Button variant="primary" full onClick={() => onAddToBag(product, fit, size)}>
            Add to bag
          </Button>

          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 14, color:'#5A6B78', marginTop: 32 }}>
            Free shipping in India. Returns within 30 days, no questions, no need to explain.
          </p>
        </div>
      </section>

      <FabricStory />

      <div style={{ textAlign:'center', margin:'128px 0 0' }}>
        <a onClick={() => navigate('#/shirts')}
           style={{ fontFamily:'var(--font-ui)', fontSize:13, letterSpacing:'0.15em', textTransform:'uppercase', color:'#1F3A4D', textDecoration:'underline', textUnderlineOffset: 6, cursor:'pointer' }}>
          ← back to the five shirts
        </a>
      </div>
    </main>
  );
}

Object.assign(window, { ProductPage, FitSelector, SizeSelector });
