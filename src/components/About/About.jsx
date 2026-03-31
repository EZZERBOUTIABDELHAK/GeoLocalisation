import { FaCheckCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './About.css'

export default function About() {
  return (
    <section id="apropos" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="about-eyebrow">À propos de nous et nos Produits</p>
            <h2 className="about-heading">Eurosoft Mobile Service Leader du GPS en Algérie</h2>
            <div className="about-cta">
              <a href="#produits" className="btn-primary">Consulter plus</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="about-text">
              Leader du GPS en Algérie EuroSoft-Algérie détentrice de l'autorisation
              d'exploitation de récepteurs GPS/GSM N°116/ARPT/2014 délivrée par
              l'ARPT le 23/07/2014
            </p>
            <div className="about-badges">
              <div className="about-badge">
                <FaCheckCircle />
                <span>Autorisation ARPT N°116/ARPT/2014</span>
              </div>
              <div className="about-badge">
                <FaCheckCircle />
                <span>Délivrée le 23/07/2014</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
