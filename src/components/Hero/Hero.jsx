import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'
import './Hero.css'

const slides = [
  {
    label: 'Géolocalisation & Gestion de Flotte',
    title: 'EMS Géolocalisation et Géo Management',
    description: 'Société spécialisée dans la commercialisation de technologie de géo localisation et géo-management.',
  },
  {
    label: 'Surveillance en Temps Réel',
    title: 'Tracking GPS Professionnel pour votre Flotte',
    description: 'Suivez vos véhicules en temps réel, optimisez vos tournées et réduisez vos coûts opérationnels.',
  },
  {
    label: 'Solution Innovante',
    title: 'La Technologie GPS au Service de Votre Entreprise',
    description: 'Des solutions de géo-management adaptées aux besoins des professionnels et des particuliers.',
  },
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    z: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    z: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const goTo = (idx) => {
    if (idx === current) return
    let newDirection = idx > current ? 1 : -1
    // Loop around
    if (current === slides.length - 1 && idx === 0) newDirection = 1
    if (current === 0 && idx === slides.length - 1) newDirection = -1
    
    setDirection(newDirection)
    setCurrent(idx)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [current])
  return (
    <section id="accueil" className="hero">
      {/* Background overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-text-wrapper">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  goTo((current + 1) % slides.length);
                } else if (swipe > swipeConfidenceThreshold) {
                  goTo((current - 1 + slides.length) % slides.length);
                }
              }}
              className="hero-text-content"
            >
              <span className="hero-label">{slides[current].label}</span>
              <h1 className="hero-title">{slides[current].title}</h1>
              <p className="hero-desc">{slides[current].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="hero-actions">
          <a href="#produits" className="btn-primary">
            Consulter plus
          </a>
          {/* Desktop ghost button */}
          <a href="#contact" className="hero-btn-ghost desktop-only">
            Nous contacter
          </a>
          {/* Mobile premium CTA */}
          <a href="#contact" className="hero-cta-btn mobile-only">
            Obtenir un Devis
            <span className="hero-cta-icon"><FaArrowRight /></span>
          </a>
        </div>
      </div>

      {/* GPS Pin decoration */}
      <div className="hero-pin">
        <FaMapMarkerAlt />
        <div className="hero-pin-ring" />
        <div className="hero-pin-ring ring2" />
      </div>

      {/* Slider controls */}
      <div className="hero-controls">
        <button onClick={() => goTo((current - 1 + slides.length) % slides.length)} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={() => goTo((current + 1) % slides.length)} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>
    </section>
  )
}
