import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";
import { HashRouter } from "react-router-dom";

import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Footer from "../components/templates/Footer";
import Routers from "./Routers";

export default props => (
  <HashRouter>
    <div className="app">
      <Logo />
      <Nav />
      <Routers />
      <Footer />
    </div>
  </HashRouter>
);
