import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';       // Adjust file paths if necessary
import ServicesPage from './pages/ServicesPage';
import CareerLabPage from './pages/CareerLabPage';
import EmployersPage from './pages/EmployersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path displays the home page */}
        <Route path="/" element={<HomePage />} />

        {/* Explicitly map the services path to your ServicesPage component */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careerLab" element={<CareerLabPage/>} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;