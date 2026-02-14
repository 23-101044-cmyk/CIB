import React from 'react';
import './s2cards.css';

const S2Card = ({ image, title, text6 }) => {
  return (
    <div className='cardcont2'>
      <img className='cardimg' src={image} alt="" />
      <h4 className='cardtitl'>{title}</h4>
      <p className='cardp'>{text6}</p>
      <h5 className='readmore'>Read more</h5>
    </div>
  );
};

export default S2Card;
