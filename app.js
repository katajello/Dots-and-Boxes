var box1Sticks = []
var horizontalSticks = $('.horizontal')
var verticalSticks = $('.vertical')
var counter = 0
function switchTurnes() {
  if (counter %2 == 0) {
    console.log("player 1")
  } else {
    console.log("player 2");
  }
}



horizontalSticks.on('click', function() {
console.log($(this).hasClass('box1'))
counter ++
switchTurnes()
})

verticalSticks.on('click', function(){
  console.log($(this).hasClass('box1'));
  counter ++
switchTurnes()

})
