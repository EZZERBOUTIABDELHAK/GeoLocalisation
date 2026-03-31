import { FaShoppingCart, FaCheck } from 'react-icons/fa'
import './Products.css'

const plans = [
  {
    name: 'BASIC Pack',
    price: null,
    highlight: false,
    vehicles: '1 véhicule',
    features: [
      'Application Mobile',
      'Tracking temps réel',
      'Historique Tracking',
      'Film de trajet',
      'Vitesse',
      'Kilométrage parcours',
    ],
  },
  {
    name: 'PRO Pack',
    price: null,
    highlight: true,
    vehicles: '1 véhicule',
    features: [
      'Application Mobile',
      'Tracking temps réel',
      'Historique Tracking',
      'Film de trajet',
      'Vitesse',
      'Kilométrage parcours',
      'Les alertes vitesses',
      'Les alertes des franches horaires',
    ],
  },
  {
    name: 'FAMILY Pack',
    price: null,
    highlight: false,
    vehicles: '3 véhicules',
    features: [
      'Application Mobile',
      'Tracking temps réel',
      'Historique Tracking',
      'Film de trajet',
      'Vitesse',
      'Kilométrage parcours',
      'Les alertes vitesses',
      'Les alertes des franches horaires',
    ],
  },
]

export default function Products() {
  return (
    <section id="produits" className="products">
      <div className="container">
        <h2 className="section-title">Nos produits</h2>
        <div className="products-grid">
          {plans.map((plan, i) => (
            <div key={i} className={`product-card ${plan.highlight ? 'highlighted' : ''}`}>
              {plan.highlight && <div className="plan-popular">Populaire</div>}
              {/* Logo */}
              <div className="plan-logo">
                <span className="plan-logo-icon">☆</span>
                <span className="plan-logo-text">Eurosoft</span>
                <sup className="plan-logo-sup">MS</sup>
              </div>

              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-vehicles">
                <FaCheck className="plan-vehicles-icon" />
                <strong>{plan.vehicles}</strong>
              </div>

              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <FaCheck />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={`plan-btn ${plan.highlight ? 'plan-btn-filled' : ''}`}>
                <FaShoppingCart />
                Commander
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
