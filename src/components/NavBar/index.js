import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default function Navie() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">BCUMag</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Bloop</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
