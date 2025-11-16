import { Link } from 'react-router-dom'
import { primaryNav } from '../data/navigation'

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const navColumns = Array.from({ length: Math.ceil(primaryNav.length / 3) }, (_, columnIndex) =>
    primaryNav.slice(columnIndex * 3, columnIndex * 3 + 3)
  )

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Harmony. Community. Acapella.</h2>
          <p>Call <a href="tel:+17193221809">(719) 322-1809</a></p>
          <p>Denver · Littleton · Golden, Colorado</p>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <div className="footer-nav">
            {navColumns.map((column, columnIndex) => (
              <ul className="footer-nav__column" key={`footer-column-${columnIndex}`}>
                {column.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
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
