import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Home';  // import your new root component

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing');

const root = createRoot(container);

root.render(
  <StrictMode>
    <Home />
  </StrictMode>
);