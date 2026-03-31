import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPhone, FaArrowRight } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#produits', label: 'Nos Produits' },
  { href: '#services', label: 'Nos Services' },
  { href: '#agences', label: 'Nos Agences' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#accueil')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#accueil" className="navbar-logo">
          <div className="logo-icon" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
            ☆
          </div>
          <div className="logo-text">
            <span className="logo-main">Eurosoft</span>
            <span className="logo-badge">MS</span>
          </div>
        </a>

        {/* Nav Links */}
        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
              onClick={() => { setActiveLink(link.href); setMenuOpen(false) }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="navbar-right">
          <a href="tel:+213540253048" className="navbar-phone">
            <FaPhone />
            <span>+213 (0) 540 253 048</span>
          </a>
          <a href="#contact" className="navbar-cta-btn">
            Obtenir un Devis
            <span className="navbar-cta-icon"><FaArrowRight /></span>
          </a>
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}
