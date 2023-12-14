
import React from "react"
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #53331a;
  color: #fff;
  padding: 1rem;

  
`;

const NavItem = styled.li`
  list-style: none;
  margin: 1em;
  
  padding: 0.25em 1em;


  a {
    color: ##e0bca0;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #e0bca0;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;





const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  {isMobileNavOpen ? 'Close' : 'Menu'}
  const showNavigation = () => {
    if (Auth.loggedIn()) {
      return (
        <Nav>
          <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? 'Close' : 'Menu'}
      </MobileNavToggle>
      <DesktopNav>
      <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="/cats">Available Cats</Link></NavItem>
            <NavItem><Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link></NavItem>
          </DesktopNav>
          <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
          <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="/cats">Available Cats</Link></NavItem>
            <NavItem><Link href="/" onClick={() => Auth.logout()}>
              Logout
            </Link></NavItem>
          </MobileNav>
        </Nav>
       
      );
    }

    return (
      <Nav>
         <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
         {isMobileNavOpen ? 'Close' : 'Menu'}
         </MobileNavToggle>
         <DesktopNav>
         <NavItem><Link to="/">Home</Link></NavItem>
           <NavItem><Link to="/login">Login</Link></NavItem>
          <NavItem><Link to="/signup">Signup</Link></NavItem>
       </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
      <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/login">Login</Link></NavItem>
          <NavItem><Link to="/signup">Signup</Link></NavItem>
       </MobileNav>
      </Nav>
    );
  };

  return (
    <Nav>
            <Logo><Link to="/">
              {" "}
              <img src="./src/assets/logo.png" alt="" />
            </Link></Logo>
                  
              {showNavigation()}
    </Nav>
  );
};

export default NavBar;

