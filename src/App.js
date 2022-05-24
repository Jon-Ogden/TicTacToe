import './App.css';

import React, { useState } from "react";
let array = ['X','O','','','X','','O','','']
function updateX(pos,arr){
    arr.splice(pos,1,'X')
}

function updateO(pos,arr){
    arr.splice(pos,1,'O')
}

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='container'>
      <button className='item'>{array[0]}</button>
      <button className='item'>{array[1]}</button>
      <button className='item'>{array[2]}</button>
      <button className='item'>{array[3]}</button>
      <button className='item'>{array[4]}</button>
      <button className='item'>{array[5]}</button>
      <button className='item'>{array[6]}</button>
      <button className='item'>{array[7]}</button>
      <button className='item'>{array[8]}</button>
      </div>
      <h3>Turn:</h3>
    </div>
  );
}

export default App;
