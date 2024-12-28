import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage' 
import FullPage from './components/FullPage'; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:authorName" element={<FullPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
