// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './router'; // Make sure this path points to your router file

// Structural stylesheet requirements

import './index.css'; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 
      CRITICAL FIX: RouterProvider must wrap the runtime engine here. 
      Do NOT render <App /> manually at this layer.
    */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
