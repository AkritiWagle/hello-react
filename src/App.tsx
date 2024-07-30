// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CustomerProfiles from './CustomerProfiles';
import CreateCustomerProfile from './CreateCustomerProfile';
import EditCustomerProfile from './EditCustomerProfile';
import { Customer } from './types';

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
        <Route path="/CustomerProfile/new" element={<CreateCustomerProfile visible={false} customer={null} onClose={function (): void {
          throw new Error('Function not implemented.');
        } } onSave={function (customer: Customer): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="/CustomerProfile/:id" element={<EditCustomerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
