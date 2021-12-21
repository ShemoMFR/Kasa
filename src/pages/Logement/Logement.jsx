/* Librairies */ 
import React from "react";

/* css */
import "./Logement.css";

class Logement extends React.Component {

      componentDidMount() {
            console.log(this.props.match.params.id);
      }

      render() {
            return (
                  <div>
                        TEST LOGEMENT
                  </div>
            )
      }
}

export default Logement;