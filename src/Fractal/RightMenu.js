import React, { useEffect,useState } from 'react';
import {useWindowSize} from './useWindowSize';
import {FractalContainer} from './FractalContainer';
import './fractal.css'
import './transitions.css'
import { CSSTransition } from 'react-transition-group';

const FRACTAL_EXAMPLES=[
    {
        name:"Default Fractal",
        type:"default",
        strokeWidth:20,
        maxDepth:0.1,
        limbAngle:40,
        deltaAngleLeft:0,
        deltaAngleRight:0,
        limbLength:0.57,
        rootLength:0.45,
        brokenLimbChance:0,
    },
    {
        name:"Tree",
        type:"default",
        strokeWidth:9,
        maxDepth:0.1,
        limbAngle:14,
        deltaAngleLeft:0,
        deltaAngleRight:0,
        limbLength:0.51,
        rootLength:0.45,
        brokenLimbChance:0,
    },
    {
        name:"Triangle",
        type:"default",
        strokeWidth:20,
        maxDepth:0.1,
        limbAngle:135,
        deltaAngleLeft:0,
        deltaAngleRight:0,
        limbLength:0.66,
        rootLength:0.58,
        brokenLimbChance:0,
    },
    {
        name:"Bush",
        type:"default",
        strokeWidth:20,
        maxDepth:0.1,
        limbAngle:22,
        deltaAngleLeft:0,
        deltaAngleRight:0,
        limbLength:0.99,
        rootLength:0.05,
        brokenLimbChance:0,
    },
    {
        name:"Thunder",
        type:"default",
        strokeWidth:20,
        maxDepth:0.1,
        limbAngle:40,
        deltaAngleLeft:0,
        deltaAngleRight:0,
        limbLength:1.05,
        rootLength:0.05,
        brokenLimbChance:0.28,
    },
    {
        name:"Fern",
        type:"default",
        strokeWidth:30,
        maxDepth:0.1,
        limbAngle:40,
        deltaAngleLeft:30,
        deltaAngleRight:-25,
        limbLength:0.66,
        rootLength:0.32,
        brokenLimbChance:0,
    },
    {
        name:"Spiral",
        type:"default",
        strokeWidth:7,
        maxDepth:0.1,
        limbAngle:180,
        deltaAngleLeft:100,
        deltaAngleRight:-96,
        limbLength:0.9,
        rootLength:0.57,
        brokenLimbChance:0,
    },
    {
        name:"Star",
        type:"default",
        strokeWidth:7,
        maxDepth:0.1,
        limbAngle:180,
        deltaAngleLeft:27,
        deltaAngleRight:-28,
        limbLength:1.11,
        rootLength:0.63,
        brokenLimbChance:0,
    },
];
export function RightMenu(props){
    const [setStrokeWidth,setMaxDepth,setLimbAngle,setLimbLength,
        setRootLength,setBrokenLimbChance,setDeltaAngleLeft,setDeltaAngleRight]=props.setters; // get all the setters for the buttons
    const [strokeWidth,maxDepth,limbAngle,limbLength,
        rootLength,brokenLimbChance,deltaAngleLeft,deltaAngleRight]=props.currentInputVals;

    const [fractalSamples,setFractalSamples]=useState(FRACTAL_EXAMPLES);
    const [customCount,setCustomCount]=useState(0);
    const [menuVisible,setMenuVisible] =useState(false);
    const addCustomButton=()=>{
        setCustomCount(customCount+1);
        setFractalSamples([...fractalSamples,{
            name:"Custom "+(customCount+1),
            type:"custom",
            strokeWidth:strokeWidth,
            maxDepth:maxDepth,
            limbAngle:limbAngle,
            deltaAngleLeft:deltaAngleLeft,
            deltaAngleRight:deltaAngleRight,
            limbLength:limbLength,
            rootLength:rootLength,
            brokenLimbChance:brokenLimbChance,
        }])
    }
    const deleteCustomButton=(name,e)=>{
        e.stopPropagation();
        e.preventDefault();
        setCustomCount(customCount-1);
        console.log("delete",name)
        setFractalSamples(
            
            (fractalSamples.filter((sampleObject)=>{
                return(sampleObject.name!=name);
            })),
        
            
        )
    }
    const buttons=fractalSamples.map((sampleObject,index)=>{
        return(
            <button className={sampleObject.type=="custom"?"customButton":""} key={sampleObject.name} onClick={()=>{
                setStrokeWidth(sampleObject.strokeWidth);setMaxDepth(sampleObject.maxDepth);setLimbAngle(sampleObject.limbAngle);
                setLimbLength(sampleObject.limbLength);setRootLength(sampleObject.rootLength);
                setBrokenLimbChance(sampleObject.brokenLimbChance);setDeltaAngleLeft(sampleObject.deltaAngleLeft);setDeltaAngleRight(sampleObject.deltaAngleRight)
            }}>{sampleObject.name+" "}
            {sampleObject.type=="custom"?<span className={"xCancel"}  onClick={(e)=>deleteCustomButton(sampleObject.name,e)}>x</span>:""}
            </button>
        )
    });
    
    return(
        <div className={"buttonWrapper"}>
            
            <div className={"toggleWrapper"}>
            <CSSTransition classNames={"buttonTogglerTransition"} in={menuVisible} timeout={500}>
                <div className={"buttonToggler"} onClick={()=>setMenuVisible(!menuVisible)}>
                    <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="groupedArrow">
                            <path id="Arrow" d="M92.8013 25.866L92.8013 110.737L19.3013 68.3013L92.8013 25.866Z" fill="#C4C4C4" stroke="black"/>
                            <rect id="Rectangle 1" x="13.5" y="13.5" width="109" height="109" stroke="rgba(0,0,0,0)"/>
                        </g>
                    </svg>
                </div>
            </CSSTransition>
            </div>
            
            
            <CSSTransition classNames={"buttonsTransition"} in={menuVisible} timeout={500}>
                <div className={"buttons"}>
                
                <button className="saveButton" onClick={addCustomButton}>💾Save Current Settings</button>   
                {buttons}
            </div>
            </CSSTransition>
            
        </div>
            
         
        
    )
}