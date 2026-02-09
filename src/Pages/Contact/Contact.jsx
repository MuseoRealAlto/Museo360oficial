import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

function Contact() {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mapa
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
    alert(TEXT[lang].alert);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const TEXT = {
    ES: {
      title: "CONTACTO",

      hoursTitle: "Horarios de Atención",
      hoursText: (
        <>
          Lunes - Viernes: 9:00am - 5:00pm<br />
          Sábados: 10:00am - 4:00pm<br />
          Domingos: Cerrado
        </>
      ),

      locationTitle: "Ubicación",
      locationText: (
        <>
          Complejo Cultural Real Alto<br />
          Península de Santa Elena<br />
          Ecuador
        </>
      ),

      nameLabel: "Nombre Completo",
      emailLabel: "Correo Electrónico",
      subjectLabel: "Asunto",
      messageLabel: "Mensaje",
      button: "Enviar Mensaje",

      alert: "¡Gracias por contactarnos! Te responderemos pronto."
    },

    EN: {
      title: "CONTACT",

      hoursTitle: "Opening Hours",
      hoursText: (
        <>
          Monday - Friday: 9:00am - 5:00pm<br />
          Saturdays: 10:00am - 4:00pm<br />
          Sundays: Closed
        </>
      ),

      locationTitle: "Location",
      locationText: (
        <>
          Real Alto Cultural Complex<br />
          Santa Elena Peninsula<br />
          Ecuador
        </>
      ),

      nameLabel: "Full Name",
      emailLabel: "Email Address",
      subjectLabel: "Subject",
      messageLabel: "Message",
      button: "Send Message",

      alert: "Thank you for contacting us! We will get back to you soon."
    }
  };

  return (
    <section className="contact-page">

      {/* TÍTULO */}
      <header className="contact-title">
        <h1>{TEXT[lang].title}</h1>
        <span className="title-line"></span>
      </header>

      {/* MAPA */}
      <div className="contact-map">
        <iframe
          title="Mapa Complejo Cultural Real Alto"
          src={embed}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* CARD */}
      <div className="contact-card">

        {/* INFO */}
        <div className="contact-info-grid">

          <div className="info-block">
            <h3>{TEXT[lang].hoursTitle}</h3>
            <p>{TEXT[lang].hoursText}</p>
          </div>

          <div className="info-block">
            <h3>{TEXT[lang].locationTitle}</h3>
            <p>{TEXT[lang].locationText}</p>
          </div>

        </div>

        {/* FORMULARIO */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">{TEXT[lang].nameLabel}</label>
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
            <label htmlFor="email">{TEXT[lang].emailLabel}</label>
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
            <label htmlFor="subject">{TEXT[lang].subjectLabel}</label>
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
            <label htmlFor="message">{TEXT[lang].messageLabel}</label>
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
            {TEXT[lang].button}
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;