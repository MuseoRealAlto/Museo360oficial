import { useEffect, useRef } from "react";
import "./VisitUs.css";
import visitImage from "../../assets/visit-image.jpg";
import { useLanguage } from "../../context/LanguageContext";

export default function Visitanos() {
  const { lang } = useLanguage();
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

  const TEXT = {
    ES: {
      heroTitle: "V I S Í T A N O S",
      heroSub:
        "En el Complejo Cultural Real Alto la historia no se observa desde lejos: se camina, se escucha y se comparte con la comunidad.",

      eyebrow: "Complejo Cultural Real Alto",
      description:
        "Ubicado en la Península de Santa Elena, este espacio arqueológico y cultural integra museo, comunidad y paisaje para ofrecer una experiencia única en el Ecuador.",

      list: [
        "🗺️ Sitio arqueológico emblemático",
        "🏛️ Museo comunitario",
        "🌱 Espacios educativos y naturales"
      ],

      openMap: "📍 Abrir en Google Maps",
      directions: "🧭 Cómo llegar"
    },

    EN: {
      heroTitle: "V I S I T  U S",
      heroSub:
        "At the Real Alto Cultural Complex, history is not observed from afar: it is walked, heard, and shared with the community.",

      eyebrow: "Real Alto Cultural Complex",
      description:
        "Located on the Santa Elena Peninsula, this archaeological and cultural site integrates museum, community, and landscape to offer a unique experience in Ecuador.",

      list: [
        "🗺️ Iconic archaeological site",
        "🏛️ Community museum",
        "🌱 Educational and natural spaces"
      ],

      openMap: "📍 Open in Google Maps",
      directions: "🧭 Get directions"
    }
  };

  return (
    <main className="page-visit">

      {/* HERO */}
      <header className="visit-hero">
        <div className="hero-inner">
          <div className="hero-glass">
            <h1>{TEXT[lang].heroTitle}</h1>
            <p className="hero-sub">{TEXT[lang].heroSub}</p>
          </div>
        </div>
      </header>

      {/* SPLIT */}
      <section className="visit-split fade-up" ref={splitRef}>
        <div className="visit-left">
          <div className="visit-left-inner">

            <h2 className="visit-eyebrow">
              {TEXT[lang].eyebrow}
            </h2>

            <p>{TEXT[lang].description}</p>

            <ul className="visit-list">
              {TEXT[lang].list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

          </div>
        </div>

        <div className="visit-right">
          <img
            src={visitImage}
            alt={TEXT[lang].eyebrow}
          />
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
              {TEXT[lang].openMap}
            </a>

            <a
              href={dir}
              target="_blank"
              rel="noreferrer"
              className="map-btn outline"
            >
              {TEXT[lang].directions}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}