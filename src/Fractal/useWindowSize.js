import React,{useEffect,useState} from 'react';





function getWindowSize(){
    var width =window.innerWidth;
    var height =window.innerHeight;
    return({
        widthBrowser:width,
        heightBrowser:height,
    })
}


export function useWindowSize(){
    const  [windowSize,setWindowSize]=useState(getWindowSize());//windowSize : {width , height}

    useEffect(()=>{
        window.addEventListener("resize",()=>{setWindowSize(getWindowSize)})
        return(
            ()=>{window.addEventListener("resize",()=>{setWindowSize(getWindowSize)})}
        )
    },[]) // leeres Array damit das nur einmal ausgeführt wird
    return(windowSize)
}