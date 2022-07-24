import React from 'react';
import '../style/MainContent.css'
import VideoList from './VideoList'

function MainContent(props) {
     
    return (
        <main className='MainContent'>
            <div>
                <h3>Popular Music Videos</h3>
                <VideoList videoData={props.videoData} selectedVideoId={props.selectedVideoId}/>
            </div>
        </main>
    )
}

export default MainContent;