import React, { Component } from 'react';
import './app.css';

//import RandomPlanet from'../planets-random';
import SwapiService from '../../services/services'

import Header from '../header';
import ItemList from '../item-list';
import PlanetDetail from '../planet-detail';
import PeopleDatail from '../people-detail';
import StarShip from '../starship';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class App extends Component{ //функція повертає компоненти
    swapiService=new SwapiService();
detail=null;
state={
    data:null,
   // planetList:null,
    //selectedPlanet:5,
   // selectedPeople:1,
    selectedPlanet:5,
    hasError:false,
    name:'people'
}

onItemSelected=(id)=>{//функція має змінювати id
    //console.log(id)
    this.setState({
       selectedPlanet:id,
    //  selectedPeople:id,
      //selectedStarship:id

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
       
    });
//this.showData(this.state.name)
   
   
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
                this.detail=<PeopleDatail planetId={this.state.selectedPlanet}/*передаємо значення*//>
                return this.state.data
            }) 
          
        }
        case 'planet':{
            this.swapiService.getAllPlanets()
            .then((data)=>{
              
                this.setState({
                   data
                })
                this.detail= <PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>
                return this.state.data
            })
           
        }
        case 'starship':{
            this.swapiService.getAllShips()
            .then(( data)=>{
             
                this.setState({
                    data
                })
                this.detail= <StarShip  planetId={this.state.selectedPlanet}/>
               // console.log(this.state.data)
                return this.state.data
            })
           
    
        }
    }
}

    
    
      
    

   render(){
       if(this.state.hasError){
           return <ErrorIndicator/>
       }
       const data=this.showData(this.state.name);
      // const data=this.Bond();
       return(
        
        <div className='container'>
            <Header
          onFilterChange={this.onFilterChange}/>
         { /*<RandomPlanet/>*/}
          <ErrorButton/>
           <div className='row'>
                 <div className='col-6'>    
           
             
          
                 <ItemList onItemSelected={this.onItemSelected}
                 data={data}/>
                 </div> 
                 <div className='col-6' >
                {this.detail}
               
                </div>
             </div>
        </div>
   )
}

}
//export default App;

//
//PeopleDatail peopleId={this.state.selectedPeople}

// <PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>
//  <PeopleDatail peopleId={this.state.selectedPeople}/>
             //   <PlanetDetail planetId={this.state.selectedPlanet}/*передаємо значення*//>