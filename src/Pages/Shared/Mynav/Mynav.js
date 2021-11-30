import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import "./Mynav.css";

const Mynav = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <h2 className="text-success">Advancer Travels</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Link className="navLink" to="/">
                  Home
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/collection">
                  Service Collections
                </Link>{" "}
              </Nav.Link>
              <Nav.Link>
                {!user.email ? (
                  <Link className="navLink" to="/login">
                    Login
                  </Link>
                ) : (
                  <button onClick={logOut}>Logout</button>
                )}
                {user.email && (
                  <Link to="/myOrder">
                    <button className="mx-2">My Order</button>
                  </Link>
                )}
                {user.email && (
                  <Link to="/manageOrder">
                    <button className="mx-2">Manage Order</button>
                  </Link>
                )}
              </Nav.Link>
              <Nav.Link>
                <Link className="navLink" to="/addService">
                  Add Service
                </Link>{" "}
              </Nav.Link>
              {user.email && (
                <span className="mt-2 text-success">
                  Log As {user.displayName}
                </span>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Mynav;
