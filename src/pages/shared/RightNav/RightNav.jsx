import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <div>
        <h1>Login with</h1>
        <Button className="d-block mb-2" variant="outline-primary">
          <FaGoogle />
          <span className="ps-1">Google</span>
        </Button>
        <Button variant="outline-secondary">
          <FaGithub />
          <span className="ps-1">GitHub</span>
        </Button>
      </div>
      <div className="mt-3">
        <h4>Find Us On</h4>
        <ListGroup as="ul">
          <ListGroup.Item as="li">
            <FaFacebook />
            <span className="ps-1">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <FaTwitter />
            <span className="ps-1">Twitter</span>
          </ListGroup.Item>

          <ListGroup.Item as="li">
            <FaInstagram />
            <span className="ps-1">Instragram</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default RightNav;
