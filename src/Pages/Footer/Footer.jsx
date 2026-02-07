import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  const TEXT = {
    ES: {
      locationTitle: "Ubicación",
      locationText: "Península de Santa Elena, Ecuador",

      phoneTitle: "Teléfono",
      phoneText: "+593 4 XXX-XXXX",

      emailTitle: "Email",

      copyright: "© 2026 Museo 360. Todos los derechos reservados.",
    },

    EN: {
      locationTitle: "Location",
      locationText: "Santa Elena Peninsula, Ecuador",

      phoneTitle: "Phone",
      phoneText: "+593 4 XXX-XXXX",

      emailTitle: "Email",

      copyright: "© 2026 Museum 360. All rights reserved.",
    },
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <h4>{TEXT[lang].locationTitle}</h4>
          <p>{TEXT[lang].locationText}</p>
        </div>

        <div className="footer-item">
          <FaPhoneAlt className="footer-icon" />
          <h4>{TEXT[lang].phoneTitle}</h4>
          <p>{TEXT[lang].phoneText}</p>
        </div>

        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <h4>{TEXT[lang].emailTitle}</h4>
          <p>info@museorealalto360.ec</p>
        </div>

      </div>

      <div className="footer-bottom">
        {TEXT[lang].copyright}
      </div>
    </footer>
  );
}