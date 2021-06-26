import React, { useEffect,useState } from 'react';
import {useWindowSize} from './useWindowSize';
import {FractalContainer} from './FractalContainer';
import './fractal.css'
import {InitialFractalShape} from './InitialFractalShape'
import { RightMenu } from './RightMenu';
import { LeftMenu } from './LeftMenu';

export function AppFractals(){
    var {widthBrowser,heightBrowser}=useWindowSize();
    var [strokeWidth,setStrokeWidth]=useState(20);
    var [maxDepth,setMaxDepth]=useState(0.1);
    var [limbAngle,setLimbAngle]=useState(40);
    var [limbLength,setLimbLength]=useState(0.57);
    var [rootLength,setRootLength]=useState(0.45);
    var [brokenLimbChance,setBrokenLimbChance]=useState(0);
    var [deltaAngleLeft,setDeltaAngleLeft]=useState(0);
    var [deltaAngleRight,setDeltaAngleRight]=useState(0);
    
    var setters=[setStrokeWidth,setMaxDepth,setLimbAngle,setLimbLength,
        setRootLength,setBrokenLimbChance,setDeltaAngleLeft,setDeltaAngleRight];
    var currentInputVals=[strokeWidth,maxDepth,limbAngle,limbLength,
            rootLength,brokenLimbChance,deltaAngleLeft,deltaAngleRight];

    useEffect(()=>{
        document.body.style.margin="0";
        document.body.style.padding="0";
        return(()=>{
            document.body.style.margin="";
            document.body.style.padding="";
        })
    },[])
    return(
        <div className="bodywrapper">
            <FractalContainer>
                <InitialFractalShape deltaAngleLeft={deltaAngleLeft} deltaAngleRight={deltaAngleRight}
                brokenLimbChance={brokenLimbChance} rootLength={rootLength} limbLength={limbLength} 
                limbAngle={limbAngle} initialStrokeWidth={strokeWidth} maxFractalDepth={maxDepth}/>
            </FractalContainer>
            <RightMenu currentInputVals={currentInputVals} setters={setters}/>
            <div className="screenSize">
                {/*<p>Width:{widthBrowser} Height: {heightBrowser}</p>*/}
                
                <LeftMenu currentInputVals={currentInputVals} setters={setters}/>
                
                
            </div>
            
        </div>
        
    )
}