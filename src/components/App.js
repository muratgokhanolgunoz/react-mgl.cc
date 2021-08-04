import React, { Fragment } from "react"
import Provider from "../context/provider/Provider"

import Navi from "./constants/Navi"
import Home from "./sections/Home"
import Services from "./sections/Services"
import About from "./sections/About"
import Gallery from "./sections/Gallery"
import Schedule from "./sections/Schedule"

import { Helmet } from "react-helmet"
import { Container } from "react-bootstrap"
import AOS from "aos"

import "../assets/dist/css/template.css"
import "../assets/dist/css/style.css"
import "aos/dist/aos.css"
import Blog from "./sections/Blog"

const App = () => {
  AOS.init();
  return (
    <Provider>
      <Fragment>
        <Helmet>
          <title>Midas Global Logistik</title>
        </Helmet>
        <Navi />
        <Home />
        <Container className="main">
          <Services />
        </Container>
        <About />
        <Container className="main">
          <Gallery />
        </Container>
        <Schedule />
        <Container className="main">
          <Blog />
        </Container>
      </Fragment>
    </Provider>
  );
};
export default App
