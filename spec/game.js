


var BowlingGame = function (){

  
  this.rolls = [];

};

BowlingGame.prototype.roll = function (pins){

  this.rolls.push(pins);
  // var buttonResponse = document.scorecard.pins.value;

  // document.querySelector('#round1')
}
BowlingGame.prototype.score = function  (){

  
  
  frameIndex = document.querySelector('#round1');

  var result = 0;
  var rollIndex = 0;
  var BowlingGame = this;
 

  for(var frameIndex=0; frameIndex<10;frameIndex++){
    if(isStrike()){
      result += getStrikeScore();
      rollIndex++;
  } else if(isSpare()){
      result += getSpareScore();
      rollIndex +=2;

  } else {
      result += getNormalScore();
      rollIndex +=2;
  }
  
  }
  return result;

 
  function isStrike() {
    return BowlingGame.rolls[rollIndex] == 10;
  }

  function isSpare(){
    return BowlingGame.rolls[rollIndex] + BowlingGame.rolls[rollIndex + 1]==10;

  }
  function getStrikeScore(){
    return BowlingGame.rolls[rollIndex] + BowlingGame.rolls[rollIndex + 1]+ BowlingGame.rolls[rollIndex + 2];
  }
  
  function getSpareScore(){
    return BowlingGame.rolls[rollIndex] + BowlingGame.rolls[rollIndex + 1]+ BowlingGame.rolls[rollIndex + 2];
  }

  function getNormalScore(){

    return BowlingGame.rolls[rollIndex] + BowlingGame.rolls[rollIndex + 1];
  }

};




module.exports = BowlingGame;



//ten pin bowling js
/*var frameOne = document.querySelector('#frame1');
  frameOne.innerHTML = 9;*/
  
// function insertName(){

//   // var table = document.getElementById('table');
  
//   // newRow = insertRow(table.length),
//   // ce111 = newRow.insertCell(0);
//   // firstPlayer = document.getElementById('firstname').value;
//   // ce111.innerHTML = firstPlayer;

//     this.status = 'valid';
//     nameOne = document.getElementById('text1').value;
//     alert('Player one is: ' + nameOne);
//     nameTwo = document.getElementById('text2').value;
//     alert('Player two is: ' + nameTwo);

//     frameZero = document.querySelector('#round0');
//     frameZero = console.log(nameOne);

// }

	



 /*frameScore = function() {
    frame1.innerHTML = game.frameScore['1'];
    frame2.innerHTML = game.frameScore['2'];
    frame3.innerHTML = game.frameScore['3'];
    frame4.innerHTML = game.frameScore['4']
    frame5.innerHTML = game.frameScore['5']
    frame6.innerHTML = game.frameScore['6']
    frame7.innerHTML = game.frameScore['7']
    frame8.innerHTML = game.frameScore['8']
    frame9.innerHTML = game.frameScore['9']
    frame10.innerHTML = game.frameScore['10']
  };*/















