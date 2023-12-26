// App.js
import React, { useState } from 'react';
import VideoList from './VideoList';
import videosData from './videosData'; 
import './App.css'; 

const App = () => {
  const [filterText, setFilterText] = useState('');

  return (
    <div className="app-container">
      <h1>Video Playlist</h1>
      <input
        type="text"
        placeholder="Enter text to filter video"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filterText && <VideoList videos={videosData} filterText={filterText} />}
    </div>
  );
};

export default App;

