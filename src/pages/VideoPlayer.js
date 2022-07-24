import React from 'react';
import '../style/VideoPlayer.css'
import { useParams, useNavigate } from 'react-router';

export default function VideoPlayer(props){
    let { id }= useParams();
    const navigate= useNavigate();
    const videoSrc = `https://www.youtube.com/embed/${id}`;
    console.log(props.allVideoData.videoMetaInfo)
    
    const videoListElements = props.allVideoData.videoMetaInfo.map(data=>{
        function videoClicked(data){
            props.handleClick(data)
            navigate(`/results/${data.id.videoId}`)
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
            <div className='video-player-container'>
                <div className='video-items-container'>
                    <iframe src={videoSrc} allowFullScreen title="Video player" className='video-player'/>
                    <button>Download mp3</button>
                    <h3>{props.allVideoData.videoTitle}</h3>
                    <p>{props.allVideoData.videoChannel}</p>
                    <small>{props.allVideoData.videoDescription}</small>
                </div>
                <div className='video-sidebar-container'>
                    {videoListElements}
                </div>
            </div>
        </div>
    )
}

