import React, { useMemo } from 'react';
import { getFractalDepth } from './getFractalColor';
import {useWindowSize} from './useWindowSize';
import {FractalShape} from './FractalShape';

export function InitialFractalShape(props){ //props:{maxFractalDepth}
    var fractalDepth=0;
    var strokeWidth=props.initialStrokeWidth;
    var {widthBrowser,heightBrowser}=useWindowSize();
    var width=0.9*widthBrowser;
    var height= 0.9*heightBrowser;
    var maxFractalDepth=props.maxFractalDepth;

    var color=useMemo(()=>getFractalDepth(fractalDepth),[fractalDepth])
    var lengthScaler=1;
    if((props.maxFractalDepth-fractalDepth)<1){
        lengthScaler=((props.maxFractalDepth-fractalDepth))
    }
    //console.log(lengthScaler);
    const nextFractal=()=>{
        if(lengthScaler==1){
            return <FractalShape brokenLimbChance={props.brokenLimbChance} deltaAngleLeft={props.deltaAngleLeft} 
            deltaAngleRight={props.deltaAngleRight}
            limbLength={props.limbLength} limbAngle={props.limbAngle} initialStrokeWidth={props.initialStrokeWidth} 
            maxFractalDepth={maxFractalDepth} fractalDepth={fractalDepth+1} 
            parentCords={{x1:0.5*width,y1:height*0,x2:width*0.5,y2:height*props.rootLength}}/>
        }
    }
    return(
       <>
        <g>
            
            <line id="fractalStarter" x1={width*0.5} y1={height*0} x2={width*0.5} y2={height*props.rootLength*lengthScaler} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
        </g>
        {nextFractal()}
        </>
    )
}