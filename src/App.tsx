import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import CustomerProfiles from './CustomerProfiles';
import Counter from './Counter';
import { ThemeProvider } from './themeContext';
import ThemeToggleButton from './ThemeToggleButton';
import withLogging from './withlogging';

interface RouteProps {
  path: string;
  element: React.ReactElement;
}

const Home: React.FC = () => <h1>Home Page</h1>;

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customer-profiles">Customer Profiles</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <ThemeToggleButton />
      <Outlet />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="customer-profiles" element={<CustomerProfiles />} />
            <Route path="counter" element={<Counter />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default withLogging(App);