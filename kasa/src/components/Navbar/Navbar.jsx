/* Librairies */ 
import React from "react";
import { Link } from "react-router-dom";

/* css */
import "./Navbar.css";

class Navbar extends React.Component {
      render() {
            return (
                  <nav>
                        <Link to ='/'>Accueil</Link>
                        <Link to ='/Apropos'>Apropos</Link>
                  </nav>
            )
      }
}

export default Navbar;