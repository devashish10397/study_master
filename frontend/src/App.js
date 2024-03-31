import React from 'react';
import logo from './S.png';
import './App.css';
import VideoSummaryForm from './VideoSummaryForm'; // Import the VideoSummaryForm component

function App() {
  return (
    <div className="App" >
      <header className="App-header">
          <div className="text">
            <p>
              <code style={{ color: '#1877F2', fontSize: '14px', }}>
                Enter the URL of a YouTube video or a upload file to summarize.
              </code>
            </p>
          </div>
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <VideoSummaryForm /> {/* Include the VideoSummaryForm component */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
