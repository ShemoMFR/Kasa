/* Librairies */ 
import React from "react";

/* css */
import "./Logement.css";

/* Component */ 
import Dropdown from "../../components/Dropdown/Dropdown";

class Logement extends React.Component {

      componentDidMount() {
            console.log(this.props.match.params.id);
      }

      render() {
            return (
                  <div>
                        <Dropdown equipement={'test'} />
                  </div>
            )
      }
}

export default Logement;



