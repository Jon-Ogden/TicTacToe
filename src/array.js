import React, { useState } from "react";
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
    let [gameState, setState] = useState('default')
    let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    function changeState(){
        winConditions.forEach((win)=>{
            if(arr[win[0]] =='X' && arr[win[1]] =='X' && arr[win[2]] =='X'){
                setState('X Victory')
            }
            if(arr[win[0]] =='O' && arr[win[1]] =='O' && arr[win[2]] =='O'){
                setState('O Victory')
            }})
            if(!arr.some((current) => {return current == ''})){
                setState('Tied')
            }
        };
    function myTurn(value, grid,arr){
        if(value == ''){
            if(turn == 'X'){
                updateX(grid,arr)
            } else if(turn == 'O'){
                updateO(grid, arr)
            }
        } 
        changeTurn()
        changeState()
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