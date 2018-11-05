import React, { useReducer } from 'react';
import './App.css';
import DragAndDrop from './components/DrapAndDrop';
import TimelapsePlayer from './components/TimelapsePlayer';

const reducer = (state, action) => {
  switch (action.type) {
    default:
    case 'RESET':
      return {images: null};
    case 'SET_IMAGES':
      return {images: action.payload};
  }
}

const App = () => {
  const initialState = {
    images: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header" onClick={()=> dispatch({ type: 'RESET' })}>
        <h1 className="App-title">Welcome to Timelaps JS</h1>
      </header>
      {!state.images &&
        <div>
          <p className="App-intro">
            This application allow you to view and create timelaps videos. Follow the next steps to visualize one.
          </p>
          <p className="App-intro">
            Step 1: Drag and drop your timelapse images below.
          </p>
          <DragAndDrop onDropFiles={(files) => dispatch({ type:'SET_IMAGES', payload: files })} />
        </div>
      }
      {state.images &&
        <div>
          <p className="App-intro">
            Step 2: Choose your timelaps intervals.
          </p>
          <TimelapsePlayer images={state.images} />
        </div>
      }
    </div>
  );
};

export default App;
