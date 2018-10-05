import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'hover.css';
import './css/fonts.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import 'jquery/src/jquery';
import { Provider } from 'react-redux';

import store from './store'

let $el:any;
let elHeight:number;
let elWidth:number;
let $wrapper;

$(()=>{
  $wrapper = $("#root")
  $el=$("#app")

  elHeight = $el.outerHeight();
  elWidth = $el.outerWidth();

  const starterData = { 
    size: {
      height: $wrapper.height(),
      width: $wrapper.width(),
    }
  }

  doResize(null, starterData);
})


function doResize(event:any, ui:any) {
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  if(!elWidth || !elHeight || !windowWidth || !windowHeight ) {
    return;
  }
  
  console.log(elWidth, windowWidth, elHeight, windowHeight);
  const scale = Math.min(
    windowWidth / 1024,    
    windowHeight / 768
  );

  console.log(scale);
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scale + ")"
  });
  
}

$(window).resize(doResize);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
