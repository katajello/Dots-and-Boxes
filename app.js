
// game object
var game = {
  player1: {
    points: 0,
    color: 'blue',
    name: "Player 1"
  },
  player2: {
    points: 0,
    color: 'green',
    name: "Player 2"
  },
  boxes: [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
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
var currentPlayer = game.player1

function switchTurns() {
  if(currentPlayer == game.player1) {
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }

  $('#current-player-display').html(currentPlayer.name + ' Its your turn')
}

function whichPlayer() {
  if (counter %2 == 0) {
    console.log("player 1")
    return game.player1
  } else {
    console.log("player 2");
    return game.player2
  }
}
// console.log(game.boxes[0].length);

function checkWinner() {
  var boxCounter = 0
  for (var i = 0; i < game.boxes.length; i++) {
 if (game.boxes[i].length == 4 ) {
    boxCounter ++
  }
  if (game.boxes.length == boxCounter){
    if (game.player1.points > game.player2.points){
      alert('Player 1 Wins')
    } else if (game.player1.points < game.player2.points) {
      alert('Player 2 Wins')
    }
    else {
      alert('Tie Game')
    }
  }
}
}
// adds event listener to each border in the game field
var sticks = function (stick) {
  // on click will change background color and push box class to an array
  stick.on('click', function () {
    var sameTurn = false;
    if (this.getAttribute('style') != 'background-color: black;') {
      // console.log($(this).attr('class'));
      $(this).css('backgroundColor','black')
      // console.log(this.classList[1].split('-'));
      var theBoxes = this.classList[1].split('-');
      for (var i=1; i<theBoxes.length; i++){
        game.boxes[theBoxes[i]].push('stick-click');
        //  console.log(game.boxes[theBoxes[i]], theBoxes[i])
        if (game.boxes[theBoxes[i]].length > 3) {
          $('#box' + theBoxes[i]).css('background-color', currentPlayer.color)
          currentPlayer.points +=1

          sameTurn = true
        }
        player1Score.innerHTML = ('Player 1: ' + game.player1.points +' boxes')
        player2Score.innerHTML = ('Player 2: ' + game.player2.points +' boxes')
      }
      if(!sameTurn) {
        switchTurns()
      }
      checkWinner()

        // turns off click event
      $(this).off('click');
    }
  })
}

sticks(horizontalSticks)
sticks(verticalSticks)
