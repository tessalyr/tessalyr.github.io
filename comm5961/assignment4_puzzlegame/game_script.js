var playing = false;
var score;
var action;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startresetBox").onclick =
    function () {
        //if we are playing
        if (playing == true) {
            location.reload(); //reload page
        } else { //if we are not playing
            //change mode to playing
            playing = true;
            //set score to 0
            score = 0;
            document.getElementById("scorevalue").innerHTML =
                score;
            //change button to reset
            document.getElementById("startresetBox").innerHTML =
                "Reset";
            //generate a new Q&A
            generateQA();
        }
    }
    //Clicking on an answer box
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
        //check if we are playing 
        if (playing == true) { //yes
            if (this.innerHTML == correctAnswer) {
                //correct answer
                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct box
                hide("wrongBox");
                show("correctBox");
                setTimeout(function () {
                    hide("correctBox");
                }, 1000);
                //Generate new Q&A
                generateQA();
            } else {
                //wrong answer
                hide("correctBox");
                show("wrongBox");
                setTimeout(function () {
                    hide("wrongBox");
                }, 1000);
            }
        }
    }
}

//hide an element
function hide(Id) {
    document.getElementById(Id).style.display = "none";
}
//show an element
function show(Id) {
    document.getElementById(Id).style.display = "block";
}

//generate question and multiple answers
function generateQA() {
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x * y;
    document.getElementById("questionBox").innerHTML = x +
        " x " + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML =
        correctAnswer; //fill one box with the correct answer
    //fill other boxes with wrong answers
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 +
                    Math.round(9 * Math.random())) * (1 +
                    Math.round(9 * Math.random())); //a wrong answer
            } while (answers.indexOf(wrongAnswer) > -1)
            document.getElementById("box" + i).innerHTML =
                wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}