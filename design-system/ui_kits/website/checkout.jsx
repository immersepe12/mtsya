// MTSYA · checkout.jsx — three steps, single column

function CheckoutStepper({ step }) {
  const steps = ['address','shipping','payment'];
  return (
    <div style={{ display:'flex', justifyContent:'center', gap: 32, margin:'0 0 64px' }}>
      {steps.map((s, i) => (
        <div key={s} style={{
          display:'flex', alignItems:'center', gap: 12,
          fontFamily:'var(--font-ui)', fontSize:12, letterSpacing:'0.2em', textTransform:'uppercase',
          color: i === step ? '#1F3A4D' : '#9DA8B2',
        }}>
          <span style={{ fontFeatureSettings:'"lnum" 1' }}>{String(i+1).padStart(2,'0')}</span>
          <span style={{ borderBottom: i === step ? '1px solid #1F3A4D' : 'none', paddingBottom: 2 }}>{s}</span>
          {i < 2 && <span style={{ color:'#BFC4C9' }}>—</span>}
        </div>
      ))}
    </div>
  );
}

function AddressForm({ value, onChange }) {
  const set = (k) => (v) => onChange({ ...value, [k]: v });
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 32, rowGap: 32 }}>
      <Input label="First name" value={value.first} onChange={set('first')} />
      <Input label="Last name"  value={value.last}  onChange={set('last')} />
      <div style={{ gridColumn: '1 / -1' }}>
        <Input label="Street" value={value.street} onChange={set('street')} />
      </div>
      <Input label="City" value={value.city} onChange={set('city')} />
      <Input label="Pincode" value={value.pin} onChange={set('pin')} />
      <Input label="Phone" value={value.phone} onChange={set('phone')} />
      <Input label="Email" value={value.email} onChange={set('email')} type="email" />
    </div>
  );
}

function ShippingForm({ value, onChange }) {
  const opts = [
    { id: 'standard', label: 'Standard',  meta: '2–4 days · India · free' },
    { id: 'express',  label: 'Express',   meta: '1–2 days · India · ₹250' },
  ];
  return (
    <div>
      {opts.map(o => (
        <label key={o.id}
               onClick={() => onChange(o.id)}
               style={{
                 display:'flex', justifyContent:'space-between', alignItems:'center',
                 padding: '24px 0',
                 borderTop: '1px solid #BFC4C9',
                 cursor:'pointer',
               }}>
          <span style={{ display:'flex', alignItems:'center', gap: 16 }}>
            <span style={{
              width: 16, height: 16,
              border: value === o.id ? '5px solid #1F3A4D' : '1px solid #BFC4C9',
              borderRadius: 999, // OK exception: a radio dot is a dot
              boxSizing:'border-box',
            }} />
            <span style={{ fontFamily:'var(--font-display)', fontSize: 20, color:'#1F3A4D' }}>{o.label}</span>
          </span>
          <span style={{ fontFamily:'var(--font-ui)', fontSize: 13, color:'#5A6B78', letterSpacing:'0.05em' }}>{o.meta}</span>
        </label>
      ))}
      <div style={{ borderTop: '1px solid #BFC4C9' }} />
    </div>
  );
}

function PaymentForm({ value, onChange }) {
  const set = (k) => (v) => onChange({ ...value, [k]: v });
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 32, rowGap: 32 }}>
      <div style={{ gridColumn:'1 / -1' }}>
        <Input label="Card number" value={value.card} onChange={set('card')} placeholder="0000 0000 0000 0000" />
      </div>
      <Input label="Expiry" value={value.exp} onChange={set('exp')} placeholder="MM / YY" />
      <Input label="CVC" value={value.cvc} onChange={set('cvc')} />
      <div style={{ gridColumn:'1 / -1' }}>
        <Input label="Name on card" value={value.name} onChange={set('name')} />
      </div>
    </div>
  );
}

function CheckoutPage({ bag, navigate }) {
  const [step, setStep] = React.useState(0);
  const [addr, setAddr] = React.useState({});
  const [ship, setShip] = React.useState('standard');
  const [pay, setPay]   = React.useState({});
  const [done, setDone] = React.useState(false);

  const total = bag.length * 3000 + (ship === 'express' ? 250 : 0);

  if (done) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding:'96px 80px 0', textAlign:'center' }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize: 36, fontWeight: 400, color:'#1F3A4D', margin:'0 0 48px', letterSpacing: 0 }}>
          Your MTSYA shirt is ordered.
        </h1>
        <p style={{ fontFamily:'var(--font-serif)', fontSize: 18, color:'#1F3A4D', lineHeight: 1.65, textAlign:'left' }}>
          Thank you. The shirt will leave the studio within two working days. We will write again the morning it ships, with a tracking link and nothing else.
        </p>
        <p style={{ fontFamily:'var(--font-serif)', fontSize: 18, color:'#1F3A4D', lineHeight: 1.65, marginTop: 24, textAlign:'left' }}>
          If anything is not right when it reaches you — anything at all — write back to this email. Returns are within thirty days, no questions, no need to explain.
        </p>
        <div style={{ marginTop: 48 }}><FishEmblem size={48} /></div>
        <p style={{ fontFamily:'var(--font-serif)', fontStyle:'italic', color:'#5A6B78', marginTop: 16 }}>— kushal at mtsya</p>
        <hr style={{ border: 0, borderTop:'1px solid #BFC4C9', margin:'64px 0' }} />
        <p style={{ fontFamily:'var(--font-ui)', fontSize: 13, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78' }}>
          Order #MT-2026-1083 · ₹{total.toLocaleString('en-IN')}
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '96px 80px 0' }}>
      <CheckoutStepper step={step} />

      <h2 style={{
        fontFamily:'var(--font-display)', fontSize: 30, fontWeight: 400,
        color:'#1F3A4D', margin:'0 0 48px', letterSpacing: 0,
      }}>
        {step === 0 && 'Where to send it'}
        {step === 1 && 'How to send it'}
        {step === 2 && 'How to pay'}
      </h2>

      {step === 0 && <AddressForm value={addr} onChange={setAddr} />}
      {step === 1 && <ShippingForm value={ship} onChange={setShip} />}
      {step === 2 && <PaymentForm value={pay} onChange={setPay} />}

      <div style={{ marginTop: 64, display:'flex', gap: 16, alignItems:'center', justifyContent:'space-between' }}>
        {step > 0 ? (
          <a onClick={() => setStep(step - 1)}
             style={{ fontFamily:'var(--font-ui)', fontSize:12, letterSpacing:'0.2em', textTransform:'uppercase', color:'#5A6B78', textDecoration:'underline', textUnderlineOffset: 4, cursor:'pointer' }}>
            ← back
          </a>
        ) : <span />}
        {step < 2 ? (
          <Button variant="primary" onClick={() => setStep(step + 1)}>Continue</Button>
        ) : (
          <Button variant="primary" onClick={() => setDone(true)}>
            Place order · ₹{total.toLocaleString('en-IN')}
          </Button>
        )}
      </div>
    </main>
  );
}

Object.assign(window, { CheckoutPage, CheckoutStepper, AddressForm, ShippingForm, PaymentForm });
