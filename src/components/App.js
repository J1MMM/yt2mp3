import React, {useState} from 'react';
import HomePage from '../pages/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import youtubeApi from '../api/youtube'
import SearchResult from '../pages/SearchResult';
import Footer from './Footer';
import Header from './Header';
import VideoPlayer from '../pages/VideoPlayer';
export default function App() {
  const [show, setShow] = useState(false)
  const [state, setState] = useState(
    {
      videoMetaInfo: [],
      selectedVideo: null,
      videoId: null,
      videoTitle: null,
      videoChannel: null,
      videoDescription: null,
    }
    )
    function handleClick(data){
      setState(prevState=>(
        {
          ...prevState,
          videoId: data.id.videoId,
          videoTitle: data.snippet.title,
          videoChannel: data.snippet.channelTitle,
          videoDescription: data.snippet.description
        }
        ))
    }
    async function onSearch(keyword){  
      const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    
    setState(prevState =>
      ({
        ...prevState,
        videoMetaInfo: response.data.items
      })
      )
      setShow(true)
    }
    
  return (
    <Router>
      <Header handleSearch={onSearch} show={show}/>
      <Routes>
        <Route path="/" element={<HomePage onSearch={onSearch} show={!show}/>} />
        <Route path="/results" element={<SearchResult videoData={state.videoMetaInfo} handleClick={handleClick}/>} />
        <Route path="/results/:id" element={<VideoPlayer  handleClick={handleClick} allVideoData={state}/> } />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}


