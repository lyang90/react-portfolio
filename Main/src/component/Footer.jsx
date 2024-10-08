import { Outlet, Link } from "react-router-dom";

const Footer = () => {

  return (
    <>
      <footer>
        <ul>
          <Link className="li-elem" to="/">About Me</Link>
          <Link className="li-elem" to="/resume">Resume</Link>
          <Link className="li-elem" to="/portfolio">Portfolio</Link>
          <Link className="li-elem" to="/contact">Contact</Link>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
