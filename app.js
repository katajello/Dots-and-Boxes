var box1Sticks = []
var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')
var boxes = $('.box')
var counter = 0
function switchTurns() {
  if (counter %2 == 0) {
    console.log("player 1")
  } else {
    console.log("player 2");
  }
}

boxes.on('click',function () {
  console.log($(this))
})

horizontalSticks.on('click', function() {
  //console.log("this.getAttribute('style')",this.getAttribute('style'));
  if (this.getAttribute('style') != 'background-color: red;') {
  //console.log('red');
    $(this).css('background-color', 'red')
    counter ++
    switchTurns()
  }else {
    console.log("click somewhere else ");
  }
})

verticalSticks.on('click', function(){
  if (this.getAttribute('style') != 'background-color: red;') {
    $(this).css('background-color', 'red')
    counter ++
    switchTurns()
  }else {
    console.log("click somewhere else ");
  }
})



// how to switch colors between turns
// verticalSticks.on('click', function(){
//   if (this.getAttribute('style') != 'background-color: red;' || this.getAttribute('style') != 'background-color: blue;') {
//     if (counter % 2 == 0) {
//       $(this).css('background-color', 'red')
//     }else {
//       $(this).css('background-color', 'blue')
//     }
//     counter ++
//     switchTurns()
//   }else {
//     console.log("click somewhere else fool");
//   }
//
//
// })
