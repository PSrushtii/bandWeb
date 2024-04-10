import React from 'react';
import './Card.css';
import CardItem from './CardItem';
import Albums from './Albums';
import tour from './tour';


function Cards() {


  return (
    <>
    <Albums/>
    <div className='cards' id='proj'>
      <h1>Albums</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/food1.jpg'
              text='UP ALL NIGHT'
              des='2011'
              link= 'https://open.spotify.com/album/6cunQQ7YZisYOoiFu2ywIq'
            />
            <CardItem 
              src='images/food2.png'
              text='TAKE ME HOME'
              des='2012'
              link = 'https://open.spotify.com/album/2sWX3HYnZjPZ9MrH6MFsBt'
            />
            <CardItem
              src='images/food3.jpg'
              text='MIDNIGHT MEMORIES'
              des='2013 '
              link = 'https://open.spotify.com/album/7p1fX8aUySrBdx4WSYspOu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/food4.jpg'
              text='FOUR'
              des='2014'
              link= 'https://open.spotify.com/album/4gCNyS7pidfK3rKWhB3JOY'
            />
            <CardItem
              src='images/food5.jpg'
              text='MADE IN AM'
              des='2015'
              link= 'https://open.spotify.com/album/1gMxiQQSg5zeu4htBosASY'
            />
            
          </ul>
        </div>
      </div>
    </div>

    </>
  );
}

export default Cards;