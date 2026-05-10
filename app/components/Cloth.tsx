type Spec = { label: string; value: string; note?: string };

const SPECS: Spec[] = [
  { label: 'blend',   value: '60 % Egyptian Giza · 40 % TENCEL Lyocell' },
  { label: 'weight',  value: '130 gsm', note: 'soft enough to pack, weighty enough to fall' },
  { label: 'weave',   value: '2/1 twill, single-needle, 14 spi' },
  { label: 'buttons', value: 'Corozo nut, four-hole, hand-finished' },
  { label: 'made',    value: 'Coimbatore, Tamil Nadu' },
  { label: 'care',    value: 'Cold wash · line dry · iron warm' },
];

export default function Cloth() {
  return (
    <section className="cloth" aria-label="the cloth">
      <div className="cloth-image" aria-hidden>
        <div className="label">cloth · 60 giza · 40 tencel · 130 gsm</div>
      </div>
      <div className="cloth-text">
        <div className="eyebrow">the cloth</div>
        <h3>Egyptian Giza, woven with TENCEL Lyocell.</h3>
        <p>
          A 60/40 blend in a 130 gsm twill. The Giza gives the shirt its hand
          and its memory of pressing; the lyocell gives it drape and the way
          it falls back into shape after a day in the heat.
        </p>
        <p>
          One mill in Coimbatore. One pattern, refined for two years before we
          cut the first run. Buttons turned from corozo nut. Seam allowance
          that lets a tailor open the shirt and let it out, twice, over a
          decade.
        </p>
        <dl className="specs">
          {SPECS.map((spec) => (
            <div key={spec.label} className="row">
              <dt>{spec.label}</dt>
              <dd>
                {spec.value}
                {spec.note && <> <em>· {spec.note}</em></>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
