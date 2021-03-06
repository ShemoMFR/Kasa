/* Librairies */ 
import React, { useRef } from "react";

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
import NotFound from "../NotFound/NotFound";

class Logement extends React.Component {

      constructor(props) {
            super(props);
            this.state = {
                  logement_id: db.filter(elem => elem.id === this.props.match.params.id),   
                  photos: [],
                  iterator : 0
            }
            this.image = React.createRef();
            this.click1 = React.createRef();
            this.click2 = React.createRef();
      }

      componentDidMount() {
            if (this.state.logement_id.length !== 0) {

                  this.setState({photos: [...this.state.logement_id[0].pictures]})
                  if (this.state.logement_id[0].pictures.length === 1) {
                        this.click1.current.style.display = 'none';
                        this.click2.current.style.display = 'none';
                  }
            }
      }

      handleClickChangePhotosPrev() {

            if (this.state.iterator === 0) {
                  this.setState({iterator: this.state.photos.length - 1});
                  this.image.current.src = `${this.state.photos[this.state.photos.length - 1]}`;
                  return;
            }

            this.image.current.src = `${this.state.photos[this.state.iterator - 1]}`;
            this.setState({iterator: this.state.iterator - 1})
      }

      handleClickChangePhotosNext() {

            if (this.state.iterator === this.state.photos.length - 1) {
                  this.setState({iterator: 0});
                  this.image.current.src = `${this.state.photos[0]}`;
                  return;
            }

            this.image.current.src = `${this.state.photos[this.state.iterator + 1]}`;
            this.setState({iterator: this.state.iterator + 1})
      }

      render() {
            return (
                  <div>
                  { this.state.logement_id.length !== 0 ? 
                        <div className="container1240px ">
                              <div style={{position: "relative", width: "100%"}}>
                                    <img className='imgLogement' src={`${this.state.photos[0]}`} ref={this.image} alt='principal logement'/>
                                    <img onClick={() => this.handleClickChangePhotosPrev()} src={chevron} ref={this.click1} alt='chevron' className='chevronL'/>
                                    <img onClick={() => this.handleClickChangePhotosNext()} src={chevron} ref={this.click2} alt='chevron' className='chevronR'/>
                                    <div className='compteur'>{this.state.iterator + 1}/{this.state.photos.length }</div>
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
                                                <img className='photo' src={`${this.state.logement_id[0].host.picture}`} alt='profil de lh??te'/>
                                          </div>
                                          <Stars stars={this.state.logement_id[0].rating} />
                                    </div>
                              </div>
                              <div className="containerDrop container1240px">
                                    <div className='dropdown1' >
                                          <Dropdown name={'description'} value={this.state.logement_id[0].description}/>
                                    </div>
                                    <div className='dropdown2' >
                                          <Dropdown name={'??quipements'} value={this.state.logement_id[0].equipments}/>
                                    </div>
                              </div>
                        </div>

                        :
                        <div>
                              <NotFound />
                        </div>
                  }
                  </div>
            )
      }
}

export default Logement;



