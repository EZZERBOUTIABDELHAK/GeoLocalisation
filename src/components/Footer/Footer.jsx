import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><FaMapMarkerAlt /></div>
              <div className="footer-logo-text">
                <span className="footer-logo-main">Eurosoft</span>
                <span className="footer-logo-badge">MS</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              Leader du GPS en Algérie EuroSoft-Algérie détentrice de l'autorisation
              d'exploitation de récepteurs GPS/GSM N°116/ARPT/2014 délivrée par l'ARPT le 23/07/2014.
            </p>
            <p className="footer-brand-legal">
              Numéro de RC: AL22 A1118<br/>
              Numéro de stat: 12345678<br/>
              Activité par l'ARPT le 23/07/2014
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Nos Services</h4>
            <ul className="footer-links">
              {['Service 01', 'Service 02', 'Service 03', 'Service 04', 'Service 05'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div id="agences" className="footer-col">
            <h4 className="footer-col-title">Nos Implantations</h4>
            <ul className="footer-links">
              {['Zone d\'implantation 01', 'Zone d\'implantation 02', 'Zone d\'implantation 03', 'Zone d\'implantation 04', 'Zone d\'implantation 05'].map(z => (
                <li key={z}><a href="#">{z}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Infos de contact</h4>
            <ul className="footer-contact-list">
              <li>
                <FaMapMarkerAlt />
                <span>Adresse du siège 845, numéro de rue, et la rue, et la wilaya</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+213530074455">+213 (0) 23 00 74 55</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+213558155966">+213 (0) 558 155 966</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:contact@eurosoft-ms.com">contact@eurosoft-ms.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© Copyright 2023 EUROSOFT MOBILE SERVICE. Tous droits réservés.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
