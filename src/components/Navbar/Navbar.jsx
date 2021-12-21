/* Librairies */ 
import React from "react";
import { Link } from "react-router-dom";

/* logo */
import Logo from "../../images/Logos/logo.png";

/* css */
import "../../style.css";
import "./Navbar.css";

class Navbar extends React.Component {
      render() {
            return (
                  <div className="containerNavbar">
                        <img src={Logo} alt="logo Kasa" className="logo" />
                        <nav className="navbar">
                              <Link className="txtNavbar" to ='/'>Accueil</Link>
                              <Link className="txtNavbar" to ='/Apropos'>Apropos</Link>
                        </nav>
                  </div>
            )
      }
}

export default Navbar;