import React, { Component } from 'react';

import RandomPlanet from'../planets-random';

import './app.css';
import Header from '../header';
import ItemList from '../item-list'
import PlanetDetail from '../planet-detail';
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator'
export default class App extends Component{ //функція повертає компоненти
state={
    selectedPlanet:5,
    hasError:false
}
onItemSelected=(id)=>{//функція має змінювати id
    //console.log(id)
    this.setState({
        selectedPlanet:id
    });
}
componentDidCatch(){//виловлюємо помилку
    this.setState({
        hasError:true
    })
}
onFilterChange=(filter)=>{
    this.setState({filter});
      }
   render(){
       if(this.state.hasError){
           return <ErrorIndicator/>
       }
       return(
        
        <div className='container'>
            <Header/>
             <RandomPlanet/>
             <ErrorButton/>
             <div className='row'>
                 <div className='col-6'>
                 <ItemList onItemSelected={this.onItemSelected}/>
                 </div> 
                 <div className='col-6' >
                  <PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>
                </div>
             </div>
        </div>
   )
}

}
//export default App;