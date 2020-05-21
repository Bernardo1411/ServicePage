import React from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Navgator.scss'

export default props => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <LinkContainer to='/'>
                <Navbar.Brand>My Store</Navbar.Brand>
                        </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="d-flex justify-content-end">
                        <LinkContainer to='/form'>
                            <Nav.Link>Sign up</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}