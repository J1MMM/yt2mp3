import React, {useEffect, useState} from 'react';
import HomePage from '../pages/HomePage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage';
import youtubeApi from '../api/youtube'
import SearchResult from '../pages/SearchResult';
import Footer from './Footer';
import VideoPlayer from '../pages/VideoPlayer';
export default function App() {
  const show = true;
  const [videoSrc, setVideoSrc] = useState({id: []})
  const [videoPlayList, setVideoPlayList] = useState({playlist: []})
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
      setVideoSrc({id: data.id.videoId})
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
    
    async function getVideoList(){
        const list = await youtubeApi.get("/playlistItems",{
        params: {
          playlistId: 'PL6k9a6aYB2zk0qSbXR-ZEiwqgdHymsRtQ'
          }
        })
        setVideoPlayList(prev =>
          ({
            playlist: list.data.items
          }))
      }

      useEffect(()=>{
        getVideoList();
      }, [0])
  return (
    <Router>
      <Routes>
        <Route path="/yt2mp3" element={<HomePage videoPlayList={videoPlayList.playlist} onSearch={onSearch} handleClick={handleClick}/>} />
        <Route path="/yt2mp3/home" element={<HomePage videoPlayList={videoPlayList.playlist} onSearch={onSearch} handleClick={handleClick} />} />
        <Route path="/yt2mp3/results" element={<SearchResult onSearch={onSearch} videoData={state.videoMetaInfo} handleClick={handleClick} show={show}/>} />
        <Route path="/yt2mp3/results/:id" element={<VideoPlayer  handleClick={handleClick} allVideoData={state} show={show} onSearch={onSearch} videoSrc={videoSrc} videoPlayList={videoPlayList.playlist}/> } />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </Router>
  );
}


