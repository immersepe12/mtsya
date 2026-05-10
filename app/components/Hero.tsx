import { asset } from '../lib/paths';

// The image is the welcome. The fish emblem sits centred over a
// Paper-Cream-into-Veda-Cream ground; the Devanagari name and
// English gloss settle on the floor beneath. Two quiet corner
// blocks hold the edition and the cloth.
export default function Hero() {
  return (
    <section className="hero" aria-label="welcome">
      <div className="floor" aria-hidden />
      <div className="hero-fish">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/assets/logos/mtsya-fish.png')}
          alt="mtsya — the keeper, the guide"
        />
      </div>
      <div className="hero-tag">
        <div className="deva">मत्स्य</div>
        <div className="en">the first form, the keeper, the guide</div>
      </div>
      <div className="hero-corner left">
        <b>edition 02</b>
        five shirts · five tees<br />
        since 2024
      </div>
      <div className="hero-corner right">
        <b>₹3,000</b>
        egyptian giza · tencel lyocell<br />
        made in india
      </div>
    </section>
  );
}
