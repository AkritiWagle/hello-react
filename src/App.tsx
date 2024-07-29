// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import CustomerProfiles from './CustomerProfiles';
import ThemeToggleButton from './ThemeToggleButton';
import { ThemeProvider } from './themeContext';
import withLogging from './withlogging';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link> | <Link to="/profiles">Customer Profiles</Link>
          </nav>
          <ThemeToggleButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profiles" element={<CustomerProfiles />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default withLogging(App);
