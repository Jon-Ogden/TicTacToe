import React, { useState } from "react";
let array = ['','','','','','','','','']
function updateX(pos,arr){
    arr.splice(pos,1,'X')
}

function updateO(pos,arr){
    arr.splice(pos,1,'O')
}





const Grid = ({arr})=>{
    let [turn, setTurn] = useState('X')
    function changeTurn(){
        if(turn === 'X'){
            setTurn('O')
        } else if(turn === 'O'){
            setTurn('X')
        };
    };
    function myTurn(value, grid,arr){
        if(value == ''){
            if(turn == 'X'){
                updateX(grid,arr)
                changeTurn()
            } else if(turn == 'O'){
                updateO(grid, arr)
                changeTurn()
            }
        } 
    }
    return (
        <div>
          <h1>Tic Tac Toe</h1>
          <div className='container'>
          <button className='item'onClick={()=>{myTurn(arr[0], 0,arr)}}>{arr[0]}</button>
          <button className='item'onClick={()=>{myTurn(arr[1], 1,arr)}}>{arr[1]}</button>
          <button className='item'onClick={()=>{myTurn(arr[2], 2,arr)}}>{arr[2]}</button>
          <button className='item'onClick={()=>{myTurn(arr[3], 3,arr)}}>{arr[3]}</button>
          <button className='item'onClick={()=>{myTurn(arr[4], 4,arr)}}>{arr[4]}</button>
          <button className='item'onClick={()=>{myTurn(arr[5], 5,arr)}}>{arr[5]}</button>
          <button className='item'onClick={()=>{myTurn(arr[6], 6,arr)}}>{arr[6]}</button>
          <button className='item'onClick={()=>{myTurn(arr[7], 7,arr)}}>{arr[7]}</button>
          <button className='item'onClick={()=>{myTurn(arr[8], 8,arr)}}>{arr[8]}</button>
          </div>
          <h3>Turn: {turn}</h3>
        </div>
      );
};

export default Grid;