import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { groups } from '../data/groups'
import groupsHero from '../assets/images/groups.JPG'

export default function Groups() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Groups"
        title="From award-winning quartets to our community chorus, each Harmony Collective group brings its own style and energy."
        subtitle="Explore our quartets and learn about Highlyte, a chorus that continues to grow through an open, welcoming audition process."
        backgroundImage={groupsHero}
      />

      <section className="section">
        <div className="card-grid group-overview-grid">
          {groups.map((group) => (
            <article className="group-overview-card" key={group.slug}>
              <Link
                className="group-overview-card__image"
                to={`/groups/${group.slug}`}
                style={{ backgroundImage: `linear-gradient(rgba(5,6,12,0.25), rgba(5,6,12,0.45)), url(${group.heroImage})` }}
              >
                <span className="sr-only">View {group.name}</span>
              </Link>
              <div className="group-overview-card__body">
                <p className="eyebrow">{group.city}</p>
                <h2 className="group-overview-card__title">
                  <Link to={`/groups/${group.slug}`}>{group.name}</Link>
                </h2>
                <p>{group.shortDescription}</p>
                {group.auditionsOpen && <p className="group-card__status">{group.auditionStatus}</p>}
                <div className="group-overview-card__actions">
                  <Link className="btn btn--primary" to={`/groups/${group.slug}`}>
                    Learn More
                  </Link>
                  {group.auditionLink && (
                    <a className="btn btn--ghost" href={group.auditionLink} target="_blank" rel="noreferrer">
                      Audition
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
