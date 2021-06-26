import React from 'react';
import ReactDOM from 'react-dom';

import App from './Api';
import {AppContext} from './ContextTrial/AppContext';
import {AppFractals} from './Fractal/AppFractals'

ReactDOM.render(
  <React.StrictMode>
    <AppFractals />
  </React.StrictMode>,
  document.getElementById('root')
);


