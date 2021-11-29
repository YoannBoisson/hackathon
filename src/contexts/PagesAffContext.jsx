import React, { createContext, useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom";

const PagesAffContext = createContext();

export default PagesAffContext;

export const PagesAffContextProvider = ({ children }) => {
    let navigate = useNavigate();
    const [navigateStop, setNavigateStop] = useState(false);
    const [currentAffConnexion, setCurrentAffConnexion] = useState(false);
    const [currentAffInscription, setCurrentAffInscription] = useState(false);
    const [currentAffDescription, setCurrentAffDescription] = useState(false);
    const [currentAffMusiqueHumeur, setCurrentAffMusiqueHumeur] = useState(false);
    const [redirectHome, setRedirectHome] = useState(false);

    useEffect(() => {
        if(navigateStop)
        {   
            navigate('/');
        }
        setNavigateStop(true);
    }, [redirectHome])

    return(
        <PagesAffContext.Provider value={{ 
            currentAffConnexion, 
            setCurrentAffConnexion, 
            currentAffInscription, 
            setCurrentAffInscription, 
            redirectHome, 
            setRedirectHome,
            currentAffDescription,
            setCurrentAffDescription,
            currentAffMusiqueHumeur, 
            setCurrentAffMusiqueHumeur }}>
            { children }
        </PagesAffContext.Provider>
    )
};