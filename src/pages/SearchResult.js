import React from "react";
import VideoList from "../components/VideoList";

export default function SearchResult(props){
    return(
        <div className="video-list-main-container" >
             <VideoList videoData={props.videoData} handleClick={props.handleClick}/>
        </div>
    )
}