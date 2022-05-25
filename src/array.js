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
                return changeColor(arr[win[0]])
            }
            if(arr[win[0]] =='O' && arr[win[1]] =='O' && arr[win[2]] =='O'){
                setState('O Victory')
            }})
            if(!arr.some((current) => {return current == ''})){
                setState('Tied')
            }
        };
    function changeColor(gameState){
        let color;
        if(gameState == 'X Victory' || gameState == 'O Victory'){
            color = 'green'
        }

        else if(gameState == 'Tied'){
            color = 'red'
        }
        return {color}
        
    }
    function myTurn(value, grid,arr){
        if(value == ''){
            if(gameState == 'default'){
            if(turn == 'X'){
                updateX(grid,arr)
                changeTurn()
                changeState()
            } else if(turn == 'O'){
                updateO(grid, arr)
                changeTurn()
                changeState()
            }}
        } 

    }
    function reset(){
        window.location.reload()
    }
    return (
        <div>
          <h1 className="title">Tic Tac Toe</h1>
          <div className='container'>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[0], 0,arr)}}>{arr[0]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[1], 1,arr)}}>{arr[1]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[2], 2,arr)}}>{arr[2]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[3], 3,arr)}}>{arr[3]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[4], 4,arr)}}>{arr[4]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[5], 5,arr)}}>{arr[5]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[6], 6,arr)}}>{arr[6]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[7], 7,arr)}}>{arr[7]}</button>
          <button style={changeColor(gameState)} className='item'onClick={()=>{myTurn(arr[8], 8,arr)}}>{arr[8]}</button>
          </div>
          <h3 className="turn">Turn: {turn}</h3>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      );
};

export default Grid;