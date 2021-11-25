import React, { createContext, useState } from 'react';

const InfoUserContext = createContext();

export default InfoUserContext;

export const InfoUserContextProvider = ({ children }) => {
    const [currentInfoUser, setCurrentInfoUser] = useState([]);
    console.log(currentInfoUser);
    return(
        <InfoUserContext.Provider value={{ currentInfoUser, setCurrentInfoUser }}>
            { children }
        </InfoUserContext.Provider>
    )
};