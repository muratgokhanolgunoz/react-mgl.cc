import React from 'react'
import { Container, Nav, Navbar, Image } from 'react-bootstrap'
import AdminContext from '../../../context/AdminContext'

const Navi = () => {
    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <Navbar bg="light" expand="sm">
                            <Container>
                                <Navbar.Brand href="/sarici">
                                    <Image className="navi-logo" src={context.state.baseUrl + "uploads/logo.png"} alt="Midas Global Logistic" fluid ></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="/sarici/blog">Blog</Nav.Link>
                                        <Nav.Link href="/sarici/career">Career</Nav.Link>
                                        <Nav.Link href="/">Frontend</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                )
            }}
        </AdminContext.Consumer>
    )
}
export default Navi