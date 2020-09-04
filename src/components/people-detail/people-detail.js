import React, { Component } from 'react';

import './people-detail.css';


export default class PeopleDatail extends Component{
    render(){
        return(
            <div className='people-detail jumbotron rounded'>
            <img className='people-image' src='https://starwars-visualguide.com/assets/img/characters/3.jpg'/>
            <div>
            <h4>
               R2-D2
            </h4>

            <ul className='list-group'>
                <li className='list-group-item'>
                    <span className='tern'>Gender: </span>
                    <span >male</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Birth Year: </span>
                    <span>43</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Eye color: </span>
                    <span>red</span>
                </li>
            </ul>
            </div>
        </div>
        )
    }
}