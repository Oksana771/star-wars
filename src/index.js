import React from 'react'
import ReactDom from 'react-dom';
import App from './components/app';

import './bootstrap.min.css'

ReactDom.render(<App/>,document.getElementById('root'))
/*const { getRoles } = require("@testing-library/react");

const getRsource=async()=>{
  const res=await fetch(url);
  const body=await res.json();
  return body
}
//getRoles('http https://swapi.dev/api/people/1/')

 const getAllPeople=()=>{
   const people=getRsource('http https://swapi.dev/api/people/');

 }*/
