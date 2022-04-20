import React, {ChangeEvent, FormEvent, useState} from 'react';
import BookMarkService  from '../../services/bookMarkService';

import './header.css';

interface HeaderProps {
  createBookMark: (data) => any;
  setLoading: (value) => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [value, setValue] = useState<string>('');
  
  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);    
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(value.length < 1){
      return false;
    }
    props.setLoading(true);
    let response = await BookMarkService.fetchData(value);
    props.setLoading(false);
    props.createBookMark(response);    
  }


  return (
    <div className="header">
      <img src={process.env.PUBLIC_URL + '/klaxoon.png'} alt='Klaxoon logo' />
      <form className='field' onSubmit={handleSubmit}>
        <input
            type="text"
            value={value}
            onChange={onChange}
            aria-label="Identifiant input"
            placeholder="Recherche..."
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
}

export {Header};
