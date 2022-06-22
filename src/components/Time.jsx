import React from 'react';

function Time(props) {
  return (
    <>
      <label htmlFor="time"><b>Time: </b></label>
      <select name="time" id='time' onChange={props.timeChange} className='rounded-md text-center mr-8 text-base'>
        <option value={"3"}>3:00</option>
        <option value={"6"}>6:00</option>
        <option value={"9"}>9:00</option>
        <option value={"12"}>12:00</option>
        <option value={"15"}>15:00</option>
      </select>
    </>
  )
}

export default Time;