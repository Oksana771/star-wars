import React, { Component } from 'react';

import './header.css';


export default class Header extends Component{
    buttons=[
        {name:'People',label:'People'},
        {name:'Planets',label:'Planets'},
        {name:'Starships',label:'Starships'}
    ]
    

    render(){
        const{filter,onFilterChange}=this.props;

        const buttons=this.buttons.map(({name,label})=>{
            const isActive=filter===name;//створили зміну та записали якщо filter тоді = name
            const clazz=isActive ? 'header':'btn btn-link'//якщо true має клас btn-info
        
        return(
            <button type='button'
            className={`btn ${clazz}`} key={name}
           onClick={()=>onFilterChange(name)}
         >{label}</button>
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