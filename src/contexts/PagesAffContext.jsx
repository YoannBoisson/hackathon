import React, { createContext, useState } from 'react';

const PagesAffContext = createContext();

export default PagesAffContext;

export const PagesAffContextProvider = ({ children }) => {
    const [currentAffConnexion, setCurrentAffConnexion] = useState(false);
    const [currentAffInscription, setCurrentAffInscription] = useState(false);
    console.log(currentAffConnexion);
    return(
        <PagesAffContext.Provider value={{ currentAffConnexion, setCurrentAffConnexion, currentAffInscription, setCurrentAffInscription }}>
            { children }
        </PagesAffContext.Provider>
    )
};