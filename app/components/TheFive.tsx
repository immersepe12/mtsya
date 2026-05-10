type Shirt = {
  slug: string;
  name: string;
  hex: string;
  sub: string;
};

const SHIRTS: Shirt[] = [
  { slug: 'manu-white',     name: 'Manu White',     hex: '#F4EFE5', sub: 'the boat — what carries' },
  { slug: 'deluge-indigo',  name: 'Deluge Indigo',  hex: '#1B2A47', sub: 'the night — when the rain came' },
  { slug: 'veda-cream',     name: 'Veda Cream',     hex: '#EFE6D2', sub: 'old paper — preserved' },
  { slug: 'tide-stone',     name: 'Tide Stone',     hex: '#B8BCB6', sub: 'wet rock — the boat rested' },
  { slug: 'coast-olive',    name: 'Coast Olive',    hex: '#545A3D', sub: 'dry land — life again' },
];

export default function TheFive() {
  return (
    <section id="shirts" className="five" aria-label="the five shirts">
      <div className="five-head">
        <h3>the five shirts</h3>
        <div className="meta">
          <b>₹3,000 each</b><br />
          egyptian giza · tencel
        </div>
      </div>
      <div className="five-grid">
        {SHIRTS.map((s) => (
          <a key={s.slug} className="shirt" href={`#${s.slug}`}>
            <div className="panel" style={{ background: s.hex }} />
            <div className="shirt-meta">
              <span className="shirt-name">{s.name}</span>
              <span className="shirt-price">₹3,000</span>
            </div>
            <div className="shirt-sub">{s.sub}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
