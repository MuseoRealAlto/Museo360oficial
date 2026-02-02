import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-item">
          <FaMapMarkerAlt className="footer-icon" />
          <h4>Ubicación</h4>
          <p>Península de Santa Elena, Ecuador</p>
        </div>

        <div className="footer-item">
          <FaPhoneAlt className="footer-icon" />
          <h4>Teléfono</h4>
          <p>+593 4 XXX-XXXX</p>
        </div>

        <div className="footer-item">
          <FaEnvelope className="footer-icon" />
          <h4>Email</h4>
          <p>info@museorealalto360.ec</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Museo 360. Todos los derechos reservados.
      </div>
    </footer>
  );
}
