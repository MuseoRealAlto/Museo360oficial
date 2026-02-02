// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import logoIcon from '../../assets/museo-icono.png';


// function Header() {
//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Logo y nombre del museo */}
//         <div className="logo-section">
//           <div className="logo-circle">
//             <img src={logoIcon} alt="Museo" className="logo-icon" />
//           </div>
//           <h1 className="museum-name">Complejo Cultural Real Alto</h1>
//         </div>

//         {/* Navegación principal */}
//         <nav className="main-nav">
//           <Link to="/" className="nav-link">Inicio</Link>
//           <Link to="/museum360" className="nav-link">Museo 360</Link>
//           <Link to="/blog" className="nav-link">Blog</Link>
//           <Link to="/contact" className="nav-link">Contacto</Link>
//         </nav>

//         {/* Sección adicional */}
//         <div className="header-actions">
//           <Link to="/visitus" className="visit-link">¡Visítanos!</Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoIcon from '../../assets/museo-icono.png';

function Header() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState('ES');

  return (
    <nav className="header">
      <div className="header-container">

        {/* IZQUIERDA */}
        <Link to="/" className="header-brand">
          <img src={logoIcon} alt="Museo" className="brand-logo" />
          <span className="brand-name">Complejo Cultural Real Alto</span>
        </Link>

        {/* CENTRO */}
        <div className="header-nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/museum360" className="nav-link">Museo 360</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </div>

        {/* DERECHA – IDIOMA */}
        <div className="lang-selector">

<button
  className="lang-button"
  onClick={() => setOpen(!open)}
>
  {lang === 'ES' ? <FlagES /> : <FlagUS />}
  {lang === 'ES' ? 'Español' : 'English'}
</button>

          

{open && (
  <div className="lang-dropdown">
    <button onClick={() => { setLang('ES'); setOpen(false); }}>
      <FlagES />
      Español
    </button>
    <button onClick={() => { setLang('EN'); setOpen(false); }}>
      <FlagUS />
      English
    </button>
  </div>
)}

        </div>

      </div>
    </nav>
  );
}

const FlagES = () => (
  <svg
    className="flag-icon"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path fill="#c41e3a" d="M0 0h512v512H0z" />
    <path fill="#ffc400" d="M0 128h512v256H0z" />
  </svg>
);

const FlagUS = () => (
  <svg
    className="flag-icon"
    viewBox="0 0 512 512"
    aria-hidden="true"
  >
    <path fill="#b22234" d="M0 0h512v512H0z" />
    <path
      d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
      stroke="#fff"
      strokeWidth="39"
    />
    <path fill="#3c3b6e" d="M0 0h256v278H0z" />
  </svg>
);


export default Header;
