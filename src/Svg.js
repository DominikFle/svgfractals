import React, {component} from 'react';
import './svg.css'

function Circle(props){
    return(
        <svg width={props.circleInfo.radius*2}>
            <circle cx={props.circleInfo.centerX} cy={props.circleInfo.centerY} r={props.circleInfo.radius} stroke="black" strokeWidth="3" fill="red" />
        </svg>
    );
}

export default Circle;

function CircleFragment(props){
    return(
        
            <circle onClick={()=>{props.circleRemover(props.index)}} cx={props.circleInfo.centerX} cy={props.circleInfo.centerY} r={props.circleInfo.radius} stroke="black" strokeWidth="3" fill="red" />
        
    );
}

export {CircleFragment};

function CircleList(props){
    var minCenterX=props.circleArray.reduce((currentMin,circleInfo,index)=>{
        if(index==0){// bei index 0 wird initial wert gesetzt
            var newMin=circleInfo.centerX; 
            //console.log(newMin); 
            return newMin;
        }else if(circleInfo.centerX<currentMin){
            var newMin=circleInfo.centerX;
            console.log(newMin);
            return newMin;
        }else{
            return currentMin;
        }
    },0);
    //console.log(props);
    //console.log(minCenterX);
    var maxCenterX=props.circleArray.reduce((currentMax,circleInfo,index)=>{
        if(index==0){// bei index 0 wird initial wert gesetzt
            var newMax=circleInfo.centerX;  
            return newMax;
        }else if(circleInfo.centerX>currentMax){  // wenn im array ein wert größer ist dann wird der al neues max gesetzt
            var newMax=circleInfo.centerX;
            return newMax;
        }else{
            return currentMax;
        }
        
    },0);


    var minCenterY=props.circleArray.reduce((currentMin,circleInfo,index)=>{
        if(index==0){// bei index 0 wird initial wert gesetzt
            var newMin=circleInfo.centerY;  
            return newMin;
        }else if(circleInfo.centerY<currentMin){
            var newMin=circleInfo.centerY;
            return newMin;
        }else{
            return currentMin;
        }
    },0);
    var maxCenterY=props.circleArray.reduce((currentMax,circleInfo,index)=>{
        if(index==0){// bei index 0 wird initial wert gesetzt
            var newMax=circleInfo.centerY;  
            return newMax;
        }else if(circleInfo.centerY>currentMax){
            var newMax=circleInfo.centerY;
            return newMax;
        }else{
            return currentMax;
        }
    },0);

    var maxCircleRadius=props.circleArray.reduce((currentMax,circleInfo,index)=>{
        if(index==0){// bei index 0 wird initial wert gesetzt
            var newMax=circleInfo.radius;  
            return newMax;
        }else if(circleInfo.radius>currentMax){
            var newMax=circleInfo.radius;
            return newMax;
        }else{
            return currentMax;
        }
    },0);

    var circleListArray=props.circleArray.map((circleInfo,index)=>{
        return(
            <CircleFragment circleInfo={circleInfo} circleRemover={props.circleRemover} key={index} index={index}/>
        )
    },0)
return (<svg y="100" width={maxCenterX-minCenterX+2*maxCircleRadius} height={maxCenterY-minCenterY+2*maxCircleRadius}>
    {circleListArray}
</svg>)
    
}

export {CircleList};

function Line(props){
    return(
        <svg >
            <line x1="0" y1="0" x2="200" y2="200" stroke="rgb(255,0,0)" strokeWidth="2" />
        </svg>
    );
}
export {Line};