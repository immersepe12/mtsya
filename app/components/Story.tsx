import { asset } from '../lib/paths';

export default function Story() {
  return (
    <section id="story" className="story" aria-label="the story">
      <div className="left">
        <span className="emblem">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset('/assets/logos/mtsya-fish.png')} alt="" />
        </span>
        <div className="deva">मत्स्य</div>
        <div className="deva-en">the first form, the keeper, the guide</div>
      </div>
      <div className="right">
        <div className="eyebrow">the story</div>
        <h3>Why a fish carries a boat through the flood.</h3>
        <p>
          In the oldest telling, the world is ending. A small fish appears in
          a man’s cupped hands, asks to be kept safe, and grows. It grows past
          the bowl, past the river, past the ocean. When the deluge comes, the
          fish returns, and tells the man to build a boat, and to tie it to
          the horn that has grown on its head.
        </p>
        <p>
          The fish pulls the boat through the storm. What the boat carried
          became the world.
        </p>
        <p>
          We did not choose the name lightly. A wardrobe, like that boat,
          carries forward what is worth keeping. We make the few things you
          would tie to a horn.
        </p>
        <a className="read" href="#">read the full story →</a>
      </div>
    </section>
  );
}
