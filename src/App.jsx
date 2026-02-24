import { useState } from "react";

export default function App() {
  const [contactSent, setContactSent] = useState(false);
  const [prayerSent, setPrayerSent] = useState(false);

  function submitContact(event) {
    event.preventDefault();
    setContactSent(true);
    event.currentTarget.reset();
  }

  function submitPrayer(event) {
    event.preventDefault();
    setPrayerSent(true);
    event.currentTarget.reset();
  }

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Pastor Outreach Ministry</p>
        <h1>Faith, care, and connection for every season of life.</h1>
        <p>
          We serve our community through prayer, practical support, and
          meaningful relationships rooted in the love of Christ.
        </p>
      </header>

      <section className="panel mission">
        <h2>Our Mission</h2>
        <p>
          We walk alongside individuals and families through counseling,
          discipleship, hospital visits, and prayer. Our goal is to be present
          where people need hope most.
        </p>
      </section>

      <section className="grid">
        <article className="panel">
          <h2>Contact Us</h2>
          <p className="panel-copy">
            Share your question and we will respond as soon as possible.
          </p>
          <form className="form" onSubmit={submitContact}>
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" required />
            </label>
            <button type="submit">Send Message</button>
          </form>
          {contactSent && (
            <p className="success">Thank you. Your message was sent.</p>
          )}
        </article>

        <article className="panel">
          <h2>Prayer Request</h2>
          <p className="panel-copy">
            Submit a private prayer request and our team will pray for you.
          </p>
          <form className="form" onSubmit={submitPrayer}>
            <label>
              Name
              <input name="name" type="text" />
            </label>
            <label>
              Request
              <textarea name="request" rows="4" required />
            </label>
            <label>
              How should we follow up?
              <input name="followUp" type="text" placeholder="Phone or email" />
            </label>
            <button type="submit">Submit Prayer Request</button>
          </form>
          {prayerSent && (
            <p className="success">We received your request and will pray.</p>
          )}
        </article>
      </section>
    </main>
  );
}
