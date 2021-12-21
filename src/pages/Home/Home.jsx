/* Librairies */ 
import React from 'react';

/* Components */ 
import Locations from '../../components/Locations/Locations';
import Banniere from '../../components/Banniere/Banniere';

/* CSS */
import ".././../style.css";
import "./Home.css";

class Home extends React.Component {
      render() {
            return (
                  <div className="container1240px containerHome">
                        <Banniere />
                        <Locations />
                  </div>
            )
      }
}

export default Home;
