const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnSend = document.getElementById("btn-send");


let numbers;
let intervId;
let lastNum;
let scoreNum = 0;
let lifeNum = 3;

btnStart.addEventListener("click", function () {
    if (!intervId) {
        intervId = setInterval(randomNums, 80);
    }
});
function randomNums() {
    numbers = Math.floor((Math.random() * 10) + 1);
    document.querySelector(".numbers").innerHTML = numbers;
    return numbers;
};

btnStop.addEventListener("click", function () {
    lastNum = numbers;
    clearInterval(intervId);
    intervId = null;
    document.querySelector(".numbers").innerHTML = "?";
});

btnSend.addEventListener("click", function () {
    let inputText = document.getElementById("input-text").value;
    if (inputText == lastNum) {
        scoreNum++;
        document.getElementById("score-num").innerHTML = scoreNum;
        alert("Congratulations!");
        document.getElementById("input-text").value = "";
        return;
    } else {
        lifeNum--;
        document.getElementById("life-num").innerHTML = lifeNum;
        alert("Wrong answer :( Please try again.");
        document.getElementById("input-text").value = "";
        endOfGame();
        return;
    }
});

function endOfGame() {
    if (lifeNum == 0) {
        alert("Game Over")
        document.getElementById("score-num").innerHTML = 0;
        document.getElementById("life-num").innerHTML = 3;
        scoreNum = 0;
        lifeNum = 3;
    }
};




