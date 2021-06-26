import React, { createContext, useState} from 'react';

export const GlobalContext=createContext();

export function ContextProvider(props){
    const [names,setNames]=useState(["test"]);


    return(
        <GlobalContext.Provider value={[names,setNames]}>
            {props.children}
        </GlobalContext.Provider>
    )
}