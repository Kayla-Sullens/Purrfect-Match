import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-1">
          <Link to="/signup">Signup</Link>
        </li>

        <li className="mx-1">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  };

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">Purrfect Match</Link>
      </h1>
      <nav>{showNavigation()}</nav>
    </header>
  );
};

export default NavBar;
