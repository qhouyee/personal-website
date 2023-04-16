import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './navbar.scss';
import { ReactComponent as HomeLinkIcon } from '../../assets/svg/homenav.svg';

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <NavLink to="/" end>
          <HomeLinkIcon className="home" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end
            className={({ isActive }) => isActive ? "active" : "pending"}>
            <span>Home</span></NavLink>
          <NavLink to="/background"
            className={({ isActive }) => isActive ? "active" : "pending"}>
            Background</NavLink>
          <NavLink to="/project"
            className={({ isActive }) => isActive ? "active" : "pending"}>
            <span>Project</span></NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar;