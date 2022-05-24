import React, { useState } from "react";
let array = ['','','','','','','','','']
function updateX(pos,arr){
    arr.splice(pos,1,'X')
}

function updateO(pos,arr){
    arr.splice(pos,1,'O')
}

let [turn, setTurn] = useState('X')
function changeTurn(){
    if(turn == 'X'){
        setTurn('O')
    } else if(turn == 'O'){
        setTurn('X')
    };
};


