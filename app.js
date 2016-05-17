var game = {
  player1: {
    points: 0
  },
  player2: {
    points: 0
  },
  boxes: [[],[],[], []]
}

var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')

var counter = 0
var currentPlayer

// determines current player and switches turns
// function switchTurns() {
//   if (counter %2 == 0) {
//     console.log("player 1")
//     currentPlayer = game.playe2
//   } else {
//     console.log("player 2");
//     currentPlayer = game.player1
//   }
// }
function whichPlayer() {
  if (counter %2 == 0) {
    console.log("player 1")
    return game.player1
  } else {
    console.log("player 2");
    return game.player2
  }
}
// adds event listener to each border in the game field
var sticks = function (stick) {
  stick.on('click', function () {
    if (this.getAttribute('style') != 'background-color: red;') {
      console.log($(this).attr('class'));
      console.log(this.classList[1].split('-'));
      var theBoxes = this.classList[1].split('-');
        for (var i=1; i<theBoxes.length; i++){
         game.boxes[theBoxes[i]].push('something');
        }
          $(this).off('click');
// need function that will add clicked class items to clas array

// check array length if .legth = 4 then fill box with currentplayer marker and add 1 to counter to continue turn
      $(this).css('background-color', 'red')
      counter ++
      // switchTurns()
// prevents clicking an already used border
    }else {
      console.log("click somewhere else ");
    }
  })
}
sticks(horizontalSticks)
sticks(verticalSticks)



// loop that checks how many borders of each box is filled red
function checkBox (x){
  for (var i = 0; i < game.boxes.length; i++) {
  if (game.boxes[i].length == 4) {
    if (whichPlayer == game.player1){
      x.setAttribute('style', 'background-color: grey')
    }else {
      x.setAttribute('style', 'background-color: pink')
    }
  }
}
}
// }
//   }
// }

// count filled in boxes


// 		if(box1Array.length >= 4) {
// 			console.log("Box made!!! Do something.")
// 		}
//
//
// 		// remove the event listener
// 	// 	$(this).off()
// 	})
//
// // box1.push()
