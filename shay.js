
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const player1Btn = document.querySelector("#pName1");
const addName = document.querySelector(".btn");







item1.addEventListener("click", () => {
    const para = document.createElement("p");
   para.textContent = "X";
   item1.textContent = para.innerText;
   item1.style.color = "white";
   item1.style.fontSize = "2rem"
})

item2.addEventListener("click", () => {
    const para2 = document.createElement("p");
    para2.textContent = "O";
    item2.textContent = para2.innerText;
    item2.style.color = "white";
    item2.style.fontSize = "2rem"
})

player1Btn.addEventListener("click", () => {
    const nameForm = document.querySelector(".nameForm");
    nameForm.style.zIndex = "2";
})

addName.addEventListener("click", (e) => {
    let nameValue = document.getElementById("player1Name");
    let test = nameValue.value;
    let test2 = document.querySelector("#pName1");
    test2.textContent = test;
    addName.style.zIndex = "-2";
})

//Object for the gameboard
const Gameboard = {

}

//Object for the players
const Players = {

}

//Object for game flow
const GameFlow = {
    
}