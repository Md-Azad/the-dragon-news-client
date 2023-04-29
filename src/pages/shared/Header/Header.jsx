import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";

import { AuthCon } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthCon);
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover="true" speed={100}>
          I can be a React component, multiple React components, or just some
          text..........I can be a React component, multiple React components,
          or just some text.
        </Marquee>
      </div>
      <div className="my-4">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="#features">
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <Nav.Link href="#deets">
                    <FaRegUserCircle
                      style={{ fontSize: "2rem" }}
                    ></FaRegUserCircle>
                  </Nav.Link>
                )}
                <Nav.Link eventKey={2} href="#memes">
                  {user ? (
                    <Button variant="secondary">LogOut</Button>
                  ) : (
                    <Button variant="secondary">Login</Button>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default Header;
