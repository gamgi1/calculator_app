$(document).ready(function(){
  var $numButtons = $('.numButton');
  var $operatorButtons = $('.operatorButton');
  var $answerArea = $('#answer');
  var $buttonEQ = $('#equals');
  var $buttonAC = $('#AC');
  var $buttonPM = $('#plusorminus');

  var operatorClicked = false;
  var firstNum = "";
  var secondNum = "";
  var answer = 0;
  var operator = "";

  $operatorButtons.each(function(){
    $(this).click(function(){
      operatorClicked = true;
      operator = $(this).html();
    });
  });

  $buttonEQ.click(function(){
    if(operator === "+"){
      answer = Number(firstNum) + Number(secondNum);
    } else if(operator === "-") {
      answer = Number(firstNum) - Number(secondNum);
    } else if(operator === "x") {
      answer = Number(firstNum) * Number(secondNum);
    } else if(operator === "/") {
      answer = Number(firstNum) / Number(secondNum);
    } else if(operator === "%") {
      answer = Number(firstNum) % Number(secondNum);
    }
    $answerArea.html(answer);
    firstNum = answer.toString();
    secondNum = ""
  });

  $buttonAC.click(function(){
    firstNum = "";
    secondNum = "";
    answer = 0;
    operator = "";
    operatorClicked = false;
    $answerArea.html("0");
  })

  $numButtons.each(function(){
    $(this).click(function(){
      var number = $(this).html();
      operatorClicked ? secondNum +=  number : firstNum += number;
      operatorClicked ? $answerArea.html(secondNum) : $answerArea.html(firstNum);
    });
  });
});
