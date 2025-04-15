import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MenuPage from './MenuPage'; // Create this component
import CustomizePage from './CustomizePage'; // Create this component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/customize" element={<CustomizePage />} />
    </Routes>
  </Router>
);


import React from 'react';
import './kamaii.css'; // Import your CSS

function MenuPage() {
  return (
    <div>
      {/* Paste your existing HTML content here, wrapped in a div */}
      <video autoplay muted loop id="background-video">
        <source src="bkgn.mp4.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <header>
        {/* ... your header content ... */}
      </header>

      <main>
        <section className="menu">
          {/* ... your coffee menu content ... */}
        </section>
      </main>

      <footer>
        {/* ... your footer content ... */}
      </footer>
    </div>
  );
}
import React from 'react';

function CustomizePage() {
  return (
    <div>
      <h1>Customize Your Coffee</h1>
      {/* Add your customization form or components here */}
    </div>
  );
}
export { MenuPage, CustomizePage };