/* Librairies */
import React from "react";
import {Switch, Route} from "react-router-dom";

/* css */ 
import './App.css';

/* Page */ 
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import Apropos from './pages/Apropos/Apropos';
import NotFound from './pages/NotFound/NotFound';

/* Components */ 
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/logement/:id" exact component={Logement} />
                    <Route path="/logement/*" exact component={NotFound} />
                    <Route path="/apropos" exact component={Apropos} />
                    <Route path="/*" component={NotFound} />
                </Switch> 
            </main>
            <Footer />
        </div>
    );
  }
}

export default App;
