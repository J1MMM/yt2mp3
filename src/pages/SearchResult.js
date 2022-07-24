import React from "react";
import Header from "../components/Header";
import VideoList from "../components/VideoList";
import '../style/SearchResult.css'
const style = {
    width: "100%"
}
export default function SearchResult(props){
    return(
        <div className="video-list-main-container" >
            <Header handleSearch={props.onSearch} show={props.show} style={style}/>
             <VideoList videoData={props.videoData} handleClick={props.handleClick}/>
        </div>
    )
}