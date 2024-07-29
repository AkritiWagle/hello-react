// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CustomerProfiles from './CustomerProfiles';
import CreateCustomerProfile from './CreateCustomerProfile';
import EditCustomerProfile from './EditCustomerProfile';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profiles">Customer Profiles</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profiles" element={<CustomerProfiles />} />
        <Route path="/CustomerProfile/new" element={<CreateCustomerProfile />} />
        <Route path="/CustomerProfile/:id" element={<EditCustomerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
