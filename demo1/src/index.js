import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
/*root.render(
    <App />
);*/
/*const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));*/

function generateJSX(){
  return <h1>Hello World</h1>;
}

function display(){
  return (
    <div>
      This is inside the div {/*generateJSX()*/} {generateJSX1()}
      This after the h1 tag
    </div>
  );
}

function generateJSX1(){
  var jsxArr = [];
  for(let i = 0; i < 3; i++){
    jsxArr.push(<h1>Hello World!</h1>)
  }
  return jsxArr;
}
ReactDOM.render(display(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
