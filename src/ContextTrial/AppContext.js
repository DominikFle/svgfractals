import React from 'react';
import {ContextProvider} from './GlobalContext';
import {ContextUser} from'./ContextUser';
export function AppContext(){
    return(
        <ContextProvider>
        <div>
            <p>Context Example</p>
        </div>
        <ContextUser/>
        </ContextProvider>
        
    )
}