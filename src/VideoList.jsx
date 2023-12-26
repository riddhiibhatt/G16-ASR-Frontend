import React, { useState, useEffect } from 'react';
import Video from './Video';

const VideoList = ({ videos, filterText }) => {
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    // Filter videos based on the text input
    const filteredVideos = videos.filter(video =>
      video.title.toLowerCase() === filterText.toLowerCase()
    );
  
    // Set the current video to the first matching video (or null if not found)
    setCurrentVideo(filteredVideos.length > 0 ? filteredVideos[0] : null);
  }, [filterText, videos]);
  
  return (
    <div>
      {currentVideo && <Video title={currentVideo.title} url={currentVideo.url} />}
    </div>
  );
};

export default VideoList;
