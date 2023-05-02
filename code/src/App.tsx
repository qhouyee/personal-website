import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BackgroundAnimation from './components/animation/BackgroundAnimation';
import NavBar from './components/nav/NavBar';
import Home from './routes/Home';
import Background from './routes/Background';
import Project from './routes/Project';

export interface IAppProps { }

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
      }, {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <>
      <BackgroundAnimation />
      <RouterProvider router={router} />
    </>
  );
}

export default App
