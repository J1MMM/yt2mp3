import React from 'react';
import Search from '../components/Search'
import '../style/Homepage.css';
import Header from '../components/Header'
export default function HomePage(props) {

  return (
    <div className="Homepage-container">
      <Header />
      <Search handleSearch={props.onSearch}/>
    </div>
  );
}


