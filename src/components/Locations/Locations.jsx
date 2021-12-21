/* Librairies */ 
import React from 'react';

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
                                          <div className="itemGrid" key={location.id}>
                                              {location.title}
                                          </div>
                                    )
                             })}
                       </div>
                  </div>
            )
      }
}

export default Locations;