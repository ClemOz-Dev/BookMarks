import React from 'react';
import { BookMarkType } from '../../Types/BookMarkType';
import Tools from '../../tools';

import './card.css';

interface CardProps extends BookMarkType { 
  thumbnail_url: string,
  url: string,
  title: string,
  author_name: string,
  app_date: Date,
  upload_date?: string,
  duration?: string | null
  format?: string | null 
}


const Card: React.FC<CardProps> = (props: CardProps) => (
  <div className='card'>
    <div className='top' style={{backgroundImage: `url(${props.thumbnail_url})`}}>      
        <p>{Tools.getTimeDiff(props.app_date)}</p>
        <p>{props.format}</p>
      </div>
      <div className='bottom'>
        <div className='info'>
          <a className='title' href={props.url} target="_blank" rel="noreferrer">{props.title}</a>
          <p className='author_name'>{props.author_name}</p>
          <p className='upload_date'>{Tools.dateParser(props.upload_date)}</p> 
        </div>        
      </div>   
  </div>
);

export default Card;