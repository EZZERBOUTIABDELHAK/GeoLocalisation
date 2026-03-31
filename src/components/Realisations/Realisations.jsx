import './Realisations.css'

const photos = [
  {
    label: 'Motocycliste avec GPS',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Conductrice avec téléphone',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Homme au volant',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
  },
  {
    label: 'Famille en voiture',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
  },
]

export default function Realisations() {
  return (
    <section id="realisations" className="realisations">
      <div className="container">
        <h2 className="section-title">Nos Réalisations</h2>
        <div className="realisations-grid">
          {photos.map((photo, i) => (
            <div key={i} className="realisation-card">
              <img src={photo.image} alt={photo.label} className="realisation-img" />
              <div className="realisation-overlay">
                <span>{photo.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
