import React, { Component } from 'react';
//import Spinner from '../spinner';
import './planets-random.css';

import SwapiService from '../../services/services';
import Spinner from '../spinner/spinner';

export default class PlanetRandom extends Component{ //імпортуємо клас

    swapiService=new SwapiService();//запит на сервіс

    state={ //створили обєкт з інформацією
        planet:{},//записали пустий обєкт
       /* id:5,
        name:null,
        population:null,
        rotationPeriod:null,
        diameter:null*/
        loading:true//добавили state
    }



   /* constructor(){
        super();
        this.updatePlanet();//викликали функцію
        this.interval=setInterval(this.updatePlanet, 3000) //визиваємо функцію з певною періодичністю
        //clearInterval(this.interval);
    }*/

componentDidMount(){ //метод викликається коли сторінка вже загружена
    this.updatePlanet();//викликали функцію
    this.interval=setInterval(this.updatePlanet, 3000) //визиваємо функцію з певною періодичністю
}

onPlanetLoaded=(planet)=>{
    this.setState({ planet,
     loading:false })//ключі з сервера
   
}
    updatePlanet=()=>{ //створили функцію з запитом на сервіс
        const id=Math.floor(Math.random()*20)+3;//створили змінну з номером планети
        //console.log(id)
        this.swapiService.getPlanet(id) //передали значення id
        .then(this.onPlanetLoaded)
            } 

              /*  id,
                name:planet.name,
                population:planet.population,
                rotationPeriod:planet.rotation_period,
                diameter:planet.diameter*/
           
 
    


    render(){ //функція повертає елементи
     /*   return(
            <Spinner/>
        )*/

        const{planet,loading}=this.state //зробили дестрктаризацію

        const spinner=loading ?<Spinner/>:null;
        const content=!loading ?<PlanetView planet={planet}/>:null;

        if(loading){ //повертаємо spinner
            return <Spinner/>
        }

        return (

            <div className='planet-random jumbotron rounded'> 
              {spinner}
              {content}
            </div>
        )
    }
}
const PlanetView=({planet})=>{
    const {name,population,rotationPeriod,diameter,id}=planet; //зробили деструктаризацію
    return( //огортаємо fragment
        <React.Fragment> 
        <img className='planet-image'
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt=''/>
       <div>
       <h4>
          {name}
       </h4>

       <ul className='list-group'>
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
       </div>
       </React.Fragment>
    )
}