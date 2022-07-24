import React from 'react';
import Search from '../components/Search'
import '../style/App.css';

export default function HomePage(props) {

  return (
    <div className="App">
      <Search handleSearch={props.onSearch} show={props.show}/>
    </div>
  );
}


