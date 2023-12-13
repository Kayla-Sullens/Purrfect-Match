import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <ul>
            <li className="mx-2">
              <Link to="/Cats">Available Cats</Link>
            </li>
          </ul>
          <div className="user_info">
            <Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </div>
        </>
      );
    }

    return (
      <div className="user_info">
        <Link to="/login">Login</Link>
        <span>|</span>
        <Link to="/signup">Signup</Link>
      </div>
    );
  };

  return (
    <header className="main_header">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              {" "}
              <img src="./src/assets/logo.png" alt="" />
            </Link>
          </div>
          <div className="col-md-8">
            <div className="head_nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
              {showNavigation()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
