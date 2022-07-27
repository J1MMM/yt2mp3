import React from "react";
import '../style/VideoList.css'
import { useNavigate} from "react-router";

export default function VideoList(props){
    const navigate = useNavigate();
    
    function videoClicked(videoDataSelected){
        props.handleClick(videoDataSelected);
        navigate(`/yt2mp3/results/${videoDataSelected.id.videoId}`)
    }

    const videoElements = props.videoData.map(data =>{
        return (
            <div className="video-list-container" key={data.etag} onClick={()=>videoClicked(data)}>
                <img className='video-thumbnails' id={data.id.videoId} src={data.snippet.thumbnails.medium.url} alt={data.snippet.description}/>
                <div className="info">
                    <h3>{data.snippet.title}</h3>
                    <p>{data.snippet.channelTitle} • <span>{data.snippet.publishTime}</span></p>
                    <small>{data.snippet.description}</small>
                </div>
            </div>
        )
    })
    return(
        <div className="video-list-main-container" >
           {videoElements}
        </div>
    )
}