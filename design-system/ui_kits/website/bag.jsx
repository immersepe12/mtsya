// MTSYA · bag.jsx

function CartRow({ item, onRemove }) {
  return (
    <div style={{
      display:'grid', gridTemplateColumns:'96px 1fr auto',
      gap: 24, alignItems:'flex-start',
      padding:'24px 0',
      borderTop:'1px solid #BFC4C9',
    }}>
      <div style={{ width:96, height:120, background: item.product.hex }} />
      <div>
        <div style={{ fontFamily:'var(--font-display)', fontSize:20, color:'#1F3A4D', margin:'0 0 6px' }}>{item.product.name}</div>
        <div style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize:14, color:'#5A6B78', margin:'0 0 12px' }}>{item.product.subtitle}</div>
        <div style={{ fontFamily:'var(--font-ui)', fontSize:13, color:'#5A6B78', letterSpacing:'0.05em' }}>{item.fit} · {item.size}</div>
        <a onClick={onRemove}
           style={{ display:'inline-block', marginTop: 12, fontFamily:'var(--font-ui)', fontSize:12, color:'#5A6B78', textDecoration:'underline', textUnderlineOffset: 3, cursor:'pointer' }}>
          remove
        </a>
      </div>
      <div style={{ fontFamily:'var(--font-ui)', fontSize:16, color:'#1F3A4D', fontFeatureSettings:'"lnum" 1' }}>₹3,000</div>
    </div>
  );
}

function BagPage({ bag, removeFromBag, navigate }) {
  const total = bag.length * 3000;
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '96px 80px 0' }}>
      <h1 style={{ fontFamily:'var(--font-display)', fontSize:32, fontWeight: 400, color:'#5A6B78', textAlign:'center', margin:'0 0 96px', letterSpacing: 0 }}>
        bag
      </h1>

      {bag.length === 0 ? (
        <div style={{ textAlign:'center', padding:'48px 0' }}>
          <p style={{ fontFamily:'var(--font-serif)', fontSize: 18, color:'#5A6B78', fontStyle:'italic', maxWidth:'none' }}>
            The bag is empty. Most of the brand is at /shirts.
          </p>
          <div style={{ marginTop: 48 }}>
            <Button variant="ghost" onClick={() => navigate('#/shirts')}>The five shirts</Button>
          </div>
        </div>
      ) : (
        <>
          <div>
            {bag.map((item, i) => (
              <CartRow key={i} item={item} onRemove={() => removeFromBag(i)} />
            ))}
            <div style={{ borderTop:'1px solid #BFC4C9' }} />
          </div>

          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 48 }}>
            <span style={{ fontFamily:'var(--font-ui)', fontSize:13, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78' }}>Subtotal</span>
            <span style={{ fontFamily:'var(--font-ui)', fontSize:18, color:'#1F3A4D', fontFeatureSettings:'"lnum" 1' }}>₹{total.toLocaleString('en-IN')}</span>
          </div>

          <p style={{ fontFamily:'var(--font-serif)', fontSize: 14, color:'#5A6B78', marginTop: 12 }}>
            Free shipping in India.
          </p>

          <div style={{ marginTop: 48 }}>
            <Button variant="primary" full onClick={() => navigate('#/checkout')}>
              Continue to checkout
            </Button>
          </div>

          <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', fontSize: 14, color:'#5A6B78', marginTop: 24, textAlign:'center' }}>
            Returns within 30 days, no questions, no need to explain.
          </p>
        </>
      )}
    </main>
  );
}

Object.assign(window, { BagPage, CartRow });
