import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>Lily Yang</h1>
        <ul>
          <Link className="li-elem" to="/">About Me</Link>
          <Link className="li-elem" to="/resume">Resume</Link>
          <Link className="li-elem" to="/portfolio">Portfolio</Link>
          <Link className="li-elem" to="/contact">Contact</Link>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
