// MTSYA · primitives.jsx
// Buttons, inputs, pills, fish emblem, and the products dataset.

const PRODUCTS = [
  { slug: 'manu-white',     name: 'Manu White',     subtitle: 'the boat — what carries',         hex: '#F4EFE5', dark: false },
  { slug: 'deluge-indigo',  name: 'Deluge Indigo',  subtitle: 'the night — when the rain came',  hex: '#1B2A47', dark: true },
  { slug: 'veda-cream',     name: 'Veda Cream',     subtitle: 'old paper — preserved',           hex: '#EFE6D2', dark: false },
  { slug: 'tide-stone',     name: 'Tide Stone',     subtitle: 'wet rock — the boat rested',      hex: '#B8BCB6', dark: false },
  { slug: 'coast-olive',    name: 'Coast Olive',    subtitle: 'dry land — life again',           hex: '#545A3D', dark: true },
];

function Button({ variant = 'primary', children, full, onClick, type = 'button', disabled }) {
  const base = {
    fontFamily: 'var(--font-ui)',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    padding: '16px 32px',
    border: '1px solid #1F3A4D',
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 200ms ease, color 200ms ease, border-color 200ms ease',
    width: full ? '100%' : 'auto',
    display: 'inline-block',
    textAlign: 'center',
  };
  const variants = {
    primary: { background: disabled ? '#5A6B78' : '#1F3A4D', color: '#F5F1EA', borderColor: disabled ? '#5A6B78' : '#1F3A4D' },
    ghost:   { background: 'transparent', color: '#1F3A4D', borderColor: '#1F3A4D' },
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover && !disabled
    ? (variant === 'primary'
        ? { background: '#15293A', borderColor: '#15293A' }
        : { background: '#1F3A4D', color: '#F5F1EA' })
    : {};
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverStyle }}
    >{children}</button>
  );
}

function Input({ label, value, onChange, placeholder, type = 'text', error }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block' }}>
      {label && <span style={{
        display: 'block',
        fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#5A6B78', marginBottom: 8,
      }}>{label}</span>}
      <input
        type={type}
        value={value || ''}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          display: 'block', width: '100%',
          background: 'transparent',
          border: 0,
          borderBottom: `${focus ? 2 : 1}px solid ${error ? '#C9603A' : (focus ? '#1F3A4D' : '#5A6B78')}`,
          padding: focus ? '12px 0 11px' : '12px 0',
          fontFamily: 'var(--font-serif)', fontSize: 17, color: '#1F3A4D',
          borderRadius: 0, outline: 'none', boxSizing: 'border-box',
        }}
      />
      {error && <span style={{
        display: 'block', marginTop: 8,
        fontFamily: 'var(--font-ui)', fontSize: 13, color: '#C9603A',
      }}>{error}</span>}
    </label>
  );
}

function Pill({ selected, children, onClick }) {
  const style = {
    fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: '#1F3A4D',
    padding: selected ? '9px 17px' : '10px 18px',
    border: selected ? '2px solid #1F3A4D' : '1px solid #BFC4C9',
    borderRadius: 0, background: 'transparent', cursor: 'pointer',
    transition: 'border-color 200ms ease',
  };
  return <button style={style} onClick={onClick}>{children}</button>;
}

// The fish: we render the master logo and crop the bottom wordmark away when only the fish is needed.
function FishEmblem({ size = 64 }) {
  return (
    <div style={{
      width: size, height: size, overflow: 'hidden',
      display: 'inline-block',
    }}>
      <img
        src="../../assets/mtsya-logo.png"
        alt="mtsya"
        style={{
          width: size, height: size * (4000 / 3100), // crop wordmark below
          display: 'block', objectFit: 'cover', objectPosition: 'center top',
        }}
      />
    </div>
  );
}

function Wordmark({ size = 24 }) {
  return (
    <span style={{
      fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: size, letterSpacing: '0.2em',
      textTransform: 'lowercase', color: '#1F3A4D',
      lineHeight: 1, display: 'inline-block',
    }}>mtsya</span>
  );
}

function Divider({ margin = 48 }) {
  return <hr style={{ border: 0, borderTop: '1px solid #BFC4C9', margin: `${margin}px 0`, width: '100%' }} />;
}

// Image placeholder that paints in product hex with subtle product-name tag.
function ImagePanel({ product, ratio = '4 / 5', tag = true }) {
  return (
    <div style={{
      aspectRatio: ratio,
      background: product.hex,
      position: 'relative',
      width: '100%',
    }}>
      {tag && (
        <div style={{
          position: 'absolute', bottom: 12, right: 14,
          fontFamily: 'var(--font-ui)', fontSize: 9,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: product.dark ? 'rgba(244,239,229,0.55)' : 'rgba(31,58,77,0.4)',
        }}>{product.name}</div>
      )}
    </div>
  );
}

Object.assign(window, { PRODUCTS, Button, Input, Pill, FishEmblem, Wordmark, Divider, ImagePanel });
