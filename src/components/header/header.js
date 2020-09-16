import React, { Component } from 'react';

import './header.css';


export default class Header extends Component{
    buttons=[
        {name:'people',label:'People'},
        {name:'planet',label:'Planets'},
        {name:'starship',label:'Starships'}
    ]
    

    render(){
        const{onFilterChange}=this.props;

        const buttons=this.buttons.map(({name,label})=>{
           
        
        return(
            <button  className='btn btn-link' key={name}
             onClick={()=>onFilterChange(name)} >
        {label}
        </button>
        )
    })
         

        return(
            <div className='header d-flex  align-items-center '>
                <h1>Star DB</h1>
               {buttons}
            </div>
        )
    }
}
            /* <span className='btn btn-link'>People</span>
                <span className='btn btn-link'>Planets</span>
                <span className='btn btn-link'>Starships</span>*/ 