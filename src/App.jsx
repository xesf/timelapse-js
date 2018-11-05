import React, { useState } from 'react';
import './App.css';
import DragAndDrop from './components/DrapAndDrop';
import TimelapsePlayer from './components/TimelapsePlayer';

const App = () => {
  const [images, setImages] = useState();

  const handleOnDropFiles = (files) => {
    setImages(files);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Timelaps JS</h1>
      </header>
      {!images &&
        <div>
          <p className="App-intro">
            This application allow you to view and create timelaps videos. Follow the next steps to visualize one.
          </p>
          <p className="App-intro">
            Step 1: Drag and drop your timelapse images below.
          </p>
          <DragAndDrop onDropFiles={handleOnDropFiles} />
        </div>
      }
      {images &&
        <div>
          <p className="App-intro">
            Step 2: Choose your timelaps intervals.
          </p>
          <TimelapsePlayer images={images} />
        </div>
      }
    </div>
  );
};

export default App;
