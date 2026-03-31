import { FaMedal, FaCog, FaHeadset, FaCar, FaUsers } from 'react-icons/fa'
import './StatsPromo.css'

const features = [
  { icon: <FaMedal />, title: 'Meilleure qualité de Service', desc: 'Qualité premium garantie' },
  { icon: <FaCog />, title: 'Garantie Software et Hardware', desc: 'Support matériel & logiciel' },
  { icon: <FaHeadset />, title: 'Support disponible 7j/24h', desc: 'Assistance continue' },
]

const stats = [
  { icon: <FaCar />, value: '+5000', label: 'Véhicule équipé' },
  { icon: <FaUsers />, value: '+2500', label: 'Clients satisfaits' },
]

export default function StatsPromo() {
  return (
    <section id="services" className="stats-promo">
      {/* Dark left panel */}
      <div className="stats-panel">
        <div className="stats-panel-inner">
          <p className="stats-eyebrow">Ce que nous offrons pour vous</p>

          <div className="stats-features">
            {features.map((f, i) => (
              <div key={i} className="stats-feature">
                <div className="stats-feature-icon">{f.icon}</div>
                <div>
                  <div className="stats-feature-title">{f.title}</div>
                  <div className="stats-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="stats-numbers">
            {stats.map((s, i) => (
              <div key={i} className="stats-number">
                <div className="stats-number-icon">{s.icon}</div>
                <div className="stats-number-value">{s.value}</div>
                <div className="stats-number-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right promo image + badge */}
      <div className="stats-image-side">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=80" 
          alt="Conducteur heureux en voiture" 
          className="stats-promo-img"
        />

        {/* Red promo badge */}
        <div className="promo-badge">
          <p className="promo-badge-line1">Installer votre</p>
          <h3 className="promo-badge-title">GPS</h3>
          <p className="promo-badge-line2">et payer à</p>
          <p className="promo-badge-line3">l'année</p>
        </div>
      </div>
    </section>
  )
}
