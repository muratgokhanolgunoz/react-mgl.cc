import React, { Fragment } from "react"
import CountryFlag from "react-country-flag"
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap"
import logo from "../../assets/images/logo.png"
import "../../assets/dist/css/style.css"

const Navi = () => {
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image
                            className="navi-logo"
                            src={logo}
                            alt="Midas Global Logistic"
                            fluid
                        ></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto navi">
                            <Nav.Link href="#services">Servislerimiz</Nav.Link>
                            <Nav.Link className="navi-link" href="#about">
                                Hakkımızda
                            </Nav.Link>
                            <Nav.Link href="#gallery">Galeri</Nav.Link>
                            <Nav.Link href="#schedule">Gemi Programı</Nav.Link>
                            <Nav.Link href="#">e-Navlun</Nav.Link>
                            <Nav.Link href="#">e-Takip</Nav.Link>
                            <Nav.Link href="#contact">İletişim</Nav.Link>
                        </Nav>
                        <Nav className="navi">
                            <NavDropdown title="TR">
                                <NavDropdown.Item href="#action/3.1"><CountryFlag countryCode="TR" svg style={{ width: '1.5em', height: '1.5em' }} />{' '}TR</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><CountryFlag countryCode="US" svg style={{ width: '1.5em', height: '1.5em' }} />{' '}EN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><CountryFlag countryCode="ZH" svg style={{ width: '1.5em', height: '1.5em' }} />{' '}ZH</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><CountryFlag countryCode="FA" svg style={{ width: '1.5em', height: '1.5em' }} />{' '}FA</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><CountryFlag countryCode="AR" svg style={{ width: '1.5em', height: '1.5em' }} />{' '}AR</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
};
export default Navi
