import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { simpleVariants, iconVariants, lineVariants } from '../../variant/variants';
import './navbar.scss';
import { ReactComponent as HomeLinkIcon } from '../../svg/homenav.svg';

const NavBar: React.FC = () => {
  return (
    <>
      <motion.div initial='hidden' animate='visible' variants={lineVariants(2)} viewport={{ once: true }} className='contact'>
        <a href="mailto:quekhouyee@gmail.com">email</a>
      </motion.div>
      <motion.nav initial='hidden' animate='visible' variants={simpleVariants(true, 0.3)} viewport={{ once: true }}>
        <NavLink to="/" end>
          <motion.div variants={iconVariants}>
            <HomeLinkIcon style={{ left: '2vw' }} className="home" />
          </motion.div>
        </NavLink>
        <div className="nav-links">
          <motion.div variants={iconVariants}>
            <NavLink to="/" end
              className={({ isActive }) => isActive ? "active" : "pending"}>
              <span>Home</span></NavLink>
          </motion.div>
          <motion.div variants={iconVariants}>
            <NavLink to="/background"
              className={({ isActive }) => isActive ? "active" : "pending"}>
              Background</NavLink>
          </motion.div>
        </div>
      </motion.nav>
      <Outlet />
    </>
  )
}

export default NavBar;