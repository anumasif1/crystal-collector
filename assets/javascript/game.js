//document.ready
$(document).ready(function () {

    //call function random
    random();

    //add .click events for all crystals and call addToTotal
    $("#red").click(function () {
        addToTotal(redCrystal);
        console.log(totalScore);
    });

    $("#blue").click(function () {
        addToTotal(blueCrystal);
        console.log(totalScore);
    });

    $("#yellow").click(function () {
        addToTotal(yellowCrystal);
        console.log(totalScore);
    });

    $("#green").click(function () {
        addToTotal(greenCrystal);
        console.log(totalScore);
    });

});

//set variables for score, wins and losses and crystal numbers
var totalScore = 0;
var wins = 0;
var losses = 0;
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var randomNumber = 0;

//addToTotal function (total of total score and crustal number)

function addToTotal(toAdd) {
    totalScore = totalScore + toAdd;
    $("#total-score").text(totalScore);

    //if (totalScore === randomNumber) ==> wins++, display at #wins, reset.
    //else losses

    if (totalScore === randomNumber) {
        wins++;
        $("#wins").text("Wins" + " " + wins);
        random();
    } else if (totalScore > randomNumber) {
        losses++;
        $("#losses").text("Losses" + " " + losses);
        random();
    }
}

//define function random

function random() {

    //display random number (between 10-100) in div #random-number 

    randomNumber = Math.floor((Math.random() * 60) + 10);
    $("#random").text(randomNumber);

    //generate random number (between 1-10)  at #red #blue #yellow #green

    redCrystal = Math.floor((Math.random() * 10) + 1);
    blueCrystal = Math.floor((Math.random() * 10) + 1);
    yellowCrystal = Math.floor((Math.random() * 10) + 1);
    greenCrystal = Math.floor((Math.random() * 10) + 1);

    //console.log crystal numbers

    console.log("red" + " " + redCrystal);
    console.log("blue" + " " + blueCrystal);
    console.log("yellow" + " " + yellowCrystal);
    console.log("green" + " " + greenCrystal);

    //Set totalScore to 0 and display in #total-score
    
    totalScore = 0;
    $("#total-score").text(0);

}



