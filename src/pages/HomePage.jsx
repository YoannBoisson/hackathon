import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import InfoUserContext from '../contexts/InfoUserContext';
import PagesAffContext from '../contexts/PagesAffContext';

function HomePage() {
  const { currentInfoUser, setCurrentInfoUser } = useContext(InfoUserContext);
  const { setCurrentAffConnexion, currentAffInscription, setCurrentAffInscription } = useContext(PagesAffContext);
  return (
  <>
    {!currentAffInscription && currentInfoUser.length <= 0 ? (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffInscription(true);
          }}
        >
          Inscription
        </Button>
      ) : null}
      {currentInfoUser.length <= 0 ? (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffConnexion(true);
          }}
        >
          Connexion
        </Button>
      ) : (
        <Button
          sx={{ width: '100%' }}
          onClick={() => {
            setCurrentAffConnexion(false);
            setCurrentInfoUser([]);
          }}
        >
          Déconnexion
        </Button>
      )}
  </>
  );
}

export default HomePage;
