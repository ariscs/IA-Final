import React, { useState } from "react";
import { Link } from 'react-router-dom';

import like from '../images/like.png'

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  return(
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={like} alt="heart" className="image is-32x32"/>
          <p className="navbar-item"><strong>Dapp</strong></p>
        </Link>

        <div role="button" className={`navbar-burger burger ${collapsed ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="mainMenu" onClick={handleToggle}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className={`navbar-menu ${collapsed ? 'is-active' : ''}`} id="mainMenu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Inicio</Link>
          <Link className="navbar-item" to="/dGeneral">Diagnóstico general</Link>
          <Link className="navbar-item" to="/dEspecifico">Diagnóstico específico</Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-danger is-small">Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
