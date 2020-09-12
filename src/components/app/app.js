import React, { Component } from 'react';

import RandomPlanet from'../planets-random';
import SwapiService from '../../services/services'
import './app.css';
import Header from '../header';
import ItemList from '../item-list';
//import PlanetDetail from '../planet-detail';
//import PeopleDatail from '../people-detail';
import StarShip from '../starship';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
export default class App extends Component{ //функція повертає компоненти
    swapiService=new SwapiService();
state={
    data:null,
   // planetList:null,
   // selectedPlanet:5,
   // selectedPeople:1,
    selectedStarship:5,
    hasError:false,
    name:'starship'
}

onItemSelected=(id)=>{//функція має змінювати id
    //console.log(id)
    this.setState({
     //   selectedPlanet:id,
     //  selectedPeople:id,
      selectedStarship:id

    });
}
componentDidCatch(){//виловлюємо помилку
    this.setState({
        hasError:true
    })
}


onFilterChange=(name)=>{
  // console.log(name)
    this.setState({ 
        name
       
    })

   
   
   //console.log(this.state.data)
      }
showData=(name)=>{
  //  console.log(name)
    switch(name){
        case 'people':{
            this.swapiService.getAllPeople()
            .then(( data)=>{
             // console.log(data)
                this.setState({
                    data
                })
                
            }) 
           break; 
        }
        case 'planet':{
            this.swapiService.getAllPlanets()
            .then((data)=>{
              
                this.setState({
                   data
                })
            })
            break;
        }
        case 'starship':{
            this.swapiService.getAllShips()
            .then(( data)=>{
             
                this.setState({
                    data
                })
            })
            break;
    
        }
    }
}
    
    
      
    

   render(){
       if(this.state.hasError){
           return <ErrorIndicator/>
       }
       const {data}=this.state;
       return(
        
        <div className='container'>
            <Header
          onFilterChange={this.onFilterChange}/>
          <RandomPlanet/>
          <ErrorButton/>
           <div className='row'>
                 <div className='col-6'>    
           
             
          
                 <ItemList onItemSelected={this.onItemSelected}
                 data={data}/>
                 </div> 
                 <div className='col-6' >
                 <StarShip  starshipId={this.state.selectedStarship}/>
                
                </div>
             </div>
        </div>
   )
}

}
//export default App;

//<PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>
//PeopleDatail peopleId={this.state.selectedPeople}

// <PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>
//<PeopleDatail peopleId={this.state.selectedPeople}/>