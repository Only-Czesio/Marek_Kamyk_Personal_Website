import './App.scss';

export default function NavigationBar() {
  return (
    <>
      <div className="navi bg-info d-flex flex-row justify-content-between shadow-lg">
        <div className="logo m-4">MareKamyk</div>
        <nav className="m-2">
          <li key="1" className="btn btn-primary mx-2 shadow"><a href="#" className="btn btn-primary">About me</a></li>
          <li key="2" className="btn btn-primary shadow "><a href="#" className="btn btn-primary">Portfolio</a></li>
          <li key="3" className="btn btn-primary shadow mx-2"><a href="#" className="btn btn-primary">Personal Blog</a></li>
          <li key="4" className="btn btn-primary shadow"><a href="#" className="btn btn-danger">Contact me</a></li>
        </nav>
      </div>
    </>
  );
}
