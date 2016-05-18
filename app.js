
// game object
var game = {
  player1: {
    points: 0,
    color: 'blue'
  },
  player2: {
    points: 0,
    color: 'green'
  },
  boxes: [
    [],
    [],
    [],
    []
  ]
}

var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')

var counter = 0

// for (var i = 6; i < ; i++) {


// determines current player and switches turns
// var currentPlayer
// function switchTurns() {
//   if (counter %2 == 0) {
//     console.log("player 1")
//     currentPlayer = game.playe2
//   } else {
//     console.log("player 2");
//     currentPlayer = game.player1
//   }
// }
// tracks current players turn
function whichPlayer() {
  if (counter %2 == 0) {
    console.log("player 1")
    return game.player1
  } else {
    console.log("player 2");
    return game.player2
  }
}
console.log(game.boxes[0].length);

function checkWinner() {
  var boxCounter = 0
  for (var i = 0; i < game.boxes.length; i++) {
    game.boxes[i]
 if (game.boxes[i].length == 4 ) {
    boxCounter ++
  }
  if (game.boxes.length == boxCounter){
    if (game.player1.points > game.player2.point){
      alert('Player 1 Wins')
    } else if (game.player1.points < game.player2.points) {
      alert('Player 2 Wins')
    } else {
      alert('Tie Game')
    }
  }
}
}
// adds event listener to each border in the game field
var sticks = function (stick) {
  // on click will change background color and push box class to an array
  stick.on('click', function () {
    if (this.getAttribute('style') != 'background-color: black;') {
      // console.log($(this).attr('class'));
      $(this).css('backgroundColor','black')
      // console.log(this.classList[1].split('-'));
      var theBoxes = this.classList[1].split('-');
        for (var i=1; i<theBoxes.length; i++){
         game.boxes[theBoxes[i]].push('stick-click');
        //  console.log(game.boxes[theBoxes[i]], theBoxes[i])
    if (game.boxes[theBoxes[i]].length > 3) {
      $('#box' + theBoxes[i]).css('background-color', whichPlayer().color)
      whichPlayer().points +=1
      counter ++

    }
    player1Score.innerHTML = ('Player 1 Score: ' + game.player1.points)
    player2Score.innerHTML = ('Player 2 Score: ' + game.player2.points)
    checkWinner()
        }
        // turns off click event
        $(this).off('click');
        counter ++
    }
  })
}

sticks(horizontalSticks)
sticks(verticalSticks)
