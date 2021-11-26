import React, { useContext } from 'react';
import PagesAffContext from '../contexts/PagesAffContext';

function HomePage() {
  const { setCurrentAffConnexion, setCurrentAffInscription } = useContext(PagesAffContext);
  setCurrentAffConnexion(false);
  setCurrentAffInscription(false);
  return (
  <>
    yes
  </>
  );
}

export default HomePage;
