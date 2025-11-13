import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { primaryNav } from '../data/navigation'

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-header__inner">
        <NavLink className="site-logo" to="/">
          Harmony Collective
        </NavLink>

        <button
          className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="primary-nav" aria-label="Primary">
          <ul className={`primary-nav__list ${isOpen ? 'is-open' : ''}`}>
            {primaryNav.map((item) => (
              <li key={item.path}>
                <NavLink className={({ isActive }) => `primary-nav__link ${isActive ? 'is-active' : ''}`} to={item.path}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
