import React from 'react';
import '../style/VideoPlayer.css'
import { useParams, useNavigate } from 'react-router';
import Header from '../components/Header';

export default function VideoPlayer(props){
    const list = props.allVideoData.videoMetaInfo.length === 0 ? props.videoPlayList : props.allVideoData.videoMetaInfo 

    let { id }= useParams();
    const navigate= useNavigate();
    const videoSrc = `https://www.youtube.com/embed/${id}`;
    const videoListElements = list.map(data=>{
        function videoClicked(data){
            props.handleClick(data)
            navigate(`/yt2mp3/results/${props.allVideoData.videoMetaInfo.length === 0 ? data.snippet.resourceId.videoId : data.id.videoId}`)
        }

        return(
            <div key={data.etag} className='videoList-container' onClick={() =>videoClicked(data)}>
                <img src={data.snippet.thumbnails.high.url} alt='' />
                <div>
                    <h3>{data.snippet.title}</h3>
                    <p>{data.snippet.channelTitle} • <span>{data.snippet.publishTime}</span></p>
                </div>
            </div>
        )
    })

    return (  
        <div className='video-player-main-container'>
            <Header show={props.show} style={{width: "100%"}} handleSearch={props.onSearch} / >
            <div className='video-player-container'>
                <div className='video-items-container'>
                    <iframe src={videoSrc || props.videoSrc} allowFullScreen title="Video player" className='video-player'/>
                    <button>Download mp3</button>
                    <h3 className='title'>{props.allVideoData.videoTitle}</h3>
                    <p className='channel'>{props.allVideoData.videoChannel}</p>
                    <small className='description'>{props.allVideoData.videoDescription}</small>
                </div>
                <div className='video-sidebar-container'>
                    {videoListElements}
                </div>
            </div>
        </div>
    )
}

