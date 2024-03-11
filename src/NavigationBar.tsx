import './App.scss';
import logo from './public/LOGO.jpg'

export default function NavigationBar() {
  return (
    <>
      <div className="navi d-flex sticky-top flex-row justify-content-center shadow-lg">
        <div className="logo m-2"><img src={logo} width="100" height="50" alt="Marek Kamyk personal logo"></img></div>
        <nav className="m-2">
          <li key="1" className="shrink_me btn btn-color mx-5 shadow"><a href="#">About</a></li>
          <li key="2" className="shrink_me btn btn-color shadow "><a href="#">Portfolio</a></li>
          <li key="3" className="shrink_me btn btn-color shadow mx-5"><a href="#">Blog</a></li>
          <li key="4" className="shrink_me btn btn-color shadow"><a href="#">Contact</a></li>
        </nav>
      </div>
    </>
  );
}
