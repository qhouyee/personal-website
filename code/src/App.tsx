import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackgroundAnimation from './components/animation/BackgroundAnimation';
import NavBar from './components/nav/NavBar';
import Home from './routes/Home';
import Background from './routes/Background';
import Project from './routes/Project';

export interface IAppProps { }

const App: React.FC<IAppProps> = (props: IAppProps) => {

  return (
    <BrowserRouter>
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/background" element={<Background />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
