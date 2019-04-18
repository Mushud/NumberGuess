var gamelevel = document.getElementById("level");
var gameScore = document.getElementById("score");
var generateButton = document.getElementById("generate");
var info = document.getElementById("onStart");
var inputBox = document.getElementById("inputNumberBar");
var lives = document.getElementById("lives");
var gameStatus = document.getElementById("status");
var checkBtn = document.getElementById("check");

var startingLevel = 1;
var startingScore = 0;
var startingLives = 5;

var number = null;

//Generate a random number from 1 - 10
var generatedNumber = function(){
    number =Math.floor(Math.random() * (startingLevel*10), 0);
    info.style.color= "black";
    info.innerHTML =   `Game Started <br /> Guess range, 0 - ${startingLevel*10}`;
    generateButton.style.display = "none";
    checkBtn.style.display = "block";
    inputBox.style.display = "block";
    console.log(number);
    return number; 
};


//Check if number Entered is equal to number Generated
function checkNumer(){
        var numberEntered = inputBox.value;
        if(numberEntered == number){
            startingLevel++;
            startingScore += (startingLevel + 5);
            startingLives += (5 + startingLevel);
            gameScore.innerHTML = `Score <br />${startingScore}`;
            lives.innerHTML =  `Lives <br /> ${startingLives}`;
            level.innerHTML = `Level <br /> ${startingLevel}`;
            gameStatus.style.color = "green";
            gameStatus.innerHTML = `Congrats You guessed Right. Move On 👍`;
            inputBox.value = "";
            generatedNumber();
        }else {
           
            gameStatus.style.color = "red";
            gameStatus.innerHTML = `${numberEntered} Oops, You guessed Wrong. Try again 😥`;
            info.innerHTML =   `Try Again <br /> Guess range, 0 - ${startingLevel*10}😉`;
            inputBox.value = '';
            if(startingLives !=1){
                startingLives -= 1;
                lives.innerHTML =  `Lives <br /> ${startingLives}`;
            }else {
                gameStatus.innerHTML = ``;
                lives.innerHTML =  `Lives <br /> 0`;
                generateButton.style.display = "block";
                checkBtn.style.display = "none";
                inputBox.style.display = "none";
                info.style.color = "red";
                info.innerHTML = "Game Over";
                console.log("Game Over...");
                

            }
           
        }
}

//Check numbers event listener
checkBtn.addEventListener('click', checkNumer);

//Generate Random Number event Listener
generateButton.addEventListener('click', startGame);

//function start game.
function startGame(){
    resetGame();
    generatedNumber();
}

//Reset values to default
function resetGame(){
    startingLevel = 1;
    startingScore = 0;
    startingLives = 5;

    changeScore(startingLevel, startingScore);
    changeLevel(startingLevel);
}

//set default level and score
function changeScore(level, score){
    startingScore = level + score*2;
    gameScore.innerHTML = `Score <br />${startingScore}`;
    lives.innerHTML =  `Lives <br /> ${startingLives}`;
}

//set default level;
function changeLevel(level){
    gamelevel.innerHTML = `Level <br />${level}`;
}

function initialiseGameStart(){
    changeLevel(startingLevel);
    changeScore(startingLevel, startingScore);
}

initialiseGameStart();




