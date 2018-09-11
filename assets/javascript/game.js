



var wins=0;
var losses =0;
var score =0;
     


function playGame(){


function updateScore(){
    document.querySelector('#scoreCnt').innerHTML=score; 
  }


function updateWins(){
document.querySelector('#winMsg').innerHTML=wins; 
  }


function updateLosses(){
document.querySelector('#lossMsg').innerHTML=losses; 
      }


  function randomNumber(){
    document.querySelector('#randNum').innerHTML=targetNumber; 
  }

  function restartGame(){
    score =0;
   targetNumber = Math.floor(Math.random()*120)+19;
   crystalOne = Math.floor(Math.random() * 12) + 1; 
   crystalTwo = Math.floor(Math.random() * 12) + 1; 
   crystalThree = Math.floor(Math.random() * 12) + 1; 
   crystalFour = Math.floor(Math.random() * 12) + 1; 

  console.log("Restart Game has been called");

    
  updateScore();
  updateWins();
  updateLosses();
  randomNumber();

  
  }




var targetNumber = Math.floor(Math.random()*120)+19;


var crystalOne = Math.floor(Math.random() * 12) + 1; 
var crystalTwo = Math.floor(Math.random() * 12) + 1; 
var crystalThree = Math.floor(Math.random() * 12) + 1; 
var crystalFour = Math.floor(Math.random() * 12) + 1; 


randomNumber();

console.log("targetNumber is: "+targetNumber);
console.log("Score is: "+ score);
console.log("crystalOne: "+crystalOne);
console.log("crystalTwo: "+crystalTwo);
console.log("crystalThree: "+crystalThree);
console.log("crystalFour: "+crystalFour);
console.log("wins: "+ wins);
console.log("losses: "+ losses);



    // Crystal Buttons

    $(".crystal1-button").on("click", function() {
     
        score+=crystalOne;
        updateScore();
  
        
       

       if (score >targetNumber){
        losses++;
        restartGame();
        console.log("You Lose!");
        alert("You Lose!");
        
      }

      else if (score==targetNumber){
        wins++;
        restartGame();
        console.log("You Win!");
        alert("You Win!");
        
      }


           
console.log("targetNumber is: "+targetNumber);
console.log("Score is: "+ score);
console.log("crystalOne: "+crystalOne);
console.log("crystalTwo: "+crystalTwo);
console.log("crystalThree: "+crystalThree);
console.log("crystalFour: "+crystalFour);
    });

      $(".crystal2-button").on("click", function() {
     
        score+=crystalTwo;
        
       updateScore();

       if (score >targetNumber){
        losses++;
        restartGame();
        console.log("You Lose!");
        alert("You Lose!");
        
      }

      else if (score==targetNumber){
        wins++;
        restartGame();
        console.log("You Win!");
        alert("You Win!");
      }

     
      console.log("targetNumber is: "+targetNumber);
      console.log("Score is: "+ score);
      console.log("crystalOne: "+crystalOne);
      console.log("crystalTwo: "+crystalTwo);
      console.log("crystalThree: "+crystalThree);
      console.log("crystalFour: "+crystalFour);


    });

      $(".crystal3-button").on("click", function() {
     
        score+=crystalThree;
        
       updateScore();

       if (score >targetNumber){
        losses++;
        restartGame();
        console.log("You Lose!");
        alert("You Lose!");
        
      }

      else if (score==targetNumber){
        wins++;
        restartGame();
        console.log("You Win!");
        alert("You Win!");
        
      }
  
console.log("targetNumber is: "+targetNumber);
console.log("Score is: "+ score);
console.log("crystalOne: "+crystalOne);
console.log("crystalTwo: "+crystalTwo);
console.log("crystalThree: "+crystalThree);
console.log("crystalFour: "+crystalFour);

    });

      $(".crystal4-button").on("click", function() {
     
        score+=crystalFour;
        updateScore();

       if (score >targetNumber){
        losses++;
        restartGame();
        console.log("You Lose!");
        alert("You Lose!");
        
      }

      else if (score==targetNumber){
        wins++;
        restartGame();
        console.log("You Win!");
        alert("You Win!");
      }

      console.log("targetNumber is: "+targetNumber);
      console.log("Score is: "+ score);
      console.log("crystalOne: "+crystalOne);
      console.log("crystalTwo: "+crystalTwo);
      console.log("crystalThree: "+crystalThree);
      console.log("crystalFour: "+crystalFour);

    });


      //if new score exceeds number to guess then update losses and restart game
      //if new score matches number to guess then update wins and restart game
   
//     $(".crystal2-button").on("click", function() {
//       //update score based on value of crystal # 2 and display new score 
//       //if new score exceeds number to guess then update losses and restart game
//       //if new score matches number to guess then update wins and restart game
//     });
//     $(".crystal3-button").on("click", function() {
//       // update score based on value of crystal # 3 and display new score 
//       //if new score exceeds number to guess then update losses and restart game
//       //if new score matches number to guess then update wins and restart game
//     });

//      $(".crystal4-button").on("click", function() {
//       // update score based on value of crystal # 4 and display new score 
//       //if new score exceeds number to guess then update losses and restart game
//       //if new score matches number to guess then update wins and restart game
//     });

// }

}
playGame();




