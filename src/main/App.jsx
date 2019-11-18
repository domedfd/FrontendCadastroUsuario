import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import React from "react";

import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Main from "../components/templates/Main";
import Footer from "../components/templates/Footer";

export default props => (
  <div className="app">
    <Logo />
    <Nav />
    <Main
      icon="home"
      title="Inico"
      subtitle="Segundo Projecto de capitulo de react"
    >
      <div className="display-4">Bem vindo</div>
      <hr />
      <p className="mb-0">
        sistema para ejemplificar la construcion de un cadastro hecho en react
        framework
      </p>
    </Main>
    <Footer />
  </div>
);
