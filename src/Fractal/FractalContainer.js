import React from 'react';
import {useWindowSize} from './useWindowSize'

export function FractalContainer(props){
    var {widthBrowser,heightBrowser}=useWindowSize();
    var width=0.9*widthBrowser;
    var height= 0.9*heightBrowser;
    
    return(
       
        <svg width={width} height={height} transform={"rotate(180)"} >
            <g id="background">
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="50%">
                <stop offset="0%" stopColor={"rgb(255,255,0)"} stopOpacity={1} />
                <stop offset="100%" stopColor={"rgb(255,0,0)"} stopOpacity={1} />
            </linearGradient>
            <rect x={0} y={0} width={width} height={height} fill={"black"}/>
            </g>

            {props.children}
        </svg>
        
        
    )
}