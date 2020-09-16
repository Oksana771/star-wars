import React, { Component } from 'react';
import SwapiService from '../../services/services';
import './starship.css';
import ErrorIndicator from '../error-indicator';

export default class StarShip extends Component{
    swapiService=new SwapiService();
    state={
        starship:null,
        hasError:false
    }
    componentDidMount(){
        this.updataStarShip();
    }
    //componentWillUnmount(){//використовуємо для очистки або видалення даних
      //  clearInterval(this.interval)
   // }
    componentDidUpdate(prevProps){//оновлює попередній props,використовуємо коли міняються дані
        if(this.props.starshipId!==prevProps.starshipId){
            this.updataStarShip();
        }

    }
    componentDidCatch
    updataStarShip=()=>{
        const {starshipId}=this.props;
        if(!starshipId){
            return;
        }
     //   this.swapiService.getShip(starshipId)
     //   .then((starship)=>{
        //    this.setState({starship})
     //   })
    }
    render(){
        if(!this.state.starship){
            return <span>Selected Starship</span>
        }
        const {name,id,model,manufacturer,starshipClass,speed,hyperdrive_rating,length,crew,passengers }=this.state.starship
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
return(
    <div className='starship-detail'>
          <img className='starship-image'
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`} alt=''/>
       <div>
       <h4>
          {name}
       </h4>

       <ul className='list-group'>
       <li className='list-group-item'>
               <span className='tern'>Model: </span>
                <span >{model}</span> 
           </li>
           <li className='list-group-item'>
               <span className='tern'>Passengers: </span>
                <span >{manufacturer}</span> 
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Starship class: </span>
               <span>{starshipClass}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Speed: </span>
               <span>{speed}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Hyperdrive rating: </span>
               <span>{hyperdrive_rating}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Length: </span>
               <span>{length}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Crew: </span>
               <span>{crew}</span>
           </li>
           <li className='list-group-item'>
               <span  className='tern'>Passengers: </span>
               <span>{passengers}</span>
           </li>
       </ul>
     
       </div>
    </div>
)
    }
}