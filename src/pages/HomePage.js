import React from 'react';
import Search from '../components/Search'
import '../style/Homepage.css';
import Header from '../components/Header'
import { useNavigate } from 'react-router';

export default function HomePage(props) {
  const navigate= useNavigate();

  const playlistElements = props.videoPlayList.map(data =>{
    function videoClicked(data){
      props.handleClick(data)
      navigate(`/yt2mp3/results/${data.snippet.resourceId.videoId}`)
  }

    return(
      <div className="homepage-playlist-container" key={data.etag} onClick={() =>videoClicked(data)}>
            <img className='playlist-thumbnails' id={data.id.videoId} src={data.snippet.thumbnails.medium.url} alt={data.snippet.description}/>
            <div className="playlist-info-container">
                <h3>{data.snippet.title}</h3>
                <p>{data.snippet.channelTitle}</p>
            </div>
      </div>
    )
  })

  console.log(props.videoPlayList)
  
  return (
    <div className="Homepage-container">
      <Header />
      <Search handleSearch={props.onSearch}/>
      <div className='homepage-playlist-main-container'>
        {playlistElements}
      </div>
    </div>
  );
}


