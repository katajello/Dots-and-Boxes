var game = {
  player1: {
    points: 0
  },
  player2: {
    points: 0
  }
}


var box1Array = []
var box2Array = []
var box3Array = []
var box4Array = []
var box1 = $('#box1')
var box2 = $('#box2')
var box3 = $('#box3')
var box4 = $('#box4')
var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')
var boxes = $('.box')
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
console.log($('.box1'));
// loop that checks how many borders of each box is filled red
function checkBox (){
  for (var i = 0; i < $('.box1').length; i++) {
  if($('.box1').getAttribute('style')) {

}
  }
}

// count filled in boxes


for(var i = 0; i < 8; i += 1) {
		$('body').append('<div class="horizontal box1 box3"></div>')
	}
	$('.box').on('click', function(){
		var classNames = $(this).attr("class").toString().split(' ');
		console.log(classNames)

		// adding classes to proper arrays
		classNames.forEach(function(className) {
			if(className == 'box1') {
				box1Array.push(className)
			} else if(className == 'box2'){
				box2Array.push(className)
			}
		})

		if(box1Array.length >= 4) {
			console.log("Box made!!! Do something.")
		}


		// remove the event listener
		$(this).off()
	})



















// box1.push()








// function getBox(box) {
//   if ($('#' + box))  {
//
//   }
// }

// function check(a, b, c, d, player) {
//       if (a.getAttribute('style')) == move && getId(b) == move && getId(c) == move && getId(d) == move) {
//       result = true;
//       console.log("winner is " + move)
//     }
//     }
