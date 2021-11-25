import React, { useContext } from 'react';
import HomePage from './pages/HomePage';
import PagesAffContext from './contexts/PagesAffContext'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {
  const { currentAffConnexion, currentAffInscription, setCurrentAffInscription } = useContext(PagesAffContext);
  return (
    <Router>
      <div>
        <HomePage />
        {currentAffInscription ? <Navigate to="/inscription" /> : <Navigate to="/" />}
        {currentAffConnexion ? <Navigate to="/connexion" /> : <Navigate to="/" />}
      </div>
    </Router>
  );
}

export default App;
