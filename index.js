const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong");
  }
}

function nextSequence() {
  level++;
  userCLickedPattern = [];
  $("h1").text("Level " + level);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

$(".btn").on("click", function () {
  let userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.lastIndexOf(userChosenColor));
});

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

nextSequence();
