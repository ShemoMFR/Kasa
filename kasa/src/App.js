import './App.css';
import {Routes, Route} from "react-router-dom";

/* Page */ 
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import Apropos from './pages/Apropos/Apropos';
import NotFound from './pages/NotFound/NotFound';

/* Components */ 
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/logement/*" element={<NotFound />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
