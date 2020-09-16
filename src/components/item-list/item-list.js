import React, { Component } from 'react';
import SwapiService from '../../services/services'
import './item-list.css';
import Spinner from '../spinner/spinner';


export default class ItemList extends Component{
    swapiService=new SwapiService();//запит на сервіс

   /*state={
       starshipList:[]
    }
    componentDidMount(){//метод виконує запит і витягує дані
        this.swastarshipList)=>{
          // console.log(planetList)
            this.setState({
                starshipList
            }); //оновлюємо список
        });

  }*/
  renderItem=(arr)=>{
       console.log(arr)
      return  arr.map(({id, name}) => {
       
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
      const {data}=this.props;

      if(!data){
          return<Spinner/>;
     }
      const itemList=this.renderItem(data);
      console.log(itemList)
    return(
       <div className='item-list'>
             <ul className='list-group'>
                {itemList}
                </ul>
      </div>
    )
     
    }
   
}







    


   /* state={
        peopleList:null
    }
    componentDidMount(){//метод виконує запит і витягує дані
        this.swapiServise.getAllPeople()
        .then(( peopleList)=>{
          // console.log(planetList)
            this.setState({
                peopleList
            }); //оновлюємо список
        });
   
  }
  renderItem(peopleList){
       // console.log(peopleList)
      return peopleList.map(({id, name}) => {
       
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
      const {peopleList}=this.state;

      if(!peopleList){
          return<Spinner/>;
     }
      const itemList=this.renderItem(peopleList);
      //console.log(itemList)
    return(
       <div className='item-list'>
             <ul className='list-group'>
                {itemList}
                </ul>
      </div>
    )
     
    }
   
}







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
  renderItem(planetList){
        console.log(planetList)
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
      const itemList=this.renderItem(planetList);
      console.log(itemList)
    return(
       <div className='item-list'>
             <ul className='list-group'>
                {itemList}
                </ul>
      </div>
    )
     
    }
   
}*/
    
    


    
    




/* <li className='list-group-item'>
                        <span className='tern'>Luck Skywalker</span>
                      
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>Darth Wader</span>
                       
                    </li>
                    <li className='list-group-item'>
                        <span  className='tern'>R2-D2</span>
                      
                    </li>  */