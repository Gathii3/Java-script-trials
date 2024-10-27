//NUMBER GUESSING GAME

const minNum =1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum
 
let attemps = 0; 
let guess = 0;
let running = true;

while(running){

    guess = window.prompt('Guess a number between ${minNum} - ${maxNum}')
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess <answer){
            window.alert("Too Low! TRY AGAIN")
        }
    }
    else if(guess > answer){
            window.alert("Too High! TRY AGAIN")
    }
    else{window.alert('Correct! The answer was ${answer}. It took you ${attempts} attempst')

}
running = false ; }