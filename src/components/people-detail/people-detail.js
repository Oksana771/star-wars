import React, { Component } from 'react';
import SwapiService from '../../services/services';
import './people-detail.css';
//import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';

export default class PeopleDatail extends Component{
    swapiService=new SwapiService();
   state={
        people:null,
        hasError:false
    }
    componentDidMount(){
        this.updataPeople();
    }
    componentWillUnmount(){//використовуємо для очистки або видалення даних
        clearInterval(this.interval)
    }
    componentDidUpdate(prevProps){//оновлює попередній props,використовуємо коли міняються дані
        if(this.props.peopleId!==prevProps.peopleId){
            this.updataPeople();
        }

    }
    componentDidCatch
    updataPeople=()=>{
        const {peopleId}=this.props;
        if(!peopleId){
            return;
        }
      /*  this.swapiService.getPeople(peopleId)
        .then((people)=>{
            this.setState({people})
          
        })*/
    }
    render(){
        if(!this.state.people){
            return <span>Selected People</span>
        }
        const {name,id,gender,birthYear,eyeColor,hairColor,height,mass }=this.state.people
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return(
            <div className='people-detail jumbotron rounded'>
            <img className='people-image' 
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt=''/>
            <div>
            <h4>
               {name}
            </h4>
            

            <ul className='list-group'>
                <li className='list-group-item'>
                    <span className='tern'>Gender: </span>
        <span >{gender}</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Birth Year: </span>
        <span>{birthYear}</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Eye color: </span>
                    <span>{eyeColor}</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Hair color: </span>
                    <span>{hairColor}</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Height: </span>
                    <span>{height}</span>
                </li>
                <li className='list-group-item'>
                    <span  className='tern'>Mass: </span>
                    <span>{mass}</span>
                </li>
            </ul>
           
            </div> 
        </div>
        )
        
    }
}