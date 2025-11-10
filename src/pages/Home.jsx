import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { groups } from '../data/groups'

const pillars = [
  {
    title: 'Artist Development',
    copy:
      'Coaching, arranging, and branding support so every ensemble can focus on transformative sound.',
  },
  {
    title: 'Community Voice',
    copy:
      'Programs that amplify participation and welcome singers from every background to share the stage.',
  },
  {
    title: 'Partner Experiences',
    copy: 'Bespoke vocal performances for corporate, nonprofit, and festival partners.',
  },
]

const services = [
  {
    title: 'Live Productions',
    copy: 'Curated concerts, season programming, and special experiences that put story and sound first.',
  },
  {
    title: 'Education & Clinics',
    copy: 'Masterclasses, arrangement labs, and chorus intensives led by our directing staff.',
  },
  {
    title: 'Collaborations',
    copy: 'Partnerships with filmmakers, brands, and cultural institutions to weave harmony into projects.',
  },
]

const homeTheme = {
  '--bg': '#04050a',
  '--card': 'rgba(17, 21, 33, 0.9)',
  '--card-alt': 'rgba(11, 13, 19, 0.95)',
  '--text': '#f6f7fb',
  '--muted': '#c5cad8',
  '--accent': '#e8ecf7',
  '--accent-2': '#b7becf',
  '--panel-border': 'rgba(255, 255, 255, 0.2)',
  '--hero-bg': 'linear-gradient(130deg, #f6f7fb, #cdd3df 55%, #7f8697 90%)',
  '--hero-overlay': 'rgba(4, 5, 10, 0.4)',
}

export default function Home() {
  const [navOpen, setNavOpen] = useState(false)
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  const upcomingEvents = useMemo(() => {
    return groups
      .flatMap((group) =>
        (group.events ?? []).map((event) => ({
          ...event,
          group: group.name,
        })),
      )
      .slice(0, 4)
  }, [])
  const closeNav = () => setNavOpen(false)

  return (
    <div className="site-wrapper" style={homeTheme}>
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">Harmony Collective</div>
          <button
            className={`nav__toggle ${navOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav__links ${navOpen ? 'is-open' : ''}`}>
            {[
              { href: '#mission', label: 'About' },
              { href: '#groups', label: 'Groups' },
              { href: '#services', label: 'Offerings' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeNav}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hero__content">
          <p className="eyebrow">Vocal Arts &amp; Community</p>
          <h1>Bold voices. One collective.</h1>
          <p className="lead">
            Harmony Collective is the creative home for innovative barbershop quartets and community
            voices. Whether you&apos;re a presenter planning a marquee moment or a fan discovering
            new sounds, you can meet every ensemble here.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#contact">
              Book a Performance
            </a>
            <a className="btn btn--ghost" href="#groups">
              Explore our ensembles
            </a>
          </div>
          <div className="audience-grid">
            <article>
              <h3>For presenters &amp; partners</h3>
              <p>Download-ready specs, touring availability, and advisory calls with our creative team.</p>
            </article>
            <article>
              <h3>For fans &amp; students</h3>
              <p>Hear new music first, attend open rehearsals, and follow your favorite quartet on the road.</p>
            </article>
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="mission">
          <div className="section__header">
            <h2>Rooted in harmony, built for connection.</h2>
            <p>
              From intimate showcases to full-stage spectacles, Harmony Collective brings audiences
              into the heart of vocal music. We invest in artists, storytelling, and measurable
              community impact.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => (
              <article className="card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {upcomingEvents.length > 0 && (
          <section className="section" id="events">
            <div className="section__header">
              <p className="eyebrow">Upcoming Appearances</p>
              <h2>See the collectives live.</h2>
              <p>
                Catch Harmony Collective groups on stage across the country. Browse the highlights
                below or visit each group page for full calendars.
              </p>
            </div>
            <div className="events-list">
              {upcomingEvents.map((event) => (
                <article className="event-card" key={`${event.group}-${event.title}`}>
                  <div className="event-card__header">
                    <p className="event-card__date">{event.date}</p>
                    <span className="event-card__group">{event.group}</span>
                  </div>
                  <h3>{event.title}</h3>
                  {event.location && <p className="event-card__location">{event.location}</p>}
                  {event.blurb && <p>{event.blurb}</p>}
                  {event.link ? (
                    <a className="btn btn--ghost btn--small" href={event.link}>
                      Details
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="section section--alt" id="groups">
          <div className="section__header">
            <p className="eyebrow">Our Ensembles</p>
            <h2>Five groups, one collective heartbeat.</h2>
            <p>Click through to experience each ensemble in their own palette and sonic world.</p>
          </div>
          <div className="groups-grid">
            {groups.map((group) => (
              <article className="group" key={group.slug}>
                <h3>{group.name}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link className="btn btn--ghost group__cta" to={`/groups/${group.slug}`}>
                  View {group.name}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <div className="section__header">
            <p className="eyebrow">What we do</p>
            <h2>Amplify experiences with human sound.</h2>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className="service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--alt highlight">
          <div className="highlight__content">
            <h2>Ready to bring Harmony Collective to your stage?</h2>
            <p>
              Tell us about your event, residency, or collaboration idea—we&apos;ll match you with
              the right ensemble and creative team.
            </p>
            <a className="btn btn--primary" href="#contact">
              Start the conversation
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s make something unforgettable.</h2>
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
            alert('Thanks for reaching out! We will be in touch soon.')
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
            <textarea name="message" rows="4" placeholder="Tell us about your event" />
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
