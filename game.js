var userClickedPattern=[];
var gamePattern=[];
var buttonColour=["green","red","yellow","blue"];
var level=0;




    $("body").keypress(function()
    {
        if(gamePattern.length===0)
            {

                 swayam();
            }

    });

      $("body").click(function()
{
    if(gamePattern.length===0)
        {

             swayam();
        }
});

var index=0;
function playsound(randomChosenColour)
{
    var audio=new Audio("sounds/"+ randomChosenColour +".mp3");
    audio.play();
}
function nextSequence()
{
    var randomNUmber=Math.random();
    randomNUmber=randomNUmber*4;
    randomNUmber=Math.floor(randomNUmber);
    level++;
    $("h1").text("level "+level);
    return randomNUmber;
}

$(".btn").click(function(event){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    if(userClickedPattern[index]===gamePattern[index])
        {
            playsound(userChosenColour);
            $("#"+userChosenColour).addClass("pressed");
            setTimeout(function(){+
                $("#"+userChosenColour).removeClass("pressed");
            },100);
            index++;
            if(index===level)
                {
                    index=0;
                   setTimeout(function(){
                    swayam();
                   },1000);
                   userClickedPattern.splice(0,userClickedPattern.length);
                }
        }
    else{
        wrong();
    }
});
function wrong()
{
    var aud=new Audio("sounds/wrong.mp3");
    aud.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    gamePattern.splice(0,gamePattern.length);
    userClickedPattern.splice(0,userClickedPattern.length);
    index=0;
    level=0;
}
function swayam()
{
    var x=nextSequence();
    var randomChosenColour=buttonColour[x];
     gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).addClass("flash");
    setTimeout(function(){
    $("#"+randomChosenColour).removeClass("flash");
       },100);
    playsound(randomChosenColour);
    return;
}
