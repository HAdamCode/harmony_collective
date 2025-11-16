import PageHero from '../components/PageHero'
import { upcomingEvents } from '../data/events'
import performancesHero from '../assets/images/verse/performances.jpg'

export default function Performances() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Performances"
        title="Concerts, community events, and moments of shared music."
        subtitle="Our ensembles bring harmony to gatherings across Colorado through welcoming, meaningful performances."
        backgroundImage={performancesHero}
      />

      <section className="section">
        <div className="section__header">
          <h2>Upcoming Events</h2>
          <p>Come hear our ensembles live and be part of the music.</p>
        </div>
        <div className="events-list">
          {upcomingEvents.map((event) => {
            const locationQuery = encodeURIComponent(`${event.location} ${event.city}`)
            const locationHref = `https://www.google.com/maps?q=${locationQuery}`
            return (
              <article className="event-card" key={event.title}>
                <div className="event-card__header">
                  <p className="event-card__date">
                    {event.date} · {event.time}
                  </p>
                  <span className="event-card__group">{event.group}</span>
                </div>
                <h3>{event.title}</h3>
                <p className="event-card__location">
                  <a href={locationHref} target="_blank" rel="noreferrer">
                    {event.location} · {event.city}
                  </a>
                </p>
                <p>{event.description}</p>
                {event.link && (
                  <a className="btn btn--ghost btn--small" href={event.link}>
                    RSVP
                  </a>
                )}
              </article>
            )
          })}
        </div>
      </section>

    </div>
  )
}
