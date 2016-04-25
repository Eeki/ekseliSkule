import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import {data, stateProperty} from './data';

//Kun tulee uusi tila niin...
stateProperty.doLog("Logged state").onValue(function(state){
  ReactDOM.render( <App videoList={state}/>, document.getElementById('container'));
});