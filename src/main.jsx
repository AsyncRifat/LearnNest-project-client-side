import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// slider
import 'swiper/css';
import 'swiper/css/autoplay';

// routes
import { RouterProvider } from 'react-router';
import { router } from './Routes/Routes';

// toast
import { Toaster } from 'react-hot-toast';

// auth provider
import AuthProvider from './providers/AuthProvider';

// aos
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init();

// tanstack query setup
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
