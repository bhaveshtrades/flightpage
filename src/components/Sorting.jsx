import React from 'react';

function Sorting(props) {
  return (
    <>
      <label htmlFor="sort"><b>Sort By: </b></label>
      <select name="sort" id="sort" onChange={props.sortChange} className='rounded-md text-center text-base'>
        <option value={"shortest"}>Shortest to Longest</option>
        <option value={"longest"}>Longest to Shortest</option>
      </select>
    </>
  )
}

export default Sorting