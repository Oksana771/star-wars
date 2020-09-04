import React, { Component } from 'react';

import './header.css';


export default class Header extends Component{
    render(){
        return(
            <div className='header d-flex  align-items-center '>
                <h1>Star DB</h1>
                <span className='btn btn-link'>People</span>
                <span className='btn btn-link'>Planets</span>
                <span className='btn btn-link'>Starships</span>
            </div>
        )
    }
}
              