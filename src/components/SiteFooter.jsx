import { Link } from 'react-router-dom'
import { primaryNav } from '../data/navigation'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Harmony. Community. Acapella.</h2>
          <p>
            Email{' '}
            <a href="mailto:hello@harmonycollective.org" rel="noreferrer">
              hello@harmonycollective.org
            </a>
          </p>
          <p>Call <a href="tel:+17193221809">(719) 322-1809</a></p>
          <p>Denver · Littleton · Golden, Colorado</p>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="footer-nav">
            {primaryNav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-cta">
            <Link className="btn btn--primary" to="/donate">
              Support Our Voices
            </Link>
            <Link className="btn btn--ghost" to="/book-us">
              Book a Performance
            </Link>
          </div>
        </div>
      </div>
      <p className="footer__legal">
        © {currentYear} Harmony Collective · Nonprofit vocal arts hub for Denver, Littleton, and Golden.
      </p>
    </footer>
  )
}
