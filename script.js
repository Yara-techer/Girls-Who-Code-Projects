/*Add your JavaScript here*/

var countrysideScore = 0;
var cityScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var button = document.getElementById("myButton");

q1a1.addEventListener("click", countryside);
q1a2.addEventListener("click", city);

q2a1.addEventListener("click", countryside);
q2a2.addEventListener("click", city);

q3a1.addEventListener("click", city);
q3a2.addEventListener("click", countryside);

function countryside () {
  countrysideScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "countrysideScore = " + countrysideScore);

  if (questionCount == 3) {
  console.log("The quiz is done!")
    updateResult();
}

}

function city () {
  cityScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "cityScore = " + cityScore);

if (questionCount == 3) {
  console.log("The quiz is done!")
  updateResult();
}

}

function updateResult() {
  if (cityScore >= 2) {
    result.innerHTML = "You are a city person!"
    console.log("You are a city person!");
  } else if (countrysideScore >= 2) {
    result.innerHTML = ("You are a countryside person!");
    console.log("You are a countryside person!");
  }
  
}
