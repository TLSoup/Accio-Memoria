import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Accio Memoria</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#create">Create</Nav.Link>
                    <Nav.Link href="#features">Activity</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}