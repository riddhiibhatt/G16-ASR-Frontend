// Video.js
import React from 'react';
import ReactPlayer from 'react-player';

const Video = ({ title, url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <ReactPlayer controls={true} url={url} height="300px" width="500px" />
    </div>
  );
};

export default Video;
