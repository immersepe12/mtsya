import { asset } from '../lib/paths';

export default function Letter() {
  return (
    <section className="letter" aria-label="a letter from the studio">
      <div className="letter-inner">
        <div className="eyebrow">a letter from the studio</div>
        <p>
          There was a deluge. A boat was carried through it, tied to the horn of
          a fish, and what the boat carried became the world.
        </p>
        <p>
          A wardrobe is a small thing. It is, in the end, fewer than a hundred
          objects. The working part of it — the part a man actually reaches for
          — is fewer than thirty. Of those, fewer than ten will see him through
          the year that matters. There is, somewhere in that drawer, a single
          shirt he packs first. He does not always know which one. But there is
          one.
        </p>
        <p className="pull">
          MTSYA makes those things. Not collections, not seasons, not trends.
        </p>
        <p>
          Five plain shirts and five plain T-shirts in Egyptian Giza cotton
          woven with TENCEL Lyocell, ₹3,000 each. Colours a man can live inside
          for years. Details that are felt rather than seen.
        </p>
        <p>
          This is not minimalism. Minimalism is a style, and styles change.
          This is something older. This is what the fish carried in the boat.
        </p>
        <div className="signoff">
          <span className="fish">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset('/assets/logos/mtsya-fish.png')} alt="" />
          </span>
          <div className="name">— kushal at mtsya</div>
          <div className="next">
            <a href="#shirts">the five shirts →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
