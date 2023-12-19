import React, { useState } from 'react'
import './App.css'

import TableData from './table'
export const countries = [
  { id:"1",name: "Belgium", continent: "Europe" },
  {id:"2", name: "India", continent: "Asia" },
  {id:"3", name: "Bolivia", continent: "South America" },
  {id:"4", name: "Ghana", continent: "Africa" },
  {id:"5", name: "Japan", continent: "Asia" },
  {id:"6", name: "Canada", continent: "North America" },
  {id:"7", name: "New Zealand", continent: "Australasia" },
  {id:"8", name: "Italy", continent: "Europe" },
  {id:"9", name: "South Africa", continent: "Africa" },
  {id:"10", name: "China", continent: "Asia" },
  {id:"11", name: "Paraguay", continent: "South America" },
  {id:"12", name: "Usa", continent: "North America" },
  {id:"13", name: "France", continent: "Europe" },
  {id:"14", name: "Botswana", continent: "Africa" },
  {id:"15", name: "Spain", continent: "Europe" },
  {id:"16", name: "Senegal", continent: "Africa" },
  {id:"17", name: "Brazil", continent: "South America" },
  {id:"18", name: "Denmark", continent: "Europe" },
  {id:"19", name: "Mexico", continent: "South America" },
  {id:"20", name: "Australia", continent: "Australasia" },
  {id:"21", name: "Tanzania", continent: "Africa" },
  {id:"22", name: "Bangladesh", continent: "Asia" },
  {id:"23", name: "Portugal", continent: "Europe" },
  {id:"24", name: "Pakistan", continent:"Asia" },

];
function App() {
const [data1,setdata1]=useState(countries);
  return (
     <div classname='App'>
      <TableData data1={data1} setdata1={setdata1}/>
     </div>
)}
export default App