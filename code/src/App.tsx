import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './components/animation/Background';
import NavBar from './components/nav/NavBar';
import Home from './routes/Home';
import Experience from './routes/Experience';
import Project from './routes/Project';

export interface IAppProps { }

const App: React.FC<IAppProps> = (props: IAppProps) => {

  return (
    <BrowserRouter>
      <Background />
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
