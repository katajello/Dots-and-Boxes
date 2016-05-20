
// game object
var game = {
  player1: {
    points: 0,
    color: '#B4E1FF',
    name: "Player 1",
    display: $('#player1Score')
  },
  player2: {
    points: 0,
    color: '#FFACE4',
    name: "Player 2",
    display: $('#player2Score')
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
// variable for all horizonal and vertical lines
var horizontalLines = $('.horizontal')
var verticalLines = $('.vertical')

var counter = 0


// reset page/game button
$('#reset').click(function () {
  location.reload();
})

// tracks current players turn
var currentPlayer = game.player1
// toggles underline display of current player
currentPlayer.display.toggleClass('active')

// determines current player and switches turns
function switchTurns() {
  if(currentPlayer == game.player1) {
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
game.player1.display.toggleClass('active')
game.player2.display.toggleClass('active')

// after game starts removes opening directions
  $('#current-player-display').html('')
}

// check for winner function
// checks all arrays, once all arrays have a length of 4 it counts the boxes and compares
// player1 to player2 and evaluates a winner
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
var lines = function (line) {
  // on click will change background color and push box class to an array
  line.on('click', function () {
    var sameTurn = false;
    if (this.getAttribute('style') != 'background-color: #a6a6a6;') {
//if div does not have color, then add color
      $(this).css('backgroundColor','#a6a6a6')
// push class to its respective array. split by dashes
      var theBoxes = this.classList[1].split('-');
      // since box is the first character of class begin array at 1, box index value is then split
      // and added into the arrays
      for (var i=1; i<theBoxes.length; i++){
        // push values to arrays according to index by value
        game.boxes[theBoxes[i]].push('line-click');
        // checks to see if boxes borders are all drawn
        if (game.boxes[theBoxes[i]].length > 3) {
          //if the array for the indexed box is greater than 3 the box is filled
          // with the current players color and a point is added
          $('#box' + theBoxes[i]).css('background-color', currentPlayer.color)
          currentPlayer.points +=1

          sameTurn = true
        }
        player1Score.innerHTML = (game.player1.name + ": " + game.player1.points)
        player2Score.innerHTML = (game.player2.name + ": " + game.player2.points)
      }
      if(!sameTurn) {
        switchTurns()
      }
      checkWinner()

        // turns off click event so lines cant be clicked twice
      $(this).off('click');
    }
  })
}

lines(horizontalLines)
lines(verticalLines)
