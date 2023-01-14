import React from "react";
import Category from "./category";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Row } from "react-bootstrap";
import HelloUser from "./HelloUser";

const NavBar = () => {
  return (
    <Row className="font">
      <Navbar
        style={{
          border: "4px solid red",
        }}
        className="fixed-top"
        bg="light"
        expand="lg"
        variant="dark"
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className="logo">
              <img className="avatar" alt="..." src={`lll.jpg`}></img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            style={{ backgroundColor: "red" }}
            aria-controls="navbarScroll"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Category />
            <HelloUser />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
