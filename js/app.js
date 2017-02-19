function populate(){
  if(quiz.isEnded()){
    showScores();
  }
  else{
    var element = document.getElementById("questions");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++){
      var element = document.getElementById("choice"+i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }
    showProgress();
  }
}

function guess(id,guess){
  var button = document.getElementById(id);
  button.onclick = function(){
    quiz.guess(guess);
    populate();
  }
}

function showProgress(){
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = 'Question ' + currentQuestionNumber + 'of ' +quiz.questions.length;
}


function showScores(){
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += '<h2 is="score"> Your Score: ' + quiz.score + '</h2>';
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}

var questions = [
  new Question("Which one is not an object oriented programing language?",["java","c#","c++","C"],"C"),
  new Question("Which language is used for styling web page?",["HTML","JQuery","CSS","xml"],"CSS"),
  new Question("There are ___ main componets of object oriented programing.",["1","6","2","4"],"4"),
  new Question("Which language is used for web apps?",["PHP","Python","Javascript","All"],"All"),
  new Question("MVC is a ____",["language","Liabrary","Framework","All"],"All")

];


var quiz = new Quiz(questions);

populate();
