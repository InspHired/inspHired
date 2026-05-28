import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';       // Adjust file paths if necessary
import ServicesPage from './pages/ServicesPage';
import CareerLabPage from './pages/CareerLabPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path displays the home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Explicitly map the services path to your ServicesPage component */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careerLab" element={<CareerLabPage/>} />
      </Routes>
    </Router>
  );
}

export default App;