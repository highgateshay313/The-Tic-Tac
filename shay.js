


function changeName() {
    let input = document.getElementById("player1Name");
    let input2 = document.getElementById("player2Name")
    let out = document.querySelector("#pName1");
    let out2 = document.querySelector("#pName2");

    input.onkeyup = function () {
        out.textContent = input.value;
        out.style.background = "#000000"
        return input.value;
    }

    input2.onkeyup = function () {
        out2.textContent = input2.value
        out2.style.background = "#f25ce1"
    }
}

changeName()