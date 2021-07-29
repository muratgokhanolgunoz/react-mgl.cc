import React, { Fragment } from 'react'
import Provider from '../context/provider/Provider'
import { Helmet } from 'react-helmet'
import Navi from './constants/Navi'
import Home from './sections/Home'
import Services from './sections/Services';
import About from './sections/About';
import { Container } from 'react-bootstrap';
import '../assets/dist/css/style.css'

import Gallery from './sections/gallery/Gallery'

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  AOS.init();
  return (
    <Provider>
      <Fragment>
        <Helmet>
          <title>Midas Global Logistic</title>
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
      </Fragment>
    </Provider>
  );
}
export default App;