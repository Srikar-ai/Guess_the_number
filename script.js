var guesses=[];
var numberGuess;
var correctNumber=getRandomNumber();
var guesses;


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}
function playGame(){
  numberGuess=document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

function displayResult(numberGuess){
  if (correctNumber==numberGuess){
    showYouWon();
  }
  else if (correctNumber>numberGuess){
    showNumberBelow();
  }
  else {
    showNumberAbove();
  }
}

function initGame(){
  var correctNumber=getRandomNumber()
  document.getElementById("result").innerHTML="";
  guesses=[];
  document.getElementById("history").innerHTML = "";

}

function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

function getRandomNumber(){
  correctNumber=Math.floor(Math.random()*100)+1;
  return correctNumber;

}
function saveGuessHistory(guess) {
  guesses.push(guess);
  console.log(guesses);
}
function displayHistory() {
  var index=0;
  let list = "<ul class='list-group'>";
  while (index<guesses.length){
    list+="<li class='list-group-item'>"+"You guessed " + guesses[index] + "</li>";
    index+=1;
  }
  list += '</ul>'
  document.getElementById("history").innerHTML = list;
}
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  var dialog=getDialog("won",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  var dialog=getDialog("warning",text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  var dialog=getDialog("warning",text);

  document.getElementById("result").innerHTML = dialog;
}
