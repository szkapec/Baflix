import React from 'react'
import ReactPlayer from 'react-player';
import './responsive.css';
const ResponsivePlayer = () => {
    return (
       <div>
            <div className="react-player">
            <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A&t=2s"
                width="100vw"
                height="95vh"
                controls
                
                >
                
                
        </ReactPlayer>
        </div>
        <div>responcive?</div>
       </div>
        
    )
}

export default ResponsivePlayer;