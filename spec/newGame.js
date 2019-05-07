
function BowlingGame(){
    
    var rollIndex = 0;
    var temFrameTot=0;
    this.rolls = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    this.frames = [];
    this.Totframe=[];

    let j = 0;

    for(var i=0;i<document.getElementsByClassName("scorecard1").length;i++){

        document.getElementsByClassName("scorecard1")[i].innerHTML = this.rolls[i];
        this.frames.push(this.rolls[i]);

        
        

        if(this.frames[i] % 2 != 0 && this.frames[i]!=0){

            var firstValue = this.rolls[i]
            var secondValue = this.rolls[i + 1]; 


           document.getElementsByClassName("total")[j].innerHTML = firstValue + secondValue;
         
     
             temFrameTot=document.getElementsByClassName("total")[j].innerHTML = firstValue + secondValue;
            this.Totframe.push(temFrameTot);
             j++;
            
         console.log(temFrameTot);
         console.log("tem Arra values: "+ this.Totframe);

        //  document.getElementsByClassName("sumTotal")[i].innerHTML = temFrameTot; 

        }
        
        // var innerTotal = this.Totframe[i] + this.Totframe[i + 1];

        // for(var i=0;i<10;i++){

            
        //     if(this.Totframe[i] !== 0){

        //         document.getElementsById("#sumTotal")[i].innerHTML = innerTotal;
        //     }

   
            

        // }
        

        console.log("Loop1 "+ temFrameTot);
    }
    for(var k = 0 ;k < document.getElementsByClassName("total").length - 1;k++){
        var tot=this.Totframe[i];
        var nextTot=this.Totframe[i+1];
        if(this.Totframe !==0){
            temFrameTot=tot + nextTot;
        }
        console.log("sEC Loop "+temFrameTot);
    }
    
    
    


this.roll = function(pin){

    this.rolls.push(pins);
}

this.score = function(){

  
  

    var result = 0;
    
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
        return this.rolls[rollIndex] == 10;
      }
    
      function isSpare(){
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1]==10;
    
      }
      function getStrikeScore(){
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1]+ this.rolls[rollIndex + 2];
      }
      
      function getSpareScore(){
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1]+ this.rolls[rollIndex + 2];
      }
    
      
     
    };

  

 

     this.getNormalScore = function(rollIndex){
    
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
       }
    
}