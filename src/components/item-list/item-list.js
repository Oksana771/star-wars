import React, { Component } from 'react';
import SwapiService from '../../services/services'
import './item-list.css';
import Spinner from '../spinner/spinner';


export default class ItemList extends Component{
    swapiServise=new SwapiService();//запит на сервіс

    state={
        planetList:null
    }
    componentDidMount(){//метод виконує запит і витягує дані
        this.swapiServise.getAllPlanets()
        .then((planetList)=>{
           // console.log(planetList)
            this.setState({
                planetList
            }); //оновлюємо список
        });
   
  }
  itemList(planetList){
        // console.log(planetList)
      return planetList.map(({id, name}) => {
       
           return(
               <li  className='list-group-item'
                  key={id}
                  onClick={()=>this.props.onItemSelected(id)}>
                  {name}
               </li>
           );
       });
}
   render(){  
      const {planetList}=this.state;

      if(!planetList){
          return<Spinner/>;
     }
      const list=this.itemList(planetList);
    return(
       <div className='item-list'>
             <ul className='list-group'>
                {list}
                </ul>
      </div>
    )
     
    }
   
}
    
    


    
    




/* <li className='list-group-item'>
                        <span className='tern'>Luck Skywalker</span>
                      
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>Darth Wader</span>
                       
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>R2-D2</span>
                      
                    </li>  */