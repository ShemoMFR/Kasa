/* librairies */
import React from "react";
import { Link } from "react-router-dom";

/* css */
import "./NotFound.css";
import '././../../style.css';

class NotFound extends React.Component {

      render() {
            return (
                  <div className='containerMain'>
                        <h1 className='title'>404</h1>
                        <h2 className='txt'>Page not found</h2>
                        <Link className="link" to ='/'>Retourner sur la page d'accueil</Link>
                  </div>
            )
      }
}

export default NotFound;