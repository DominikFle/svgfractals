import React, {component, Component} from 'react';

class CircleForm extends Component{
    initialState ={
        centerX:0,
        centerY:0,
        radius:0

    }
    state = this.initialState;
    updateAfterChange=(event)=>{
        var value=event.target.value;
        var statename=event.target.dataset.name;
        this.setState({
            [statename]:value,
        });
    }

    submitFunction=(event)=>{
        event.preventDefault();
        this.props.circleAdder(this.state);
        
        this.setState({
            centerX:0,
            centerY:0,
            radius:0
        })
    }
    render(){

        return(
            <form>
                <label htmlFor="centerXInput" >Center X</label>
                <input data-name="centerX" name="centerX" id="centerXInput" type="text" onChange={this.updateAfterChange}></input>

                <label htmlFor="centerYInput" >Center Y</label>
                <input data-name="centerY" name="centerY" id="centerYInput" type="text" onChange={this.updateAfterChange}></input>

                <label htmlFor="radius" >Radius</label>
                <input data-name="radius" name="radius" id="radiusInput" type="text" onChange={this.updateAfterChange}></input>

                <button type="button" onClick={this.submitFunction}>Kreis erstellen</button>

            </form>
        )
    }
}

export default CircleForm;