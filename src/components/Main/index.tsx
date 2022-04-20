import React from 'react';
import BookMark from '../../Models/BookMark';
import BookMarkList from '../BookMarkList';
import './main.css';

interface IMainProps {
  bookMarks: BookMark[];
  loading: boolean;
  deleteBookMark: (event: React.MouseEvent<HTMLButtonElement>) => any;
}
function Main(props: IMainProps) {
 
  return (
    <div className="main">    
      {props.bookMarks.length <= 0 ? <h1>No bookmark yet. Try to had one ! :)</h1> : (
        <>
          <h1>Your BookMarks</h1>
         {props.loading && <div className='loading'>
            <div className='loader'></div>
          </div>}
          <BookMarkList deleteBookMark={props.deleteBookMark} bookMarks={props.bookMarks} />
        </>       
      )
     }      
    </div>
  );
}

export default Main;
