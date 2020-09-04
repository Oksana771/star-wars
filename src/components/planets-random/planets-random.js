import React, { Component } from 'react';
import Spinner from '../spinner';
import './planets-random.css';


export default class PlanetRandom extends Component{ //імпортуємо клас




    render(){ //функція повертає елементи
     /*   return(
            <Spinner/>
        )*/
        return (
            <div className='planet-random jumbotron rounded'>
                <img className='planet-image' src='https://starwars-visualguide.com/assets/img/planets/2.jpg'/>
                <div>
                <h4>
                    Kdfdf
                </h4>

                <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='tern'>Population: </span>
                        <span >33232</span>
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>Rotation Period: </span>
                        <span>12</span>
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>Diameter: </span>
                        <span>45</span>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}