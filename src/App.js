import React from 'react';
import Circle, { CircleList, CircleFragment} from './Svg';
import {Line} from './Svg';
import CircleForm from './circleForm'

var circleArrayInitial=[];
  for(var i=0;i<20;i++){
    var circleData={
      centerX:100,
      centerY:100+10*i,
      radius:10+i
    }
    circleArrayInitial[i]=circleData;
  }

class App extends React.Component {
  constructor(){
    super();
    this.state={
      circleArray:circleArrayInitial
    };
  }
  


  circleRemover=(index)=>{
    this.setState({
      circleArray:this.state.circleArray.filter((circleInfo,currentIndex)=>{
        return index!=currentIndex // test to pass to be in the new array
      })
    });
  }

  circleAdder = (newCircleObject)=>{
    this.setState({
      circleArray:[...this.state.circleArray, newCircleObject] // adds new element to the old array
    })
  }



  

  
  
  render(){
    var circleInfo={
      centerX:100,
      centerY:100,
      radius:10
    }
    return (
      <div className="App">
        
        
          
       
        <CircleList circleArray={this.state.circleArray} circleRemover={this.circleRemover}/>
        <CircleForm circleAdder={this.circleAdder}/>
      </div>
    );
  };
  
}

export default App;
