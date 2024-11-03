import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import { router } from "./router";
import { GoogleOAuthProvider } from '@react-oauth/google';


const clientID = "870280095373-1fvhpnrp8le357jdbcdnrqosnm40q9oi.apps.googleusercontent.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>,
)
