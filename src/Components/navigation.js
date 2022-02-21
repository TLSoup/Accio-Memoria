import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faMoon } from "@fortawesome/free-solid-svg-icons";

import './navigation.css';

/*  TO-DO: 
        * Update Avatar and Name with signed in user
        * If no signed in user display "Sign In"
        * Create Dark Mode
        * Toogle Dark Mode on/off with moon icon
*/

export const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Accio Memoria</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/activity">Activity</Nav.Link>
                </Nav>
                <Nav className="pe-5">
                    <Navbar.Text><FontAwesomeIcon icon={faMoon} className="darkMode-icon" /></Navbar.Text>
                </Nav>
                <Nav className="d-flex">
                    <Navbar.Text href="/"><FontAwesomeIcon icon={faCircleUser} /></Navbar.Text>
                    <NavDropdown title="Tracy" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action4">Sign Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
    );
}