
let currentPlayer = "X";
let runtime = false;







const players = {

}

const gameBoard = {
 
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//Testing game code
let options = ["", "", "", "", "", "", "", "", "",];

const cells = document.querySelectorAll(".action-box");
const player1 = document.getElementById("player1");


function startGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    runtime = true;
}
startGame()

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");
    if (options[cellIndex] != "" || !runtime) {
        return;
    }

    updateCell(this, cellIndex);
    changePlayer()
    checkWinner()
    
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
}

function checkWinner() {
    let round1 = false;
    for (let i = 0; i < winConditions.length; i++) {
        const conditions = winConditions[i]
        const cell1 = options[conditions[0]]
        const cell2 = options[conditions[1]]
        const cell3 = options[conditions[2]]
        
        if (cell1 == "" || cell2 == "" || cell3 == "") {
            continue;
        }
        if (cell1 == cell2 && cell2 == cell3) {
            round1 = true;
            break;
        }
    }

    if (round1) {
        player1.textContent = `${currentPlayer} Wins!!`
        runtime = false;
    }
}


// function chooseName(name, marker) {
//     let input = document.getElementById("player1Name");
//     let input2 = document.getElementById("player2Name")
//     let out = document.querySelector("#pName1");
//     let out2 = document.querySelector("#pName2");
   
    

//     input.onkeyup = function () {
//        out.textContent = input.value;
//        out.style.background = "#000000"
// };

//     input2.onkeyup = function () {
//         out2.textContent = input2.value
//         out2.style.background = "#f25ce1"
//     };

    
// }
// chooseName()



// function boxClicked(e) {
//     console.log(e.target)
// }

// startGame()


// const person = {
//     name: ["Bob", "Smith"],
//     age: 32,
// };

// function logProperty(propertyName) {
//     console.log(person[propertyName]);
// }

// logProperty("name")

// logProperty("age")
// person.eyes = function(color) {
//     return color
// }

// console.log(person.eyes("gray"))

//Game boxs class = cell
