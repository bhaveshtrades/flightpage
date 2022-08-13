import React from 'react';

function Button(props) {
  return (
    <button onClick={props.showDisplay} className='bg-white rounded-md w-44 text-center mt-4 ml-16 hover:bg-gray-400 text-lg'><b>{props.submitBtn}</b></button>
  )
}

export default Button;