import React, { createContext, useState } from 'react';

const InfoUserContext = createContext();

export default InfoUserContext;

export const InfoUserContextProvider = ({ children }) => {
    const [currentInfoUser, setCurrentInfoUser] = useState([]);
    return(
        <InfoUserContext.Provider value={{ currentInfoUser, setCurrentInfoUser }}>
            { children }
        </InfoUserContext.Provider>
    )
};