// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CreateCustomerProfile from './CreateCustomerProfile';
import EditCustomerProfile from './EditCustomerProfile';
import CustomerList from './CustomerList';
import Counter from './Counter';
import ThemeToggleButton from './ThemeToggleButton';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profiles">Customer Profiles</Link>
      </nav>
      <ThemeToggleButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/profiles" element={<CustomerList />} />

        <Route path="/CustomerProfile/new" element={<CreateCustomerProfile />} />
        <Route path="/CustomerProfile/:id" element={<EditCustomerProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
