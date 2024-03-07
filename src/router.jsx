import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from 'react';

const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import('./components/Layout.jsx')),
        children: [
            {
                path: "/",
                Component: lazy(() => import('./pages/home/HeroSection.jsx'))
            },
            {
                path: "/aboutme",
                Component: lazy(() => import('./pages/aboutme/AboutMe.jsx'))
            },
            {
                path: "/skills",
                Component: lazy(() => import('./pages/skills'))
            },
            {
                path: "/contact",
                Component: lazy(() => import('./pages/contact'))
            }
        ]
    },
   
  ])

  export default router