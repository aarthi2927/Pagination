import { useState } from "react";
import { countries } from "./App";
import './App.css';
export default function TableData({data1,setdata1}){
   const [currentPage,setCurrentPage]=useState(1);
   const [recordsperpage]=useState(10);
   const lastIndex=currentPage * recordsperpage;
   const firstIndex=lastIndex-recordsperpage;
   const records=data1.slice(firstIndex,lastIndex);
   const npage=Math.ceil(data1.length/recordsperpage);
   const numbers=[...Array(npage+1).keys()].map((num)=>num + 1);
   const handlePageChange = (numbers) => {
    setCurrentPage(numbers);
  }; 
   return(
        <div>
        <table>
        <tr>
            <th>id</th>
            <th>Country</th>
            <th>Continent</th>
        </tr>
   {records.map((item,index) => (
   <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
<td>{item.continent}</td>
</tr>
 ))}
 </table>
<div className="nav_button">
  
        <button
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage > 1 ? prevPage - 1 : prevPage
                )
              }
            >
              Previous
            </button>
{
    numbers.map((number)=>{
        <li key={number} className={`page-item ${currentPage === number ? 'active' :' '}`}>
            <button>{number}</button>
        </li>
    })
}
         <button 
              onClick={() =>
                setCurrentPage((prevPage) =>
                  prevPage < npage ? prevPage + 1 : prevPage
                )
              }
            >
              Next
            </button>
   
</div>
</div>

    )
}