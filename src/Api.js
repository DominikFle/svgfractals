import React, {Component} from 'react'

class App extends Component{
    state={
        data:[]
    }


    componentDidMount() { // executes its content after component loaded
        var url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        fetch(url)
            .then((result)=>{
                return result.json(); // .json() gibt daten zurück
            })
            .then((result)=>{
                this.setState({
                    data:result
                });
            })
    }

    componentWillUnmount(){
        //wird ausgeführt bevor die componente gellert wird
    }
    render(){
        return (
            <select>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>
        )
    }
}

export default App;