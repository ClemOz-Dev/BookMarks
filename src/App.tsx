import React, {useState, useEffect} from 'react';
import {Header} from './components/Header';
import Main from './components/Main';
import './App.css';
import BookMark from './Models/BookMark';

function App() { 
  const [bookMarks, setBookMarks] = useState<BookMark[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const StorageBookMarks = JSON.parse(localStorage.getItem('bookMarks'));
    if (StorageBookMarks) {
      const restoredBookMarks = [];
      StorageBookMarks.map(bm => (restoredBookMarks.push(BookMark.createBM(bm))));

      if(restoredBookMarks.length>0){
        setBookMarks(restoredBookMarks);
      }   
    }
  }, []);

  async function createBookMark(data: object){   
    let newBookMark = await BookMark.createBM(data);
    let tempBookMarks = bookMarks;
    tempBookMarks = [...tempBookMarks, newBookMark];
    await setBookMarks(tempBookMarks);    
    await localStorage.setItem('bookMarks', JSON.stringify(tempBookMarks));
  }

   function deleteBookMark(e: React.MouseEvent<HTMLButtonElement>){
    let tempBookMarks = bookMarks;
    let currentIndex = parseInt(e.currentTarget.value);
    if (currentIndex > -1) {
      tempBookMarks.splice(currentIndex, 1);
    }
    tempBookMarks = [...tempBookMarks];
    setBookMarks(tempBookMarks);    
    localStorage.setItem('bookMarks', JSON.stringify(tempBookMarks));
  }

  return (
    <div className="App">
      <Header setLoading={setLoading} createBookMark={createBookMark}/>
      <Main deleteBookMark={deleteBookMark} loading={loading} bookMarks={bookMarks} />
    </div>
  );
}

export default App;
