import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// routes
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';

// toast
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </StrictMode>
);
