import React,{useEffect,useState} from 'react';





export function getFractalDepth(fractalDepth){
    var color;
    switch(fractalDepth) {
        case 1:
            color="#e8300c";
            break;
        case 2:
            color="#e89f0c"
            break;
        case 3:
            color="#e8d30c"
            break;
        case 4:
            color="#8ae80c"
            break;
        case 5:
            color="#0ce838"
            break;
        case 6:
            color="#0ce8e6"
            break;
        case 7:
            color="#b8e1fc"
            break;
        case 8:
            color="#eff9ff"
            break;
        default:
          color="darkred";
      } 
    return(color)
}


