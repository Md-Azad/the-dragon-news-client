import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthCon } from "../../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthCon);
  const [status, setStatus] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const accept = form.accept.value;
    // console.log(name, photo, email, password, accept);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        // setStatus(createdUser);
        console.log(createdUser);
        form.reset("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="w-25 mx-auto">
      <h3>Register Your Account</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept Terms and Conditions"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br></br>
        <Form.Text className="text-muted">
          Already Have An Account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
