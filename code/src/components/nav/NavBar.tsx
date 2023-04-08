import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './navbar.scss';

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          <div class="home">Home</div>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end
            className={({ isActive }) => isActive ? "active" : "pending"}>
            Home</NavLink>
          <NavLink to="/project"
            className={({ isActive }) => isActive ? "active" : "pending"}>
            Project</NavLink>
          <NavLink to="/experience"
            className={({ isActive }) => isActive ? "active" : "pending"}>
            Experience</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar;