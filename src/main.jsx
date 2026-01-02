import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"; 
import router from './Router/Routes';
import AuthProvider from './Context/AuthProvider';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';

axios.defaults.withCredentials = true;

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)