import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h3>terms and condition</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
        impedit qui asperiores corrupti numquam aliquid ut quasi provident.
        Nesciunt minima deserunt sed nam! Ducimus commodi fugiat, cum magni
        necessitatibus voluptatibus?
      </p>
      <p>
        back to register <Link to="/register">Register</Link>
      </p>
    </Container>
  );
};

export default Terms;
