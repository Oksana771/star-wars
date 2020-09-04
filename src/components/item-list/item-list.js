import React, { Component } from 'react';

import './item-list.css';


export default class ItemList extends Component{
render(){
    return(
        <div className='item-list'>
             <ul className='list-group'>
                    <li className='list-group-item'>
                        <span className='tern'>Luck Skywalker</span>
                      
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>Darth Wader</span>
                       
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>R2-D2</span>
                      
                    </li>
                </ul>
        </div>
    )
}

}