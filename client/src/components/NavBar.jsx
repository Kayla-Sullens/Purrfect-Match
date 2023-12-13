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
          <Link to="/CatAll">Available Cats</Link>
        </li>
          <li className="mx-1">
            <Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link>
          </li>
        </ul>
      );
    }

    // return (
    //   <ul className="flex-row">
    //     <li className="mx-1">
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li className="mx-1">
    //       <Link to="/signup">Signup</Link>
    //     </li>

    //     <li className="mx-1">
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // );
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
                <li><Link to="/">Home</Link></li>
              </ul>
              <div className="user_info">
              <Link to="/login">Login</Link>
                <span>|</span>
                <Link to="/signup">Signup</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};



export default NavBar;
