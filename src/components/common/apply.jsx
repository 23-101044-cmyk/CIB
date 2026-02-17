import React from 'react';
import './apply.css'

const apply = (props) => {
    return ( <>
    <div className='applydiv'>
        <img className='iconapply' src={props.icon1} alt="" />
        <h1 className='applytext'>{props.text7}</h1>
        
    </div>
    </> );
}
 
export default apply;