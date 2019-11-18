import "./Nav.css";
import React from "react";

export default props => (
  <aside className="menu-area">
    <nave className="menu">
      <a href="#/">
        {/* Refatorar en casa! naveItem */}
        <i className="fa fa-home"></i> Inicio
      </a>
      <a href="#/users">
        <i className="fa fa-users"></i> Usuarios
      </a>
    </nave>
  </aside>
);
