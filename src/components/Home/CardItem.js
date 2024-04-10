import React from 'react';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
        <a href={props.link} className='cards__item__anchor'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Food'
              loading='lazy'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p style={{fontStyle:'italic' , fontSize:'0.8rem'}}>{props.des}</p>
          </div>
          </a>
        </div>
      </li>
    </>
  );
}

export default CardItem;