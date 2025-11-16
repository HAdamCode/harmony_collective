import { Link, useParams } from 'react-router-dom'
import { groups } from '../data/groups'
import { formatYouTubeEmbed } from '../utils/media'

const socialLabels = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  youtube: 'YouTube',
}

const socialIcons = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14.5 8.5h2.5V5h-2.9c-2.4 0-4.1 1.7-4.1 4.3V12H7v3h3v6h3v-6h2.7l0.6-3H13V9.7c0-.8.4-1.2 1.5-1.2Z"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M21.6 7.2c-.2-.9-.9-1.5-1.7-1.7C18.1 5.2 12 5.2 12 5.2s-6.1 0-7.9.3c-.9.2-1.5.8-1.7 1.7C2 9 2 12 2 12s0 3 .4 4.8c.2.9.9 1.5 1.7 1.7 1.8.3 7.9.3 7.9.3s6.1 0 7.9-.3c.9-.2 1.5-.8 1.7-1.7.4-1.8.4-4.8.4-4.8s0-3-.4-4.8ZM10 15.2V8.8l5.3 3.2Z"
      />
    </svg>
  ),
}

export default function GroupPage() {
  const { slug } = useParams()
  const group = groups.find((item) => item.slug === slug)

  if (!group) {
    return (
      <div className="page section">
        <h1>Ensemble not found</h1>
        <p>The group you are looking for has moved. Please return to the full roster.</p>
        <Link className="btn btn--primary" to="/groups">
          Back to Groups
        </Link>
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
  }

  return (
    <div className="page group-page" style={themeVars}>
      <section className="group-hero" style={{ backgroundImage: `linear-gradient(${group.palette.overlay}, ${group.palette.overlay}), url(${group.heroImage})` }}>
        <div className="group-hero__content">
          {group.logo && (
            <div className="group-hero__logo">
              <img src={group.logo} alt={`${group.name} logo`} />
            </div>
          )}
          <p className="eyebrow">
            {group.type} · {group.city}
          </p>
          <h1>{group.name}</h1>
          <p className="lead">{group.shortDescription}</p>
          {group.auditionsOpen && <p className="group-card__status">{group.auditionStatus}</p>}
          <div className="hero-actions">
            <Link className="btn btn--primary" to="/book-us">
              Book {group.name}
            </Link>
            <Link className="btn btn--ghost" to="/groups">
              View All Groups
            </Link>
          </div>
          {group.socials && (
            <ul className="social-list">
              {Object.entries(group.socials).map(([network, url]) => {
                const key = network.toLowerCase()
                const icon = socialIcons[key]
                const label = socialLabels[key] || network
                return (
                  <li key={network}>
                    <a href={url} target="_blank" rel="noreferrer">
                      {icon}
                      <span>{label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </section>

      <section className="section">
        <div className="group-detail-grid">
          <article className="card">
            <h2>About</h2>
            <p>{group.longDescription}</p>
            <p>{group.extendedDescription}</p>
          </article>
          <article className="card">
            <h2>Highlights</h2>
            <ul>
              {group.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {group.members.length > 0 && (
        <section className="section section--alt">
          <div className="section__header">
            <h2>Members</h2>
          </div>
          <ul className="members-list">
            {group.members.map((member) => (
              <li key={member.name}>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <div className="section__header">
          <h2>Offerings</h2>
          <p>We share acapella music at events of all kinds.</p>
        </div>
        <div className="card-grid">
          <article className="card">
            <h3>Spotlight Sets</h3>
            <p>Short, polished performances perfect for concerts, festivals, and community stages.</p>
          </article>
          <article className="card">
            <h3>Intimate Performances</h3>
            <p>Cozy, close-up sets for living rooms, park gatherings, gallery nights, and small local events.</p>
          </article>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section__header">
          <h2>Watch & listen</h2>
        </div>
        <div className="video-embed">
          <iframe
            title={`${group.name} highlight video`}
            src={formatYouTubeEmbed(group.featuredVideo)}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Gallery</h2>
        </div>
        <div className="gallery-grid">
          {group.gallery.map((image, index) => (
            <a
              className="gallery-grid__item"
              key={image}
              href={image}
              target="_blank"
              rel="noreferrer"
              style={{ backgroundImage: `url(${image})` }}
            >
              <span className="sr-only">
                Open {group.name} photo {index + 1} in a new tab
              </span>
            </a>
          ))}
        </div>
      </section>

      {group.auditionsOpen && group.auditionNote && (
        <section className="section section--cta audition-cta">
          <div>
            <h2>Audition status</h2>
            <p>{group.auditionNote}</p>
          </div>
          {group.auditionLink ? (
            <a className="btn btn--primary" href={group.auditionLink} target="_blank" rel="noreferrer">
              Audition
            </a>
          ) : (
            <Link className="btn btn--ghost" to="/join">
              View Join Details
            </Link>
          )}
        </section>
      )}
    </div>
  )
}
