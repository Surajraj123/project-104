var y = Math.floor(Math.random() * 10 + 1);

guess = localStorage.setItem("1");

function submit() {
    msg = document.getElementById("Submit").value;

    document.getElementById("Submit").value = "";

    localStorage.getItem("guessField").value;

}

var x = document.getElementById("guessField").value;

if(x == y)
{
    alert("CONGRATULATIONS!!!" + playername +" YOU GUESSED IT RIGHT IN" + guess + " GUESS ");
    guess = 1;
}
else if(x > y)
{
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
}
else{
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}