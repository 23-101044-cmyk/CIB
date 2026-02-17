import React from 'react';
import './s2cards.css';

const S2Card = ( props ) => {
  return (
    <div className={props.cardstyle}>
      <img className='cardimg' src={props.image} alt="" />
      <h4 className='cardtitl'>{props.title}</h4>
      <p className='cardp'>{props.text6}</p>
      <h5 className='readmore'>Read more</h5>
    </div>
  );
};

export default S2Card;
