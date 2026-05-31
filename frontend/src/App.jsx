import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CareerLabPage from './pages/CareerLabPage';
import EmployersPage from './pages/EmployersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ClientCenterPage from './pages/ClientCenterPage';
import WorxPage from './pages/WorxPage';
import VerifyMePage from './pages/VerifyMePage';
import ConnectPage from './pages/ConnectPage';
import JobotPage from './pages/JobotPage';

function App() {
  return (
    <Router>
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/careerLab" element={<CareerLabPage/>} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/client" element={<ClientCenterPage />} />
        <Route path='/jobot' element={<JobotPage/>} />
        <Route path='/worx' element={<WorxPage/>} />
        <Route path='/connect' element={<ConnectPage/>} />
        <Route path='/verify-me' element={<VerifyMePage/>} />
        

      </Routes>
    </Router>
  );
}

export default App;