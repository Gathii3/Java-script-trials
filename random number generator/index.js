//random number generator

const myButton = document.getElementById("myButton")
const myLabel = document.getElementById("myLabel")
const min = 1;
const max = 100;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * (max - min + 1)+ min)
    myLabel.textContent = randomNum;
}