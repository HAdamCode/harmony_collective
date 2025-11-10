import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { groups } from '../data/groups'

export default function GroupPage() {
  const { slug } = useParams()
  const group = groups.find((g) => g.slug === slug)
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  if (!group) {
    return (
      <div className="site-wrapper">
        <main className="section">
          <div className="section__header">
            <h2>That ensemble could not be found.</h2>
            <p>Please head back to the main Harmony Collective site to discover our current groups.</p>
          </div>
          <Link className="btn btn--primary" to="/">
            ← Back to Harmony Collective
          </Link>
        </main>
      </div>
    )
  }

  const themeVars = {
    '--bg': group.palette.bg,
    '--card': group.palette.card,
    '--card-alt': group.palette.cardAlt,
    '--text': group.palette.text,
    '--muted': group.palette.muted,
    '--accent': group.palette.accent,
    '--accent-2': group.palette.accent2,
    '--panel-border': group.palette.panelBorder,
    '--hero-bg': group.palette.heroGradient,
    '--hero-overlay': group.palette.overlay,
  }

  return (
    <div className="site-wrapper" style={themeVars}>
      <header className="hero">
        <nav className="nav nav--group">
          <Link className="logo" to="/">
            Harmony Collective
          </Link>
          <Link className="btn btn--ghost" to="/">
            ← Main Site
          </Link>
        </nav>
        <div className="hero__content">
          <p className="eyebrow">{group.type}</p>
          <h1>{group.name}</h1>
          <p className="lead">{group.description}</p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Book {group.name}
            </a>
            <Link className="btn btn--ghost" to="/">
              View all groups
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="section__header">
            <h2>{group.tagline}</h2>
            <p>{group.programming}</p>
          </div>
          <div className="group-page__grid">
            <article className="card">
              <h3>Highlights</h3>
              <ul>
                {group.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>Ideal Settings</h3>
              <p>{group.availability}</p>
            </article>
          </div>
        </section>

        {group.events?.length > 0 && (
          <section className="section" id="events">
            <div className="section__header">
              <p className="eyebrow">Upcoming Events</p>
              <h2>Where to experience {group.name} next</h2>
              <p>Fans can grab tickets below, and presenters can see available routing opportunities.</p>
            </div>
            <div className="events-list">
              {group.events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-card__header">
                    <p className="event-card__date">{event.date}</p>
                  </div>
                  <h3>{event.title}</h3>
                  {event.location && <p className="event-card__location">{event.location}</p>}
                  {event.blurb && <p>{event.blurb}</p>}
                  {event.link ? (
                    <a className="btn btn--ghost btn--small" href={event.link}>
                      Tickets &amp; info
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section section--alt">
          <div className="section__header">
            <p className="eyebrow">Offerings</p>
            <h2>Bring {group.name} to your event</h2>
          </div>
          <div className="services">
            {group.services.map((service) => (
              <article className="service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Plan a {group.name} experience.</h2>
          <p>
            Email <a href="mailto:hello@harmonycollective.com">hello@harmonycollective.com</a> or
            call <a href="tel:+15551234567">(555) 123-4567</a>.
          </p>
          <p>Based in Nashville · Booking worldwide</p>
        </div>
        <form
          className="contact-form"
          name="contact"
          onSubmit={(event) => {
            event.preventDefault()
            alert(`Thanks for reaching out to ${group.name}! We will be in touch soon.`)
          }}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            Organization
            <input type="text" name="org" placeholder="Company / Presenter" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder={`Tell us about your idea for ${group.name}`} />
          </label>
          <button className="btn btn--primary" type="submit">
            Send inquiry
          </button>
        </form>
        <p className="footer__legal">© {currentYear} Harmony Collective. All rights reserved.</p>
      </footer>
    </div>
  )
}
