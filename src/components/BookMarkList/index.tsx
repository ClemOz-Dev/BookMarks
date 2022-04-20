import React from 'react';
import Card from '../Card';
import { BookMarkType } from '../../Types/BookMarkType';

import './bookMarkList.css';

interface BookMarkListProps {
  bookMarks: BookMarkType[];
  deleteBookMark: (event: React.MouseEvent<HTMLButtonElement>) => any;
}


const BookMarkList: React.FC<BookMarkListProps> = (props: BookMarkListProps) => (
  <div className='bookMarkList'>
    {props.bookMarks.map((bm, index) => (
      <div className='card-container'>       
        <Card
            key={bm.title}    
            thumbnail_url={bm.thumbnail_url}
            url={bm.url}
            title={bm.title}
            author_name={bm.author_name}
            app_date={bm.app_date}
            upload_date={bm.upload_date}
            duration={bm.duration}
            format={bm.format}  
        />
        <button type='button' className='delete-button' onClick={props.deleteBookMark} value={index}>X</button>
      </div>
        
    ))}
  </div>
);

export default BookMarkList;