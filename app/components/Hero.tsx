// The image is the welcome. No overlay text, no CTA. Until the
// real "Worn" / "Still" photography arrives, a Paper-Cream-into-
// Veda-Cream stand-in panel suggests morning light on cloth.
export default function Hero() {
  return (
    <section className="hero" aria-label="welcome">
      <div className="floor" aria-hidden />
      <div className="mood">mood · still · manu white · morning</div>
      <div className="meta">
        <b>edition 02</b>
        five shirts · five tees<br />
        since 2024
      </div>
    </section>
  );
}
