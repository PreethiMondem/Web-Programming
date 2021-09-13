
var user_Choice;
var decision;

function myFunction(obj) {
  document.getElementById("user_C").innerHTML = obj.value;
  user_Choice=obj.value;
  game(user_Choice);
}


function game(user)
{
  var computer_Choice = Math.floor(Math.random() * 3)

    if (computer_Choice==0)
    {
  	   computer_Choice = "rock";
    }
    else if(computer_Choice ==1)
    {
  	   computer_Choice = "paper";
    }
    else
    {
  	   computer_Choice = "scissors";
    }

  document.getElementById("computer_C").innerHTML=computer_Choice;
//----------------------------------------------------------------------------
    var comp=computer_Choice;
    if (user === comp) {

        decision="Tie!!!" ;
    }

    else if (user === "rock") {

        if (comp === "scissors") {
            decision="You Won !!!";
        }
        else {
            decision="You Lost !!! ";
        }
    }

    else if (user === "paper") {

        if (comp === "rock") {
            decision="You Won !!!";
        }
        else {
            decision="You Lost !!! ";
        }

    }

    else if (user=== "scissors") {

        if (comp === "rock") {
            decision="You Lost !!! ";
        }
        else {
            decision="You Won !!!";
        }
    }

    document.getElementById("result").innerHTML= decision;

    }
