let winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]


winConditions.forEach((win)=>{
    if(array[win[0]] =='X' && array[win[1]] =='X' && array[win[2]] =='X'){
        console.log('X victory')
    }
}
)

