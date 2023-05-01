import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
import { AuthCon } from "../../../Providers/AuthProvider";

const Header = () => {
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
      <div className="my-4"></div>
    </Container>
  );
};

export default Header;
