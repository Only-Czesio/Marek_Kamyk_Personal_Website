import "../App.scss";
import logo from "../public/LOGO.jpg";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <>
      <div className="navi d-flex sticky-top flex-row justify-content-center shadow-lg">
        <div className="logo m-2">
          <img
            src={logo}
            width="100"
            height="50"
            alt="Marek Kamyk personal logo"
          />
        </div>
        <nav className="m-2">
          <ul className="d-flex flex-row list-unstyled">
            <li key="1" className="shrink_me btn btn-color mx-5 shadow">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li key="2" className="shrink_me btn btn-color shadow mx-5">
              <Link to="/Portfolio" className="nav-link">Portfolio</Link>
            </li>
            <li key="3" className="shrink_me btn btn-color shadow mx-5">
              <Link to="/Blog" className="nav-link">Blog</Link>
            </li>
            <li key="4" className="shrink_me btn btn-color shadow mx-5">
              <Link to="/Contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
