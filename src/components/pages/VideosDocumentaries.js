import React from 'react';
import '../../App.css';
import ReactPlayer from "react-player"

function VideosDocumentaries() {
    return <div className="VideosDocumentaries">
            <div className = "ReactPlayer">
             <h1>Plastic Polution Videos </h1> 
            <ReactPlayer className="VideoPlayer" url="https://www.youtube.com/watch?v=IA9O9YUbQew" />
        </div>
        <div className="ReactPlayer">
            <h1>Plastic Polution Videos </h1>
            <ReactPlayer className="VideoPlayer" url="https://www.youtube.com/watch?v=HQTUWK7CM-Y" />
        </div>
        <div className="ReactPlayer">
            <h1>Plastic Polution Videos </h1>
            <ReactPlayer className="VideoPlayer" url="https://www.youtube.com/watch?v=Yomf5pBN8dY" />
        </div>
        
    <div className="ReactPlayer">
            <h1>Plastic Polution Documentary
                </h1>
            <ReactPlayer className="VideoPlayer" url="https://www.youtube.com/watch?v=9-dpv2xbFyk" />
        </div>

     </div>
 
}
export default VideosDocumentaries; 