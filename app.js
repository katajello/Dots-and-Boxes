var game = {
  player1: {
    points: 0
  },
  player2: {
    points: 0
  }
}


var box1 = []
var box2 = []
var box3 = []
var box4 = []
var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')
var boxes = $('.box')
var counter = 0
var currentPlayer

function switchTurns() {
  if (counter %2 == 0) {
    console.log("player 1")
    currentPlayer = game.player1
  } else {
    console.log("player 2");
    currentPlayer = game.player2
  }
}

var sticks = function (stick) {
  stick.on('click', function () {
    if (this.getAttribute('style') != 'background-color: red;') {
    //console.log('red');
      $(this).css('background-color', 'red')
      counter ++
      switchTurns()
    }else {
      console.log("click somewhere else ");
    }
  })
}
sticks(horizontalSticks)
sticks(verticalSticks)

boxes.on('click',function () {
  console.log($(this))
})


function getBox(box) {
  if ($('#' + box))  {

  }
}

// function check(a, b, c, d, player) {
//       if (a.getAttribute('style')) == move && getId(b) == move && getId(c) == move && getId(d) == move) {
//       result = true;
//       console.log("winner is " + move)
//     }
//     }
