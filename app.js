var game = {
  player1: {
    points: 0
  },
  player2: {
    points: 0
  },
  boxes: [[],[],[], []]
}


// var box1Array = []
// var box2Array = []
// var box3Array = []
// var box4Array = []
// var box1 = $('#box1')
// var box2 = $('#box2')
// var box3 = $('#box3')
// var box4 = $('#box4')
var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')
// var boxes = $('.box')
var counter = 0
var currentPlayer

// determines current player and switches turns
function switchTurns() {
  if (counter %2 == 0) {
    console.log("player 1")
    currentPlayer = game.player1
  } else {
    console.log("player 2");
    currentPlayer = game.player2
  }
}



horizontalSticks.on('click', function(){
  console.log(this.classList[1].split('-'));

  var theBoxes = this.classList[1].split('-');
    for (var i=1; i<theBoxes.length; i++){
     game.boxes[theBoxes[i]].push('something');
    }
      $(this).off('click');
})
verticalSticks.on('click', function(){
  console.log(this.classList[1].split('-'));

  var theBoxes = this.classList[1].split('-');
    for (var i=1; i<theBoxes.length; i++){
     game.boxes[theBoxes[i]].push('something');
    }
      $(this).off('click');
})
// adds event listener to each border in the game field
var sticks = function (stick) {
  stick.on('click', function () {
    if (this.getAttribute('style') != 'background-color: red;') {
      console.log($(this).attr('class'));
// need function that will add clicked class items to clas array

// check array length if .legth = 4 then fill box with currentplayer marker and add 1 to counter to continue turn
      $(this).css('background-color', 'red')
      counter ++
      switchTurns()
// prevents clicking an already used border
    }else {
      console.log("click somewhere else ");
    }
  })
}
sticks(horizontalSticks)
sticks(verticalSticks)



// console.log($('.box1'));
// // loop that checks how many borders of each box is filled red
// function checkBox (){
//   for (var i = 0; i < $('.box1').length; i++) {
//   if($('.box1').getAttribute('style')) {
//
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
