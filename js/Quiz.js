class Quiz{
    constructor(){  
    }
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state 
        })
    }   
     start(){
        if(gameState===0){
    contestant = new Contestant()   
    contestant.getCount();
    question = new Question()
    question.display();
    }
    } 
    play(){
        question.hide();
        background("yellow");
        fill(0);
         textSize(30);
         text("Result of the Quiz",340, 50);
         text("________________________",320, 65);
         Contestant.getContestantInfo();
         if (allContestants!==undefined){
             var displayY =230;
             fill("Blue");
            textSize(20);
            text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

            for(var plr in allContestants){
                
                var correct_answer="3";
                if(correct_answer=== allContestants[plr].answer){

                    fill("green");
                    
                    
                }
                else{
                    fill("red");
                }
                displayY+=30;
                textSize(20);
                text(allContestants[plr].name + " : "+allContestants[plr].answer,250,displayY);
                
            }
         }
    }

}