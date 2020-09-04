import React from 'react';

import RandomPlanet from'../planets-random';

import './app.css';
import Header from '../header';
import ItemList from '../item-list'
import PeopleDatail from '../people-detail';

const App=()=>{ //функція повертає компоненти
    return(
        <div className='container'>
            <Header/>
             <RandomPlanet/>
             <div className='row'>
                 <div className='col-6'>
                 <ItemList/>
                 </div> 
                 <div className='col-6' >
                  <PeopleDatail/>
                </div>
             </div>
        </div>
    )
}


export default App;