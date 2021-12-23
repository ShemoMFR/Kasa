/* Librairies */ 
import React from 'react';
import { Link } from "react-router-dom";

/* database */ 
import db from "../../db/db.json"

/* CSS */
import "../../style.css";
import "./Locations.css";

class Locations extends React.Component {

      render() {

            return (
                  <div className="container1240px bg">
                       <div className="containerGrid">
                             {db.map((location) => {
                                    return (
                                          <Link to={`logement/${location.id}`} className="itemGrid" key={location.id}>
                                              <img className='imgGrid' src={`${location.cover}`} alt='illustration de la location'/>
                                              <div className="txtGrid">{location.title}</div>
                                          </Link>
                                    )
                             })}
                       </div>
                  </div>
            )
      }
}

export default Locations;