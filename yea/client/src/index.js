var React = require('react');
var ReactDOM = require('react-dom');

window.onload = function(){

  var appDiv = document.getElementById('app');

  var header =  <h1>Hello World</h1>

  ReactDOM.render(header, appDiv);

  console.log("webpack app started")
};
