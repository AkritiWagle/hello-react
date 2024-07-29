// src/ThemeToggleButton.tsx
import React from 'react';
import { Button } from 'antd';
import { useTheme } from './themeContext';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </Button>
  );
};

export default ThemeToggleButton;
