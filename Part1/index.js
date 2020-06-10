let gameArr = [];
let player = document.getElementById("player").innerHTML;
let gameOver = false;

function play(clickedID){
    if(gameArr[clickedID] == undefined && gameOver == false){
        gameArr[clickedID] = player;
        document.getElementById(clickedID).innerText = player;
        
        checkTicTacToe(gameArr);

        if (player === "X"){
            player = "O";
            document.getElementById("player").innerHTML = player;
        }
        else{
            player = "X";
            document.getElementById("player").innerHTML = player;
        }
}
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
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (middleLeft !== undefined && middleLeft == middleMiddle && middleLeft == middleRight){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (bottomLeft !== undefined && bottomLeft == bottomMiddle && bottomLeft == bottomRight){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (topLeft !== undefined && topLeft == middleMiddle && topLeft == bottomRight){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (bottomLeft !== undefined && bottomLeft == middleMiddle && bottomLeft == topRight){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (topLeft !== undefined && topLeft == middleLeft && topLeft == bottomLeft){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (topMiddle !== undefined && topMiddle == middleMiddle && topMiddle == bottomMiddle){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (topRight !== undefined && topRight == middleRight && topRight == bottomRight){
        alert(`${player} is the winner`);
        gameOver = true;
    }
    else if (boardFull == true){
        window.alert("CATS! No one wins!");
        gameOver = true;
    }

}

function reset(){
    for (let i = 0; i < 9; i++){
        gameArr[i] = undefined;
        document.getElementById(i).innerText = '';
    }
    player = "X";
    document.getElementById("player").innerHTML = "X";
    gameOver = false;
}