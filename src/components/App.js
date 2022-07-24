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
  const [show, setShow] = useState(true)
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
    }
    
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage onSearch={onSearch} />} />
        <Route path="/home" element={<HomePage onSearch={onSearch} />} />
        <Route path="/results" element={<SearchResult onSearch={onSearch} videoData={state.videoMetaInfo} handleClick={handleClick} show={show}/>} />
        <Route path="/results/:id" element={<VideoPlayer  handleClick={handleClick} allVideoData={state} show={show} onSearch={onSearch}/> } />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}


