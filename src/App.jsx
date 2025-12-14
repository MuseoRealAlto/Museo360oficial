import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Importación de componentes
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Museum360 from './Pages/Museum360/Museum360';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import VisitUs from './Pages/VisitUs/VisitUs';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/museum360" element={<Museum360 />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/visitus" element={<VisitUs />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

import PanoramaViewer from './PanoramaViewer.jsx';

function App() {
  return <PanoramaViewer />;
}



export default App;
