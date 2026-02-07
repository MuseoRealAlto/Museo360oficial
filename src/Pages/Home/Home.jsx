import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
//import './Home.css';
import './Hero.css';
import './Gallery-Slide.css';
import './Quote.css';
import './Services.css';
import heroImage from '../../assets/museo2.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const pub = (p) =>
  new URL(
    String(p).replace(/^\/+/, ""),
    window.location.origin + (import.meta.env.BASE_URL || "/")
  ).href;





// Importa las imágenes de la galería
import galeria1 from '../../assets/gallery/foto1.JPG';
import galeria2 from '../../assets/gallery/foto2.JPG';
import galeria3 from '../../assets/gallery/foto3.JPG';
import galeria4 from '../../assets/gallery/foto4.JPG';
import galeria5 from '../../assets/gallery/foto5.JPG';
import galeria6 from '../../assets/gallery/panoramica3.JPG';
import galeria7 from '../../assets/gallery/panoramica4.JPG';
import galeria8 from '../../assets/gallery/panoramica5.JPG';
import galeria9 from '../../assets/gallery/panoramica6.JPG';
import galeria10 from '../../assets/gallery/panoramica7.JPG';
import realaltoIcon from '../../assets/real_alto_icon.png';

import { useLanguage } from '../../context/LanguageContext';

const slides = [
  { src: galeria1 }, { src: galeria2 }, { src: galeria3 },
  { src: galeria4 }, { src: galeria5 }, { src: galeria6 },
  { src: galeria7 }, { src: galeria8 }, { src: galeria9 },
  { src: galeria10 }
];

function Home() {
  const [index, setIndex] = useState(-1);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { lang } = useLanguage();



  const TEXT = {
    ES: {
      heroSubtitle: "INMERSIÓN EN LA SOCIEDAD VALDIVIA",
      heroTitle: "La más antigua Revolución Neolítica de América",
      heroDesc:
        "Museo Real Alto 360 es una experiencia inmersiva que permite a los visitantes explorar la riqueza histórica y arqueológica del Complejo Cultural Real Alto desde cualquier parte del mundo.",
      visit: "VISÍTANOS",

      quoteTitle: (
        <>
          La <span className="highlight">arqueología</span> nos conecta con nuestro pasado,<br />
          la <span className="highlight">tecnología</span> nos acerca al conocimiento,<br />
          y la <span className="highlight">cultura</span> nos define como sociedad
        </>
      ),
      quoteText:
        "El Museo Real Alto 360 preserva el patrimonio cultural ecuatoriano mediante tecnología inmersiva, ofreciendo una nueva forma de comprender y valorar el legado ancestral de la cultura Valdivia.",

      galleryTitle: "Galería de Exhibiciones",
      galleryDesc:
        "Cada imagen representa un vestigio de la vida cotidiana de la cultura Valdivia. Recorre visualmente los espacios y hallazgos del Complejo Cultural Real Alto.",

      infoBadge1: "Información",
      visitHours: "Horarios de Visita",
      visitSchedule: (
        <>
          Lunes a Viernes: 9:00am – 5:00pm<br />
          Sábados: 10:00am – 4:00pm<br />
          Domingos: Cerrado
        </>
      ),
      visitHint: "Planifica tu visita y disfruta del recorrido cultural.",

      infoBadge2: "Patrimonio",
      museumTitle: "Museo Real Alto",
      museumDesc:
        "Museo desarrollado con la colaboración activa de la comunidad circundante.",
      museumHint:
        "Descubre su historia, investigaciones y legado cultural.",
      exploreHistory: "Explorar historia →",

      modalTitle: "Museo y Complejo Cultural Real Alto",
      close: "Cerrar",
    },

    EN: {
      heroSubtitle: "IMMERSION IN THE VALDIVIA SOCIETY",
      heroTitle: "The Oldest Neolithic Revolution in the Americas",
      heroDesc:
        "Real Alto 360 Museum is an immersive experience that allows visitors to explore the historical and archaeological richness of the Real Alto Cultural Complex from anywhere in the world.",
      visit: "VISIT US",

      quoteTitle: (
        <>
          <span className="highlight">Archaeology</span> connects us to our past,<br />
          <span className="highlight">technology</span> brings us closer to knowledge,<br />
          and <span className="highlight">culture</span> defines us as a society
        </>
      ),
      quoteText:
        "The Real Alto 360 Museum preserves Ecuadorian cultural heritage through immersive technology, offering a new way to understand and value the ancestral legacy of the Valdivia culture.",

      galleryTitle: "Exhibition Gallery",
      galleryDesc:
        "Each image represents a trace of daily life in the Valdivia culture. Explore visually the spaces and discoveries of the Real Alto Cultural Complex.",

      infoBadge1: "Information",
      visitHours: "Visiting Hours",
      visitSchedule: (
        <>
          Monday to Friday: 9:00am – 5:00pm<br />
          Saturdays: 10:00am – 4:00pm<br />
          Sundays: Closed
        </>
      ),
      visitHint: "Plan your visit and enjoy the cultural tour.",

      infoBadge2: "Heritage",
      museumTitle: "Real Alto Museum",
      museumDesc:
        "Museum developed with the active collaboration of the surrounding community.",
      museumHint:
        "Discover its history, research, and cultural legacy.",
      exploreHistory: "Explore history →",

      modalTitle: "Real Alto Museum and Cultural Complex",
      close: "Close",
    },
  };

  return (
    <div className="home">
      {/* Hero Section */}
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">{TEXT[lang].heroSubtitle}</span>
          <h1 className="hero-title">{TEXT[lang].heroTitle}</h1>
          <p className="hero-description">{TEXT[lang].heroDesc}</p>
          <Link to="/visitus" className="hero-button">
            {TEXT[lang].visit}
          </Link>
        </div>
      </section>


     {/* QUOTE */}
      <section className="quote-section">
        <div className="quote-overlay">
          <div className="quote-box">
            <h2 className="quote-title">{TEXT[lang].quoteTitle}</h2>
            <div className="quote-divider"></div>
            <p className="quote-text">{TEXT[lang].quoteText}</p>
          </div>
        </div>
      </section>



      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-overlay">
          <div className="container">
            <div className="gallery-header">
              <h2 className="gallery-title">{TEXT[lang].galleryTitle}</h2>
              <div className="gallery-divider"></div>
              <p className="gallery-description">{TEXT[lang].galleryDesc}</p>
            </div>

            <Swiper
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={3}
              centeredSlides
              loop
              pagination={{ clickable: true }}
              breakpoints={{
                1280: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
              className="centered-slide-carousel"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="gallery-slide" onClick={() => setIndex(i)}>
                    <img src={slide.src} alt={`Gallery ${i + 1}`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
            />
          </div>
        </div>
      </section>


    {/* INFO */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">

            <div className="info-card">
              <span className="info-badge">{TEXT[lang].infoBadge1}</span>
              <div className="info-header">
                <span className="info-icon">🕐</span>
                <h3>{TEXT[lang].visitHours}</h3>
              </div>
              <p className="info-description">{TEXT[lang].visitSchedule}</p>
              <div className="info-divider"></div>
              <p className="info-hint">{TEXT[lang].visitHint}</p>
              <div className="info-line"></div>
            </div>

            <div className="info-card">
              <span className="info-badge">{TEXT[lang].infoBadge2}</span>
              <div className="info-header">
                <span className="info-icon info-icon-img">
                  <img src={realaltoIcon} alt="Real Alto" />
                </span>
                <h3>{TEXT[lang].museumTitle}</h3>
              </div>
              <p className="info-description">{TEXT[lang].museumDesc}</p>
              <div className="info-divider"></div>
              <p className="info-hint">{TEXT[lang].museumHint}</p>
              <button
                className="info-button"
                onClick={() => setShowMoreInfo(true)}
              >
                {TEXT[lang].exploreHistory}
              </button>
              <div className="info-line"></div>
            </div>

          </div>
        </div>
      </section>


      {/* More Info Section (Conditional) */}
      {/* MODAL */}
      {showMoreInfo && (
        <div className="modal-overlay" onClick={() => setShowMoreInfo(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{TEXT[lang].modalTitle}</h3>
            <button onClick={() => setShowMoreInfo(false)}>
              {TEXT[lang].close}
            </button>
          </div>
        </div>
      )}



</div>
  );
}

export default Home;