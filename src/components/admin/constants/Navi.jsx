import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AdminContext from '../../../context/AdminContext'
import { Link } from 'react-router-dom'

const Navi = () => {
    return (
        <AdminContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <Navbar bg="light" expand="sm">
                            <Container>
                                <Navbar.Brand>
                                    <Link to="/sarici">
                                        <img src="https://mgl.cc/assets/img/logo.png" alt=""></img>
                                    </Link>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Link to="/sarici/blog" style={{ margin: "7px", textDecoration: "none", color: "gray" }}>Blog</Link>
                                        <Link to="/sarici/career"  style={{ margin: "7px", textDecoration: "none", color: "gray" }}>Career</Link>
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