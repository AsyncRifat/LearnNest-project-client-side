import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// routes
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';

// toast
import { Toaster } from 'react-hot-toast';
import AuthProvider from './providers/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
