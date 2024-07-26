import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CustomerProfiles from './CustomerProfiles';
import CustomerProfile from './CustomerProfile';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer-profiles" element={<CustomerProfiles />} />
        <Route path="/customer-profile/:id" element={<CustomerProfile />} />
        <Route path="/customer-profile/new" element={<CustomerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
