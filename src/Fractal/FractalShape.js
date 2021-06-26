import React, { useMemo } from 'react';
import { getFractalDepth } from './getFractalColor';
import {useWindowSize} from './useWindowSize'

export function FractalShape(props){ // cords:{parentCords,fractalDepth, maxFractalDepth}
    var par=props.parentCords;
    var parentLength=Math.sqrt((par.x1-par.x2)*(par.x1-par.x2)+(par.y1-par.y2)*(par.y1-par.y2));
    var parentAngle=Math.atan2(par.y2-par.y1,par.x2-par.x1);
    var limbAngle=props.limbAngle/360*2*3.1415; //radians 40 deg
    var deltaAngleLeft=props.deltaAngleLeft/360*2*3.1415;
    var deltaAngleRight=props.deltaAngleRight/360*2*3.1415;
    var limbLength=props.limbLength*parentLength;
    //console.log(par);
    var lengthScaler=1;
    if((props.maxFractalDepth-props.fractalDepth)<1){
        lengthScaler=((props.maxFractalDepth-props.fractalDepth))
    }
    var p1={
        x:par.x1+Math.cos(parentAngle)*parentLength,
        y:par.y1+Math.sin(parentAngle)*parentLength,
    }
    var p2={
        x:p1.x+Math.cos(parentAngle-limbAngle-deltaAngleRight)*limbLength*lengthScaler,
        y:p1.y+Math.sin(parentAngle-limbAngle-deltaAngleRight)*limbLength*lengthScaler,
    }
    var p3={
        x:p1.x+Math.cos(parentAngle+limbAngle+deltaAngleLeft)*limbLength*lengthScaler,
        y:p1.y+Math.sin(parentAngle+limbAngle+deltaAngleLeft)*limbLength*lengthScaler,
    }
   //console.log(parentLength,parentAngle);
    var {widthBrowser,heightBrowser}=useWindowSize();
    var width=0.9*widthBrowser;
    var height= 0.9*heightBrowser;
   
    var strokeWidth=props.initialStrokeWidth/(props.fractalDepth+0.5);
    var color=useMemo(()=>getFractalDepth(props.fractalDepth),[props.fractalDepth])
    var rnd1=useMemo(()=>Math.random(),[props.brokenLimbChance]); // recalc rnd onlyy if broken limbchance changes
    var rnd2=useMemo(()=>Math.random(),[props.brokenLimbChance]);
    var nextFractals = ()=>{
        if(props.fractalDepth<props.maxFractalDepth){
            var fragment=[];
            if(rnd1>props.brokenLimbChance){
                fragment=[
                    <g key="1">
                        <g>
                        <line id="rightLimb" x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
                        
                        </g>
                        <FractalShape deltaAngleLeft={props.deltaAngleLeft} deltaAngleRight={props.deltaAngleRight} brokenLimbChance={props.brokenLimbChance} limbLength={props.limbLength} limbAngle={props.limbAngle} initialStrokeWidth={props.initialStrokeWidth} maxFractalDepth={props.maxFractalDepth} fractalDepth={props.fractalDepth+1} 
                        parentCords={{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y}}/>
                    </g>
                ]
                
            }
            if(rnd2>props.brokenLimbChance){
                fragment=[...fragment
                    ,
                    <g key="2">
                        <g>
                        <line id="leftLimb" x1={p1.x} y1={p1.y} x2={p3.x} y2={p3.y} stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
                        
                        </g>
                        <FractalShape deltaAngleLeft={props.deltaAngleLeft} deltaAngleRight={props.deltaAngleRight} brokenLimbChance={props.brokenLimbChance} limbLength={props.limbLength} limbAngle={props.limbAngle} initialStrokeWidth={props.initialStrokeWidth} maxFractalDepth={props.maxFractalDepth} fractalDepth={props.fractalDepth+1} 
                    parentCords={{x1:p1.x,y1:p1.y,x2:p3.x,y2:p3.y}}/>
                    </g>
                ];
                
            }
            return fragment;
        }
    }
    return(
       <>
        
        
        {nextFractals()}
        </>
    )
}