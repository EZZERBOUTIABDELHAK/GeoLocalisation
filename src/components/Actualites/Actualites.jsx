import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa'
import './Actualites.css'

const articles = [
  {
    category: 'Actualité',
    title: 'Nouvelle mise à jour de l\'application Eurosoft Mobile',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',
    date: 'Mars 2024',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Actualité',
    title: 'Eurosoft partenaire officiel des flottes d\'entreprises en Algérie',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'Fév 2024',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Actualité',
    title: 'Comment le GPS améliore la gestion de votre flotte véhicules',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim minim.',
    date: 'Jan 2024',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Actualites() {
  return (
    <section id="actualites" className="actualites">
      <div className="container">
        <h2 className="section-title">Actualités</h2>
        <div className="actualites-grid">
          {articles.map((art, i) => (
            <article key={i} className="article-card">
              <div className="article-image">
                <img src={art.image} alt={art.title} className="article-img" />
                <div className="article-category">{art.category}</div>
              </div>
              <div className="article-body">
                <div className="article-meta">
                  <FaCalendarAlt />
                  <span>{art.date}</span>
                </div>
                <h3 className="article-title">{art.title}</h3>
                <p className="article-excerpt">{art.excerpt}</p>
                <a href="#actualites" className="article-link">
                  Lire la suite <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
