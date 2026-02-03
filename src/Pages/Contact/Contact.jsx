import React, { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🔑 MISMO MAPA QUE VisitUs
  const q = encodeURIComponent("Complejo Cultural Real Alto");
  const embed = `https://www.google.com/maps?q=${q}&output=embed`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section className="contact-page">

      {/* TÍTULO */}
      <header className="contact-title">
        <h1>CONTACTO</h1>
        <span className="title-line"></span>
      </header>

      {/* MAPA (más bajo, NO gigante) */}
      <div className="contact-map">
        <iframe
          title="Mapa Complejo Cultural Real Alto"
          src={embed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* CARD FLOTANTE */}
      <div className="contact-card">

        {/* INFO SUPERIOR */}
        <div className="contact-info-grid">

          <div className="info-block">
            <h3>Horarios de Atención</h3>
            <p>
              Lunes - Viernes: 9:00am - 5:00pm<br />
              Sábados: 10:00am - 4:00pm<br />
              Domingos: Cerrado
            </p>
          </div>

          <div className="info-block">
            <h3>Ubicación</h3>
            <p>
              Complejo Cultural Real Alto<br />
              Península de Santa Elena<br />
              Ecuador
            </p>
          </div>

        </div>

        {/* 🔴 FORMULARIO ORIGINAL (SIN QUITAR NADA) */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Enviar Mensaje
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
