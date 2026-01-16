let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");

const winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function makeMove(index) {
    if (board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    if (checkWinner()) {
        statusText.innerText = "Player " + currentPlayer + " Wins!";
        gameActive = false;
    }
    else if (!board.includes("")) {
        statusText.innerText = "Game Draw!";
        gameActive = false;
    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.innerText = "Player " + currentPlayer + "'s Turn";
    }
}

function checkWinner() {
    return winningPatterns.some(pattern => {
        return pattern.every(i => board[i] === currentPlayer);
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    statusText.innerText = "Player X's Turn";

    let cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.innerText = "";
    }
}

