import React, { Component } from 'react';
import SwapiService from '../../services/services';
import './planet-detail.css';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class PlanetDetail extends Component{
    swapiService=new SwapiService();
    state={
        planet:[],
        hasError:false
    }
    componentDidMount(){
        this.updataPlanet();
    }
    componentWillUnmount(){//використовуємо для очистки або видалення даних
        clearInterval(this.interval)
    }
    componentDidUpdate(prevProps){//оновлює попередній props,використовуємо коли міняються дані
        if(this.props.planetId!==prevProps.planetId){
            this.updataPlanet();
        }

    }
    componentDidCatch
    updataPlanet=()=>{
        const {planetId}=this.props;
        if(!planetId){
            return;
        }
        this.swapiService.getPlanet(planetId)
        .then((planet)=>{
            this.setState({planet})
        })
    }
    render(){
        const {name,id,population,diameter,rotationPeriod }=this.state.planet
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
return(
    <div className='planet-detail'>
          <img className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=''/>
       <div>
       <h4>
          {name}
       </h4>

       <ul className='list-group'>
       <li className='list-group-item'>
               <span className='tern'>Name: </span>
                <span >{name}</span> 
           </li>
           <li className='list-group-item'>
               <span className='tern'>Population: </span>
                <span >{population}</span> 
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Rotation Period: </span>
               <span>{rotationPeriod}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Diameter: </span>
               <span>{diameter}</span>
           </li>
       </ul>
       <ErrorButton/>
       </div>
    </div>
)
    }
}