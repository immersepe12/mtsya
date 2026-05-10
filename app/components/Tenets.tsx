type Tenet = { num: string; title: string; body: string };

const TENETS: Tenet[] = [
  {
    num: 'tenet · 01',
    title: 'No collections, no seasons.',
    body:
      'Ten garments. The same ten. We do not refresh, drop, or rotate. When something is replaced, the older edition is named and dated.',
  },
  {
    num: 'tenet · 02',
    title: 'One price. ₹3,000.',
    body:
      'Same price for every shirt and every tee. No discounting, no sales, no codes, no early-access. The price is the price; the cloth is the cloth.',
  },
  {
    num: 'tenet · 03',
    title: 'Repair before replace.',
    body:
      'We hold matching cloth and buttons for ten years. Send it back; we mend it. The first repair is on us.',
  },
  {
    num: 'tenet · 04',
    title: 'Quiet, never loud.',
    body:
      'No logo on the outside. No emoji. The garment speaks when the wearer chooses to. Until then, it does its work.',
  },
  {
    num: 'tenet · 05',
    title: 'The studio answers.',
    body:
      'One inbox, read by us. A reply within two working days. No chatbots, no tickets, no “your call is important to us.”',
  },
  {
    num: 'tenet · 06',
    title: 'The fish stays the fish.',
    body:
      'The mark is older than the brand. We do not animate it, gradient it, or stretch it for a banner. It sits, and it watches.',
  },
];

export default function Tenets() {
  return (
    <section className="tenets" aria-label="the discipline">
      <div className="tenets-head">
        <div className="eyebrow">the discipline</div>
        <h3>Six things we will not do, no matter who asks.</h3>
      </div>
      <div className="tenets-grid">
        {TENETS.map((t) => (
          <div key={t.num} className="tenet">
            <div className="num">{t.num}</div>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
