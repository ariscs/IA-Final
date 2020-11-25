import React from "react";
import { Link } from 'react-router-dom';

import like from '../images/like.png'

const NavBar = () => (
  <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div className="navbar-brand"></div>
    <div className="navbar-menu">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
        <img src={like} alt="heart" className="image is-32x32"/>
          <p className="navbar-item"><strong>Dapp</strong></p>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Inicio</Link>
        <Link className="navbar-item" to="/dGeneral">Diagnóstico general</Link>
        <Link className="navbar-item" to="/dEspecifico">Diagnóstico específico</Link>
      </div>
      <div className="navbar-end">
        <div class="navbar-item buttons">
          <button class="button is-danger is-small">Cerrar sesión</button>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
