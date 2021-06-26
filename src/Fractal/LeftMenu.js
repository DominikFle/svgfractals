
import React, { useEffect,useState } from 'react';
import {useWindowSize} from './useWindowSize';
import {FractalContainer} from './FractalContainer';
import './fractal.css'
import './transitions.css'
import { CSSTransition } from 'react-transition-group';


export function LeftMenu(props){
    const [setStrokeWidth,setMaxDepth,setLimbAngle,setLimbLength,
        setRootLength,setBrokenLimbChance,setDeltaAngleLeft,setDeltaAngleRight]=props.setters; // get all the setters for the buttons
    const [strokeWidth,maxDepth,limbAngle,limbLength,
        rootLength,brokenLimbChance,deltaAngleLeft,deltaAngleRight]=props.currentInputVals;

    
    const [menuVisible,setMenuVisible] =useState(true);
   
    return(
        <>
            <div className="inputDiv buttonLeft" onClick={()=>setMenuVisible(!menuVisible)}>
                <svg width="800" height="234" viewBox="0 0 800 234" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="MenuIcon">
                        <g id="MenuIcon_2">
                            <rect id="Rectangle 1" x="200" y="2" width="400" height="60" rx="5" fill="#C4C4C4"/>
                            <rect id="Rectangle 2" x="200" y="87" width="400" height="60" rx="5" fill="#C4C4C4"/>
                            <rect id="Rectangle 3" x="200" y="172" width="400" height="60" rx="5" fill="#C4C4C4"/>
                        </g>
                        <g id="arrowsUp" className={menuVisible?"visible":"invisible"}>
                            <g id="rightArrowUp">
                            <path id="Rectangle 4" d="M772 137C772 142.523 767.523 147 762 147L627 147C624.239 147 622 144.761 622 142V127C622 124.239 624.239 122 627 122L767 122C769.761 122 772 124.239 772 127V137Z" fill="#C4C4C4"/>
                            <path id="Rectangle 5" d="M767 47C769.761 47 772 49.2386 772 52V137C772 142.523 767.523 147 762 147H752C749.239 147 747 144.761 747 142V52C747 49.2386 749.239 47 752 47L767 47Z" fill="#C4C4C4"/>
                            <path id="Polygon 1" d="M755.67 7.5C757.594 4.16667 762.406 4.16667 764.33 7.5L790.311 52.5C792.235 55.8333 789.83 60 785.981 60L734.019 60C730.17 60 727.765 55.8333 729.689 52.5L755.67 7.5Z" fill="#C4C4C4"/>
                            </g>
                            <g id="leftArrowUp" className={"invisible"}>
                            <path id="Rectangle 4_2" d="M28 137C28 142.523 32.4772 147 38 147L173 147C175.761 147 178 144.761 178 142V127C178 124.239 175.761 122 173 122L33 122C30.2386 122 28 124.239 28 127L28 137Z" fill="#C4C4C4"/>
                            <path id="Rectangle 5_2" d="M33 47C30.2386 47 28 49.2386 28 52L28 137C28 142.523 32.4772 147 38 147H48C50.7614 147 53 144.761 53 142L53 52C53 49.2386 50.7614 47 48 47L33 47Z" fill="#C4C4C4"/>
                            <path id="Polygon 1_2" d="M44.3301 7.5C42.4056 4.16667 37.5944 4.16667 35.6699 7.5L9.68911 52.5C7.76461 55.8333 10.1702 60 14.0192 60L65.9808 60C69.8298 60 72.2354 55.8333 70.3109 52.5L44.3301 7.5Z" fill="#C4C4C4"/>
                            </g>
                        </g>
                        <g id="arrowsDown" className={menuVisible?"invisible":"visible"}>
                            <g id="leftArrowDown" className={"invisible"}>
                            <path id="Rectangle 4_3" d="M28 97C28 91.4772 32.4772 87 38 87H173C175.761 87 178 89.2386 178 92V107C178 109.761 175.761 112 173 112H33C30.2386 112 28 109.761 28 107V97Z" fill="#C4C4C4"/>
                            <path id="Rectangle 5_3" d="M33 187C30.2386 187 28 184.761 28 182L28 97C28 91.4772 32.4772 87 38 87H48C50.7614 87 53 89.2386 53 92L53 182C53 184.761 50.7614 187 48 187H33Z" fill="#C4C4C4"/>
                            <path id="Polygon 1_3" d="M44.3301 226.5C42.4056 229.833 37.5944 229.833 35.6699 226.5L9.68911 181.5C7.76461 178.167 10.1702 174 14.0192 174H65.9808C69.8298 174 72.2354 178.167 70.3109 181.5L44.3301 226.5Z" fill="#C4C4C4"/>
                            </g>
                            <g id="rightArrowDown">
                            <path id="Rectangle 4_4" d="M772 97C772 91.4772 767.523 87 762 87H627C624.239 87 622 89.2386 622 92V107C622 109.761 624.239 112 627 112H767C769.761 112 772 109.761 772 107V97Z" fill="#C4C4C4"/>
                            <path id="Rectangle 5_4" d="M767 187C769.761 187 772 184.761 772 182V97C772 91.4772 767.523 87 762 87H752C749.239 87 747 89.2386 747 92V182C747 184.761 749.239 187 752 187H767Z" fill="#C4C4C4"/>
                            <path id="Polygon 1_4" d="M755.67 226.5C757.594 229.833 762.406 229.833 764.33 226.5L790.311 181.5C792.235 178.167 789.83 174 785.981 174H734.019C730.17 174 727.765 178.167 729.689 181.5L755.67 226.5Z" fill="#C4C4C4"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <div className={"sliderWrapper"}>
            <CSSTransition classNames={"sliderTransition"} in={!menuVisible} timeout={500}>
            <div className={"slider"}>

                
                <div className="inputDiv">
                    <label htmlFor="maxDepthSlider">Fractal Depth</label>
                    <input name="maxDepthSlider" type="number" step="0.1" min="0" max="10" 
                    onChange={(e)=>{setMaxDepth(e.target.value)}} value={maxDepth}/>
                    <input name="maxDepthSlider" type="range" step="0.1" min="0" max="10" 
                    onChange={(e)=>{setMaxDepth(e.target.value)}} value={maxDepth}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="limbAngleSlider">Angle Both Limbs</label>
                    <input name="limbAngleSlider" type="number" step="1" min="0" max="180" 
                    onChange={(e)=>{setLimbAngle(e.target.value)}} value={limbAngle}/>
                    <input name="limbAngleSlider" type="range" step="1" min="0" max="180" 
                    onChange={(e)=>{setLimbAngle(e.target.value)}} value={limbAngle}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="deltaLeftSlider">Delta Angle Right Limb</label>
                    <input name="deltaLeftSlider" type="number" step="1" min="-180" max="180" 
                    onChange={(e)=>{setDeltaAngleLeft(e.target.value)}} value={deltaAngleLeft}/>
                    <input name="deltaLeftSlider" type="range" step="1" min="-180" max="180" 
                    onChange={(e)=>{setDeltaAngleLeft(e.target.value)}} value={deltaAngleLeft}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="deltaRightSlider">Delta Angle Left Limb</label>
                    <input name="deltaRightSlider" type="number" step="1" min="-180" max="180" 
                    onChange={(e)=>{setDeltaAngleRight(e.target.value)}} value={deltaAngleRight}/>
                    <input name="deltaRightSlider" type="range" step="1" min="-180" max="180" 
                    onChange={(e)=>{setDeltaAngleRight(e.target.value)}} value={deltaAngleRight}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="limbLengthSlider">Relative Limb Length</label>
                    <input name="limbLengthSlider" type="number" step="0.03" min="0" max="1.5" 
                    onChange={(e)=>{setLimbLength(e.target.value)}} value={limbLength}/>
                    <input name="limbLengthSlider" type="range" step="0.03" min="0" max="1.5" 
                    onChange={(e)=>{setLimbLength(e.target.value)}} value={limbLength}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="rootLengthSlider">Relative Root Length</label>
                    <input name="rootLengthSlider" type="number" step="0.01" min="0" max="0.7" 
                    onChange={(e)=>{setRootLength(e.target.value)}} value={rootLength}/>
                    <input name="rootLengthSlider" type="range" step="0.01" min="0" max="0.7" 
                    onChange={(e)=>{setRootLength(e.target.value)}} value={rootLength}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="brokenLimbChanceSlider">Broken Limb Chance</label>
                    <input name="brokenLimbChanceSlider" type="number" step="0.01" min="0" max="0.5" 
                    onChange={(e)=>{setBrokenLimbChance(e.target.value)}} value={brokenLimbChance}/>
                    <input name="brokenLimbChanceSlider" type="range" step="0.01" min="0" max="0.5" 
                    onChange={(e)=>{setBrokenLimbChance(e.target.value)}} value={brokenLimbChance}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="strokeWidthSlider">Stroke Width</label>
                    <input name="strokeWidthSlider" type="number" step="1" min="1" max="80" 
                    onChange={(e)=>{setStrokeWidth(e.target.value)}} value={strokeWidth}/>
                    <input name="strokeWidthSlider" type="range" step="1" min="1" max="80" 
                    onChange={(e)=>{setStrokeWidth(e.target.value)}} value={strokeWidth}/>
                </div>
            </div>
            </CSSTransition>
            </div>
            
            
        </> 
        
    )
}