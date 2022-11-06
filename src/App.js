import React from 'react';
import Header from './component/Header';

export default function App(){

  function changeColor(){
    document.querySelector('.btn').style.backgroundColor = "red";
  }
  return(
    <div>
    <Header />
    <button onClick={changeColor} className="btn"> Click </button>
    </div>
  )
}