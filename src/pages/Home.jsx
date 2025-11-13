import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { upcomingEvents } from '../data/events'
import { groups } from '../data/groups'

const impactPoints = [
  'Five ensembles rooted in communities across the Front Range',
  'Performances, pop-up concerts, and local collaborations',
  'A warm, modern approach to making music together',
]

export default function Home() {
  return (
    <div className="page page--home">
      <PageHero
        eyebrow="Denver · Littleton · Golden"
        title="Harmony. Community. Acapella."
        subtitle="Harmony Collective is a modern home for vocal ensembles, community partners, donors, and neighbors who believe in the power of shared sound."
        backgroundImage="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1600&q=80"
      >
        <div className="hero-actions">
          <Link className="btn btn--primary" to="/book-us">
            Book a Performance
          </Link>
          <Link className="btn btn--ghost" to="/groups">
            Meet the Groups
          </Link>
        </div>
      </PageHero>

      <section className="section section--intro" id="intro">
        <div className="intro-card">
          <h2>Voices that bring people together.</h2>
          <p>
            Harmony Collective supports community-focused acapella groups across Colorado. We believe in creating spaces
            where people can sing, connect, and share music that feels genuine and welcoming.
          </p>
          <ul>
            {impactPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="groups">
        <div className="section__header">
          <p className="eyebrow">Meet the groups</p>
          <h2>Five ensembles, one collective heartbeat.</h2>
          <p>Explore our competitive quartets, our auditioned community chorus, and the collaborations that bring people together through music.</p>
        </div>
        <div className="card-grid">
          {groups.map((group) => (
            <article className="card group-card" key={group.slug}>
              <div className="group-card__header">
                <h3>{group.name}</h3>
                <p>{group.type}</p>
              </div>
              <p>{group.shortDescription}</p>
              {group.auditionsOpen && <p className="group-card__status">{group.auditionStatus}</p>}
              <Link className="btn btn--ghost btn--small" to={`/groups/${group.slug}`}>
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt" id="performances">
        <div className="section__header">
          <p className="eyebrow">Upcoming performances</p>
          <h2>Catch Harmony Collective live.</h2>
        </div>
        <div className="events-list">
          {upcomingEvents.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-card__header">
                <p className="event-card__date">
                  {event.date} · {event.time}
                </p>
                <span className="event-card__group">{event.group}</span>
              </div>
              <h3>{event.title}</h3>
              <p className="event-card__location">
                {event.location} · {event.city}
              </p>
              <p>{event.description}</p>
              {event.link && (
                <a className="btn btn--ghost btn--small" href={event.link}>
                  Details
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--media" id="video">
        <div className="section__header">
          <p className="eyebrow">Featured Video</p>
          <h2>Here’s a little taste of what our groups love to share.</h2>
          <p>This moment comes from Highlyte&apos;s first community event.</p>
        </div>
        <div className="video-embed">
          <iframe
            title="Harmony Collective featured video"
            src="https://www.youtube.com/embed/8ZcmTl_1ER8"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section" id="mission">
        <div className="section__header">
          <p className="eyebrow">Mission & Impact</p>
          <h2>We exist to bring people together through acapella.</h2>
          <p>
            Our groups create spaces where singers connect, audiences feel welcomed, and communities experience the joy of
            shared music. Donor support helps us keep rehearsals accessible, purchase music, and bring performances to local
            events and organizations.
          </p>
        </div>
        <div className="mission-grid">
          <article className="card">
            <h3>Community</h3>
            <p>
              We focus on connection—supportive rehearsals, inclusive events, and musical moments that bring people together.
            </p>
          </article>
          <article className="card">
            <h3>Impact</h3>
            <p>
              Every gift supports the essentials: rehearsal space, music purchases, sound equipment, and opportunities for
              ensembles to grow.
            </p>
          </article>
          <article className="card">
            <h3>Excellence</h3>
            <p>
              Our singers strive for growth and artistry, guided by dedicated directors and leaders who care deeply about
              making meaningful music.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--cta donate-cta">
        <div>
          <h2>Support our voices.</h2>
          <p>Your donation underwrites music, rehearsal space, and scholarships across the Collective.</p>
        </div>
        <Link className="btn btn--primary" to="/donate">
          Donate Today
        </Link>
      </section>

      <section className="section section--cta join-cta">
        <div>
          <h2>Join Highlyte</h2>
          <p>All voice parts are welcome. Attend three rehearsals, receive feedback, and step into the chorus.</p>
        </div>
        <a className="btn btn--ghost" href="https://forms.gle/YmyRcVhWfwUniu728" target="_blank" rel="noreferrer">
          Audition for Highlyte
        </a>
      </section>

    </div>
  )
}
