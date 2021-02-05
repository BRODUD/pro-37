var canva;
var contestantCount=0, database, quiz, question, contestant;
var allContestants;
var gameState = 0
function setup(){
database = firebase.database();
  canvas = createCanvas(950,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();


}


function draw(){
  background("pink");
if (contestantCount === 4){
  quiz.update(1);
}
if (gameState===1){
clear();
quiz.play();
}
  
}

