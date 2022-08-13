import React, {useState} from 'react';
import './App.css';
import Time from './components/Time';
import Sorting from './components/Sorting';
import Button from './components/Button';
import {FlightFrom, FlightTo} from './components/Locations';
import data from './components/flights';

function App() {

  const[time, setTime] = useState('3');
  const[sort, setSort] = useState('shortest');
  const[from, setFrom] = useState('Indore');
  const[dest, setDest] = useState('Indore'); 
  const[content, setContent] = useState(()=>{
    return(
      <h1 className='text-2xl'><b>Choose Your Location</b></h1>
    )
  });

  const working = ()=>{

    let available = [];

    if(from !== dest){

      document.title = `${from} - ${dest}`;

      let checking = from + ' - ' + dest;
      console.log(checking);
      for(let flight of data){
        for(let i=0; i<flight.Travel.length; i++){
          if(flight.Travel[i].Locations === checking){
            let obj = {Name: flight.Name,
                      timeTaken: flight.Travel[i].Duration}
            available.push(obj);
            }
          }
        }
    }else{
       alert(`Both the Locations can't be same`);
    }

    if(sort === 'shortest'){
      available = [...available].sort((a, b)=> a.timeTaken - b.timeTaken);
    }else if(sort === 'longest'){
      available = [...available].sort((a, b)=> b.timeTaken - a.timeTaken);
    }

    if(available.length !== 0){
      setContent(()=>{
        return(
          <table>
            <caption><h2 className='text-2xl'><b>{from} - {dest}</b></h2></caption>
            <tr>
              <th>Flight Name</th>
              <th>Departure Time</th>
              <th>Arrival Time</th>
              <th>Duration</th>
            </tr>
            {available.map((element, index)=>(
            <tr key={index}>
              <td>{element.Name}</td>
              <td>{time + ":00"}</td>
              <td>{Number(time) + element.timeTaken + ":00"}</td>
              <td>{element.timeTaken + "h"}</td>
            </tr>
      ))}
          </table>
        )
      })
    }else if(available.length === 0 && from === dest){
      setContent(()=>{
        return(
          <h1 className='text-2xl'><b>Both the Locations can't be same.</b></h1>
        )
      })
    }else if(available.length === 0 && from !== dest){
      setContent(()=>{
        return(
          <h1 className='text-2xl'><b>Sorry. No flights available at the moment.</b></h1>
        )
      })
    }
  }

  return (
        <div id="container" className="flex flex-col justify-center items-center gap-y-4 mt-44">
    <div id="select1">
      <Time timeChange={(e)=>setTime(e.target.value)}/>
      <Sorting sortChange={(e)=>setSort(e.target.value)}/>
    </div>

    <div id="select2">
    <FlightFrom changeStart={(e)=>setFrom(e.target.value)}/>
    <FlightTo changeDest={(e)=>setDest(e.target.value)}/>
    </div>

    <div id="Buttons">
     <Button showDisplay={working} submitBtn = "Check Flights"/>
    </div>
    
    <div id="available" className="flex flex-col justify-center items-center mt-24">
      {content}
    </div>
  </div>
  )
}
   
export default App;