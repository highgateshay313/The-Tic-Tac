
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");








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

//Object for the gameboard
const Gameboard = {

}

//Object for the players
const Players = {

}

//Object for game flow
const GameFlow = {
    
}