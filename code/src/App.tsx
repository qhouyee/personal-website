import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MobileContext } from './context/ViewContext';
import BackgroundAnimation from './components/animation/BackgroundAnimation';
import NavBar from './components/nav/NavBar';
import ErrorPage from './components/error/ErrorPage';
import Home from './routes/Home';
import Background from './routes/Background';
import Webgis from './routes/Webgis';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        index: true,
        element: <Home />,
      }, {
        path: "/background",
        element: <Background />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/webgis",
    element: <Webgis />,
  },
]);

const App: React.FC<{}> = () => {
  const [isMobile, setMobile] = useState<boolean>(window.innerWidth <= 768);
  const updateMedia = (): void => {
    setMobile(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>
      <BackgroundAnimation />
      <RouterProvider router={router} />
    </MobileContext.Provider>
  );
};

export default App;
