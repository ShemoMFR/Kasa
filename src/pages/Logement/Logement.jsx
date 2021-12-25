/* Librairies */ 
import React from "react";

/* Database */ 
import db from '../../db/db';

/* css */
import '../../style.css';
import "./Logement.css";

/* ICONS */
import chevron from '../../images/chevron-left.svg';

/* Component */ 
import Dropdown from "../../components/Dropdown/Dropdown";
import Tags from "../../components/Tags/Tags";
import Stars from "../../components/Stars/Stars";

class Logement extends React.Component {

      state = {
            logement_id: db.filter(elem => elem.id === this.props.match.params.id),
      }

      render() {
            return (
                  <div className="container1240px ">
                        <div style={{position: "relative"}}>
                              <img className='imgLogement' src={`${this.state.logement_id[0].cover}`} alt='principal logement'/>
                              <img src={chevron} alt='chevron' className='chevronL'/>
                              <img src={chevron} alt='chevron' className='chevronR'/>
                        </div>
                        <div className='headerLogement'>
                              <div className='headerLeft'>
                                    <h1 className='logementTitle'>{this.state.logement_id[0].title}</h1>
                                    <h2 className='logementSubtitle'>{this.state.logement_id[0].location}</h2>
                                    <Tags tags={this.state.logement_id[0].tags} />
                              </div>
                              <div className='headerRight'>
                                    <div className='host'>
                                          <div className="name">{`${this.state.logement_id[0].host.name}`}</div>
                                          <img className='photo' src={`${this.state.logement_id[0].host.picture}`} alt='profil de lhôte'/>
                                    </div>
                                    <Stars stars={this.state.logement_id[0].rating} />
                              </div>
                        </div>
                        <div className="containerDrop container1240px">
                              <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start'}}>
                                    <Dropdown name={'description'} value={this.state.logement_id[0].description}/>
                              </div>
                              <div style={{width: '50%', display: 'flex', justifyContent: 'flex-end'}}>
                                    <Dropdown name={'Équipements'} value={this.state.logement_id[0].equipments}/>
                              </div>
                        </div>
                  </div>
            )
      }
}

export default Logement;



