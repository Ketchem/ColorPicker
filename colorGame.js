var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i< squares.length; i ++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors [i];

    //add click listener to squaRES
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}

function changeColors(color){
    for (var i = 0; i< squares.length; i ++){
        squares[i].style.backgroundColor = color;
    }

    //document.querySelector("h1").backgroundColor = color;
}

function pickColor(){
    //pick random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make arra
    arr = [];
    // add num randoc colors to array
    for (var i=0; i < num; i++){
        //get random color
        //push into array
        arr.push(randomColor());
    }
    return arr;
};

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    color = "rgb(" + red + ", " + green + ", " + blue + ")";
    return (color);
};