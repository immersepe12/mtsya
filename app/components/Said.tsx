type Quote = { body: string; src: string };

const QUOTES: Quote[] = [
  {
    body:
      'The shirt does not announce itself. It is the one I packed first when I left for a year, and the one I unpacked last when I came home.',
    src: 'a. mehta · bangalore · letter, march 2026',
  },
  {
    body:
      'I have washed it 84 times. The collar is still the collar. The cuffs still close. I keep waiting for it to give in. It does not.',
    src: 'r. subramaniam · chennai · letter, jan 2026',
  },
  {
    body:
      'An object made by people who have decided what they will not do. That, more than the cloth, is what one is paying for.',
    src: 'the voice of fashion · november 2025',
  },
];

export default function Said() {
  return (
    <section className="said" aria-label="said of mtsya">
      <div className="eyebrow">said of mtsya</div>
      <div className="said-grid">
        {QUOTES.map((q) => (
          <div key={q.src} className="quote">
            <q>{q.body}</q>
            <div className="src">{q.src}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
