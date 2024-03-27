import "../App.scss";
import logo from "../public/LOGO.jpg";

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
          ></img>
        </div>
        <nav className="m-2">
          <a href="/Marek_Kamyk_Personal_Website">
            <li key="1" className="shrink_me btn btn-color mx-5 shadow">
              Home
            </li>
          </a>
          <a href="/Marek_Kamyk_Personal_Website/Portfolio">
            <li key="2" className="shrink_me btn btn-color shadow ">
              Portfolio
            </li>
          </a>
          <a href="/Marek_Kamyk_Personal_Website/Blog">
            <li key="3" className="shrink_me btn btn-color shadow mx-5">
              Blog
            </li>
          </a>
          <a href="/Marek_Kamyk_Personal_Website/Contact">
            <li key="4" className="shrink_me btn btn-color shadow">
              Contact
            </li>
          </a>
        </nav>
      </div>
    </>
  );
}
