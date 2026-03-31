import { FaCircle, FaPlayCircle, FaCheck } from 'react-icons/fa'
import './AboutDetail.css'

const features = [
  'Développement de technologie de géo localisation',
  'Développement de technologie de géo-management',
  'Présence sur le marché des GPS avec une approche unique et élaborée',
]

export default function AboutDetail() {
  return (
    <section className="about-detail">
      <div className="container about-detail-grid">
        {/* Image side */}
        <div className="adetail-image-wrap">
          <div className="adetail-image-bg" />
          <div className="adetail-image">
            <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80" alt="Navigation GPS dans une voiture" className="adetail-photo" />
          </div>
        </div>

        {/* Content side */}
        <div className="adetail-content">
          <p className="adetail-eyebrow">Eurosoft Mobile Service</p>
          <h2 className="adetail-heading">
            Leader du GPS en Algérie EuroSoft-Algérie détentrice de l'autorisation
            d'exploitation de récepteurs GPS/GSM N°116/ARPT/2014
          </h2>
          <ul className="adetail-features">
            {features.map((f, i) => (
              <li key={i} className="adetail-feature">
                <span className="adetail-dot"><FaCircle /></span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a href="#produits" className="btn-outline adetail-btn">
            <FaPlayCircle />
            Voir notre Solution
          </a>
        </div>
      </div>
    </section>
  )
}
