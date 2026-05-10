'use client';

import { FormEvent, useState } from 'react';

export default function Letters() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Static export — no server. Replace with a real subscribe endpoint
    // (Buttondown, Mailchimp, a serverless function on another host) when
    // ready. For now, the studio takes the address by hand.
    setSubmitted(true);
  };

  return (
    <section className="letters" aria-label="letters, twice a year">
      <div className="letters-inner">
        <div>
          <div className="eyebrow">letters, twice a year</div>
          <h3>A note from the studio. Nothing more.</h3>
          <p>
            Two letters a year. One when a new edition is cut, one in the
            off-season. No marketing, no urgency, no countdowns. We have never
            sent a third.
          </p>
        </div>
        <div>
          {submitted ? (
            <p className="italic-note">
              Thank you. The studio will write to you when the next edition is
              cut.
            </p>
          ) : (
            <form onSubmit={onSubmit}>
              <div className="input-wrap">
                <label className="input-label" htmlFor="email">
                  your email
                </label>
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="you@somewhere.com"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="btn btn--primary" type="submit">
                subscribe
              </button>
            </form>
          )}
          <small>two letters a year. unsubscribe in one click.</small>
        </div>
      </div>
    </section>
  );
}
