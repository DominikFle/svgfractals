import React, { useContext } from 'react';
import {GlobalContext} from './GlobalContext'

export function ContextUser(){
    const [names,setNames]=useContext(GlobalContext);
    const handleClick=()=>{
        setNames([
            ...names,"test",
        ]
        )
    }
    const handleRemove=(e)=>{
        var indexToRemove=parseInt(e.target.getAttribute('name'));
        console.log(e);
        setNames(names.filter((name,index)=>{
            console.log("Removeindex",indexToRemove)
            console.log(index!=indexToRemove)
            return(index!=indexToRemove)//bedingung für übernahme des werts
        })
        );
    }
    var nameElements=names.map((name,index)=>{
        return <p onClick={(e)=>handleRemove(e)} name={index} key={index}>{name+index}</p>
    })
    return(
        <div>
            <button onClick={handleClick}>Add Name</button>
            {nameElements}

        </div>
        
    )
}