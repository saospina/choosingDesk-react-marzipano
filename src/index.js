import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import panoData from './utils/panoData';
import { Pano } from './Pano';



ReactDOM.render(
  <Pano
    settings={panoData.settings}
    scenes={panoData.scenes}
  />,
  document.getElementById('root')
);
