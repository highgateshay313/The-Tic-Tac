
const cells = document.querySelectorAll(".action-box");
const gameWinner = document.getElementById("round-count");
const playersTurn = document.querySelector(".turnStatus");
const winner = document.querySelector(".winner");

let input = document.getElementById("player1Name");
let input2 = document.getElementById("player2Name")
let out = document.querySelector("#pName1");
let out2 = document.querySelector("#pName2");

//Testing game code
let currentPlayer = "X";
let runtime = true;
let nickName = out.textContent
let nickName2 = out2.textContent
let options = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

startGame()
function startGame() {
            cells.forEach(cell => cell.addEventListener("click", cellClicked))
            playersTurn.textContent = `Click a box to start the game`
            runtime = true;

    function cellClicked() {
            const cellIndex = this.getAttribute("cellIndex");
        if (options[cellIndex] != "" || !runtime) {
            return;
        }
            updateCell(this, cellIndex);
            checkWinner()
    }

    function updateCell(cell, index) {
            options[index] = currentPlayer;
            cell.textContent = currentPlayer;
    }

    function changePlayer() {
            currentPlayer = (currentPlayer === "X") ? "O" : "X";
            // playersTurn.textContent = `It's ${nickName} turn!!`
            playersTurn.style.color = "rgb(175, 101, 224)"

            if (currentPlayer === "X") {
                playersTurn.textContent = `It's ${nickName} turn!!`
            }else {
                playersTurn.textContent = `It's ${nickName2} turn!!`
                playersTurn.style.color = "white"
            }
    }

    function checkWinner() {
        let roundWon = false;
        for (let i = 0; i < winConditions.length; i++) {
            const conditions = winConditions[i]
            const cell1 = options[conditions[0]]
            const cell2 = options[conditions[1]]
            const cell3 = options[conditions[2]]
            
        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue;
    }
        if (cell1 == cell2 && cell2 == cell3) {
            roundWon = true;
            break;
        }
    }
    
        if (roundWon) {

            if (currentPlayer === "X") {
                winner.textContent = `${nickName} Is The Winner!!`
                 playersTurn.style.color = "rgb(29, 225, 130)"
            }else if (currentPlayer === "O") {
                winner.textContent = `${nickName2} Is The Winner!!`
                playersTurn.style.color = "rgb(29, 225, 130)"
            }           
            winner.style.color = "rgb(175, 101, 224)"
            playersTurn.textContent = "GAME OVER"
            playersTurn.style.fontWeight = "bold"
            runtime = false;
        }
        else if(!options.includes("")) {
            winner.textContent = `It's a Draw!!`;
            runtime = false;
        }else {
            changePlayer();
        }
    }

};

function chooseName(name, marker) {
        
   
    input.onkeyup = function () {
        out.textContent = input.value;
        out.style.background = "#000000"
}

    input2.onkeyup = function () {
        out2.textContent = input2.value
        out2.style.background = "#f25ce1"
    }
};
chooseName()




