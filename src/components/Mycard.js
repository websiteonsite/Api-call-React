import React from 'react';
import './Mycard.css';

const Mycard = (props) => {
  return (
    <div>
       <div className='mycard'>Mycard No. {props.cardno}</div>
    </div>
  )
}

export default Mycard;
