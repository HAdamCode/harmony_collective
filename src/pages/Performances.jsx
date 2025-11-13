import PageHero from '../components/PageHero'
import { upcomingEvents } from '../data/events'
import { pastEvents } from '../data/pastEvents'

export default function Performances() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Performances"
        title="Concerts, community events, and moments of shared music."
        subtitle="Our ensembles bring harmony to gatherings across Colorado through welcoming, meaningful performances."
        backgroundImage="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="section__header">
          <h2>Upcoming Events</h2>
          <p>Come hear our ensembles live and be part of the music.</p>
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
                  RSVP
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Past Highlights</h2>
          <p>These events showcase the range of Harmony Collective programming.</p>
        </div>
        <div className="card-grid past-events">
          {pastEvents.map((event) => (
            <article className="past-event-card" key={event.title}>
              <div className="past-event-card__image" style={{ backgroundImage: `url(${event.image})` }} />
              <div className="past-event-card__body">
                <h3>{event.title}</h3>
                <p className="past-event-card__meta">
                  {event.date} · {event.location}
                </p>
                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
