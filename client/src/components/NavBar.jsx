import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    }

    return (
      <div className="user_info">
        <a href="/login">Sign In</a>
        <span>|</span>
        <a href="/signup">Sign Up</a>
      </div>
    );
  };
  return (
    <header className="main_header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/"> <img src="./src/assets/logo.png" alt="" /></Link>
          </div>
          <div className="col-md-8">
            <div className="head_nav">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Cat All</a></li>
                <li><a href="">Cat One</a></li>
              </ul>
              <div className="user_info">
                <a href="/login">Sign In</a>
                <span>|</span>
                <a href="/signup">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
