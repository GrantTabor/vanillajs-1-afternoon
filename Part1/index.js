let gameArr = [];
let player = document.getElementById("player").innerHTML;


function play(clickedID){
    gameArr[clickedID] = player;
    document.getElementById(clickedID).innerText = player;

    if (player === "X"){
        player = "O";
        document.getElementById("player").innerHTML = player;
    }
    else{
        player = "X";
        document.getElementById("player").innerHTML = player;
    }
    
    
    checkTicTacToe(gameArr);
}

function checkTicTacToe(gameArr){
    let topLeft = gameArr[0];
    let topMiddle = gameArr[1];
    let topRight = gameArr[2];
    let middleLeft = gameArr[3];
    let middleMiddle = gameArr[4];
    let middleRight = gameArr[5];
    let bottomLeft = gameArr[6];
    let bottomMiddle = gameArr[7];
    let bottomRight = gameArr[8];

    let boardFull = true;
    console.log(gameArr);
    for (let i = 0; i < 9; i++){
        if(gameArr[i] == undefined){
            boardFull = false;
        }
    } //am I crazy or is this too many else ifs?
    if (topLeft !== undefined && topLeft == topMiddle && topLeft == topRight){
        window.alert("winner");
    }
    else if (middleLeft !== undefined && middleLeft == middleMiddle && middleLeft == middleRight){
        window.alert("winner");
    }
    else if (bottomLeft !== undefined && bottomLeft == bottomMiddle && bottomLeft == bottomRight){
        window.alert("winner");
    }
    else if (topLeft !== undefined && topLeft == middleMiddle && topLeft == bottomRight){
        window.alert("winner");
    }
    else if (bottomLeft !== undefined && bottomLeft == middleMiddle && bottomLeft == topRight){
        window.alert("winner");
    }
    else if (topLeft !== undefined && topLeft == middleLeft && topLeft == bottomLeft){
        window.alert("winner");
    }
    else if (topMiddle !== undefined && topMiddle == middleMiddle && topMiddle == bottomMiddle){
        window.alert("winner");
    }
    else if (topRight !== undefined && topRight == middleRight && topRight == bottomRight){
        window.alert("winner");
    }
    else if (boardFull == true){
        window.alert("CATS");
    }

}

function reset(){
    for (let i = 0; i < 9; i++){
        gameArr[i] = undefined;
        document.getElementById(i).innerText = '';
    }
    document.getElementById("player").innerHTML = "X";

}