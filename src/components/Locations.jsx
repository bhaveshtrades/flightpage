import React from 'react';

function FlightFrom(props){
  return (
    <>
    <label htmlFor="from"><b>From: </b></label>
        <select name="from" id="from" onChange={props.changeStart} className='rounded-md text-center mr-8 text-base'>
            <option value={"Indore"}>Indore</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Bangalore"}>Bangalore</option>
            <option value={"Mizoram"}>Mizoram</option>
        </select>
    </>
  )
}

function FlightTo(props){
    return (
        <>
        <label htmlFor="destination"><b>To: </b></label>
        <select name="destination" id="destination" onChange={props.changeDest} className='rounded-md text-center text-base'>
        <option value={"Indore"}>Indore</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Bangalore"}>Bangalore</option>
            <option value={"Mizoram"}>Mizoram</option>
        </select>
        </>
    )
    
}

export {
    FlightFrom,
    FlightTo
}
