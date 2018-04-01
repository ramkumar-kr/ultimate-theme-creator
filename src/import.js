/* eslint-env webextensions */
import React from 'react';
import ReactDOM from 'react-dom';
import ImportApp from './components/ImportApp';
import ImportActions from "./components/ImportActions";

ReactDOM.render(
  <div  style={{textAlign: "center"}} >
    <ImportApp/>
    <ImportActions/>
    <br/>
  </div>,
  document.getElementById('root')
);

