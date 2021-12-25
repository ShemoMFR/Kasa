/* Librairies */
import React from "react";

/* Components */
import Banniere from '../../components/Banniere/Banniere';
import Dropdown from '../../components/Dropdown/Dropdown';

/* CSS */
import '../../style.css';

class Apropos extends React.Component {

      state = {
            respect: `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`,
            fiabilite: `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`,
            service: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`,
            securite: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
      }

      render() {
            return (
                  <div className='container1240px'>
                        <Banniere />
                        <div style={{width: "90%", display: "flex", flexDirection: "column", alignItems: 'center', justifyContent: "center", margin: "10px auto"}}>
                              <Dropdown name={'Respect'} value={this.state.respect}/>
                              <Dropdown name={'Fiabilité'} value={this.state.fiabilite}/>
                              <Dropdown name={'Service'} value={this.state.service}/>
                              <Dropdown name={'Sécurité'} value={this.state.securite}/>
                        </div>
                  </div>
            )
      }

}

export default Apropos;