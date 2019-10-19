import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.css';
//import data from "./miserables";
import mbaData from "./mba_med";

ReactDOM.render(
  <App
    width={window.screen.availWidth}
    height={window.screen.availHeight}
    graph={mbaData} />,
  document.getElementById('root')
);
