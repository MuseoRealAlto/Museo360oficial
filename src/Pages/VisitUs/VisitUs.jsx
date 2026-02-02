import { useEffect, useRef } from "react";
import "./VisitUs.css";
import visitImage from "../../assets/visit-image.jpg";

export default function Visitanos() {
  const splitRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const el = splitRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const q = encodeURIComponent("Complejo Cultural Real Alto");
  const embed = `https://www.google.com/maps?q=${q}&output=embed`;
  const open = `https://www.google.com/maps/search/?api=1&query=${q}`;
  const dir  = `https://www.google.com/maps/dir/?api=1&destination=${q}`;

  return (
    <main className="page-visit">

      {/* HERO */}
      <header className="visit-hero">
<div className="hero-inner">
  <div className="hero-glass">
    {/* <span className="chip hero-chip">Planifica tu visita</span> */}

    <h1>V I S Í T A N O S</h1>

    <p className="hero-sub">
      En el Complejo Cultural Real Alto la historia no se observa desde lejos:
      se camina, se escucha y se comparte con la comunidad.
    </p>
  </div>
</div>

      </header>

      {/* SPLIT TEXTO + IMAGEN */}
      <section className="visit-split fade-up" ref={splitRef}>
        <div className="visit-left">
          <div className="visit-left-inner">

            <h2 className="visit-eyebrow">Complejo Cultural Real Alto</h2>


            <p>
              Ubicado en la Península de Santa Elena, este espacio arqueológico y
              cultural integra museo, comunidad y paisaje para ofrecer una
              experiencia única en el Ecuador.
            </p>

            <ul className="visit-list">
              <li>🗺️ Sitio arqueológico emblemático</li>
              <li>🏛️ Museo comunitario</li>
              <li>🌱 Espacios educativos y naturales</li>
            </ul>

          </div>
        </div>

        <div className="visit-right">
          <img src={visitImage} alt="Complejo Cultural Real Alto" />
        </div>
      </section>

      {/* MAPA */}
      <section className="visit-map">
        <div className="map-card">
          <iframe
            title="Mapa Complejo Cultural Real Alto"
            src={embed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="map-actions">
            <a
              href={open}
              target="_blank"
              rel="noreferrer"
              className="map-btn solid"
            >
              📍 Abrir en Google Maps
            </a>

            <a
              href={dir}
              target="_blank"
              rel="noreferrer"
              className="map-btn outline"
            >
              🧭 Cómo llegar
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
