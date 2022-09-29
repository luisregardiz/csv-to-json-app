import React from "react";
import { Container, Navbar as NavWrapper } from "react-bootstrap";
import "./Navbar.css";

const Navbar = () => {
    return (
        <NavWrapper bg="dark" variant="dark">
            <Container>
                <NavWrapper.Brand href="#home" className="brand-title">
                    File Explorer
                </NavWrapper.Brand>
            </Container>
        </NavWrapper>
    );
};

export default Navbar;
