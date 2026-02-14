import React from 'react';
import './apply.css'

const apply = ({icon1, text7}) => {
    return ( <>
    <div className='applydiv'>
        <img className='iconapply' src={icon1} alt="" />
        <h1 className='applytext'>{text7}</h1>
        
    </div>
    </> );
}
 
export default apply;