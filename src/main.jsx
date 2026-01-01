import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router"; // BrowserRouter এর প্রয়োজন নেই এখানে
import router from './Router/Routes';
import AuthProvider from './Context/AuthProvider';
import { Toaster } from 'react-hot-toast'; // ১. ইম্পোর্ট করুন

const root = document.getElementById("root");

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      {/* ২. এখানে টোস্টার বসান */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)