var React = require('react');
var ReactDOM = require('react-dom');

window.onload = function(){

  var appDiv = document.getElementById('app');

  var header =  <p>is this font Roboto?</p>

  ReactDOM.render(header, appDiv);

  console.log("webpack app started")
};
