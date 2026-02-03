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


const slides = [
  { src: galeria1 }, { src: galeria2 }, { src: galeria3 },
  { src: galeria4 }, { src: galeria5 }, { src: galeria6 },
  { src: galeria7 }, { src: galeria8 }, { src: galeria9 },
  { src: galeria10 }
];

function Home() {
  const [index, setIndex] = useState(-1);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="home">
      {/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <span className="hero-subtitle">
      INMERSIÓN EN LA SOCIEDAD VALDIVIA
    </span>

    <h1 className="hero-title">
      La más antigua <br />
      Revolución Neolítica <br/>
      de América<br />
    </h1>

    <p className="hero-description">
      Museo Real Alto 360 es una experiencia inmersiva que permite a los
      visitantes explorar la riqueza histórica y arqueológica del
      Complejo Cultural Real Alto desde cualquier parte del mundo.
    </p>

    {/* <Link to="/visitus" className="hero-button">
      VISÍTANOS
    </Link> */}

      <Link to="/visitus" className="hero-button">
        VISÍTANOS
      </Link>

  </div>
</section>


<section className="quote-section">
  <div className="quote-overlay">
    <div className="quote-box">
      <h2 className="quote-title">
        La <span className="highlight">arqueología</span> nos conecta con nuestro pasado,<br />
        la <span className="highlight">tecnología</span> nos acerca al conocimiento,<br />
        y la <span className="highlight">cultura</span> nos define como sociedad
      </h2>

      <div className="quote-divider"></div>

      <p className="quote-text">
        El Museo Real Alto 360 preserva el patrimonio cultural ecuatoriano
        mediante tecnología inmersiva, ofreciendo una nueva forma de comprender
        y valorar el legado ancestral de la cultura Valdivia.
      </p>
    </div>
  </div>
</section>




 {/* Gallery Section */}
<section className="gallery-section">
  <div className="gallery-overlay">
    <div className="container">

      {/* TEXTO */}
<div className="gallery-header">
  {/* <span className="gallery-eyebrow">EXPLORACIÓN VISUAL</span> */}
  <h2 className="gallery-title">Galería de Exhibiciones</h2>
  <div className="gallery-divider"></div>
  <p className="gallery-description">
    Cada imagen representa un vestigio de la vida cotidiana de la cultura
    Valdivia. Recorre visualmente los espacios y hallazgos del
    Complejo Cultural Real Alto.
  </p>
</div>


      {/* CARRUSEL */}
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
            <div
              className="gallery-slide"
              onClick={() => setIndex(i)}
            >
              <img src={slide.src} alt={`Galería ${i + 1}`} />
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


      {/* Info Section */}
{/* Info Section */}
<section className="info-section">
  <div className="container">
    <div className="info-grid">

      {/* CARD 1 */}
      <div className="info-card">
        <span className="info-badge">Información</span>

        <div className="info-header">
          <span className="info-icon">🕐</span>
          <h3>Horarios de Visita</h3>
        </div>

        <p className="info-description">
          Lunes a Viernes: 9:00am – 5:00pm<br />
          Sábados: 10:00am – 4:00pm<br />
          Domingos: Cerrado
        </p>

        <div className="info-divider"></div>

        <p className="info-hint">
          Planifica tu visita y disfruta del recorrido cultural.
        </p>

        <div className="info-line"></div>
      </div>

      {/* CARD 2 */}
      <div className="info-card">
        <span className="info-badge">Patrimonio</span>

        <div className="info-header">
          <span className="info-icon info-icon-img">
            <img src={realaltoIcon} alt="Museo Real Alto" />
          </span>
          <h3>Museo Real Alto</h3>
        </div>

        <p className="info-description">
          Museo desarrollado con la colaboración activa de la comunidad
          circundante.
        </p>

        <div className="info-divider"></div>

        <p className="info-hint">
          Descubre su historia, investigaciones y legado cultural.
        </p>

        <button
          className="info-button"
          onClick={() => setShowMoreInfo(true)}
        >
          Explorar historia →
        </button>

        <div className="info-line"></div>
      </div>

    </div>
  </div>
</section>



      {/* More Info Section (Conditional) */}
{showMoreInfo && (
  <div
    className="modal-overlay"
    onClick={() => setShowMoreInfo(false)}
  >
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <h3>Museo y Complejo Cultural Real Alto</h3>

      <div className="modal-text">
            <p>
              El sitio arqueológico Real Alto, fue descubierto y excavado en los años 1970 por el Dr. Jorge Marcos, junto a un equipo de la Universidad de Illinois, y es uno de los más importantes a nivel nacional e internacional. Las investigaciones interdisciplinares que se han llevado a cabo desde su descubrimiento, demuestran que la cultura Valdivia fue una de las primeras en desarrollar la agricultura en todo el continente americano. En el sitio Real Alto se han aplicado metodologías pioneras, que han aportado mucha información sobre los modos de vida de la cultura Valdivia. En el caso de la arquebotánica, los estudios desarrollados por la Dra. D. Pearsall permitieron demostrar la domesticación de las plantas en este periodo. Los estudios etnoarqueológicos que realizó el Dr. J. Zeidler, permitieron identificar similitudes entre la construcción de las viviendas Valdivia, y las de la etnia Shuar. Fechamientos por termoluminiscencia realizados en los años 1990 confirman a la cerámica de Valdivia como la más antigua del continente americano. Estos resultados, producto de investigaciones que han involucrado a académicos de instituciones internacionales, permiten no solo reconstruir la forma de vida de un pueblo ancestral, sino también hacer partícipe de los descubrimientos a las comunidades y así fomentar la recuperación de la identidad cultural de los pueblos. Sin embargo, esta información no es accesible a la sociedad sin la ayuda de un mediador, que transforme los datos científicos en información comprensible, de ahí la necesidad de incentivar la divulgación científica.
            </p>
            <p>
              El Complejo Cultural Real Alto (CCRA), contiguo al sitio arqueológico epónimo, se concibió desde el principio como un modelo de integración de los resultados obtenidos de las investigaciones con la comunidad. Este complejo cultural puede dividirse en dos áreas definidas, pero integradas: la primera dedicada a la divulgación, donde encontramos el museo, una casa construida con técnicas tradicionales de la zona, un auditorio, un arboreto, donde se pueden identificar los recursos vegetales que usaba la cultura Valdivia, un huerto con plantas medicinales, un itinerario por el sitio arqueológico y un bar donde los visitantes pueden refrescarse. El otro espacio, está dedicado a la investigación, se compone de un laboratorio y una residencia para investigadores. Rompiendo con las corrientes tradicionales, casi exclusivamente de corte anticuarista, que dominaban la museografía arqueológica ecuatoriana en la década de 1980, el Dr. Luis Lumbreras, Dr. Marcos y la antropóloga Dra. Silvia Álvarez, pusieron en marcha el museo del CCRA, en colaboración activa con los comuneros de Pechiche. Así se integraron estudios antropológicos realizados paralelo a las excavaciones originales, ya que en las escuelas de campo (1982-1987), parte de Escuela de Arqueología de la ESPOL, incluyeron la participación de la comunidad indígena de la zona y artistas del grupo La Artefactoría, entre ellos Flavio Álava, Marco Alvarado y Pedro Dávila.
            </p>
            <p>
              Desde que se creó el CCRA en la década de los 80 del siglo pasado, las investigaciones arqueológicas han continuado: han continuado las excavaciones, los estudios de los materiales, se han aplicado nuevas técnicas de datación, por termoluminiscencia o difractor de rayos X, producto de una colaboración entre la ESPOL, Universidad Autónoma de Barcelona, y la Universidad de Milán (Italia). Esta colaboración entre instituciones confirmó, a la cerámica Valdivia de RA como la más antigua del continente americano. Pero los avances en los trabajos no se quedaron ahí, se han realizado también prospecciones con georadar, estudios microscópicos de materiales líticos, y otras dataciones radiocarbónicos, en colaboración con la Universidad Federal del Extremo Oriente de Vladivostok, en la Federación Rusa, involucrando investigadores del Ecuador, Rusia, España y Japón,
            </p>
      </div>

      <button onClick={() => setShowMoreInfo(false)}>
        Cerrar
      </button>
    </div>
  </div>
)}



</div>
  );
}

export default Home;