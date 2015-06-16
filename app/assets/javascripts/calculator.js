var button1 = document.getElementById('1');
var button2 = document.getElementById('2');
var button3 = document.getElementById('3');
var button4 = document.getElementById('4');
var button5 = document.getElementById('5');
var button6 = document.getElementById('6');
var button7 = document.getElementById('7');
var button8 = document.getElementById('8');
var button9 = document.getElementById('9');
var button0 = document.getElementById('0');
var buttonPL = document.getElementById('plus');
var buttonMI = document.getElementById('minus');
var buttonMU = document.getElementById('multiply');
var buttonDI = document.getElementById('divide');
var buttonMO = document.getElementById('modulus');
var buttonEQ = document.getElementById('equals');
var buttonPO = document.getElementById('point');
var buttonAC = document.getElementById('AC');
var buttonPM = document.getElementById('plusorminus');

var operatorClicked = false;
var firstNum = "";
var secondNum = "";
var answer = 0;
var operator = "";

buttonPL.addEventListener('click', function(){
  operatorClicked = true;
  operator = "+";
});
buttonMI.addEventListener('click', function(){
  operatorClicked = true;
  operator = "-";
});
buttonMU.addEventListener('click', function(){
  operatorClicked = true;
  operator = "x";
});
buttonDI.addEventListener('click', function(){
  operatorClicked = true;
  operator = "/";
});
buttonMO.addEventListener('click', function(){
  operatorClicked = true;
  operator = "%";
});

buttonEQ.addEventListener('click', function(){
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
  document.getElementById('answer').innerHTML = answer;
  firstNum = answer.toString();
  secondNum = ""
});

buttonAC.addEventListener('click', function(){
  firstNum = "";
  secondNum = "";
  answer = 0;
  operator = "";
  operatorClicked = false;
  document.getElementById('answer').innerHTML = "0";
})

button1.addEventListener('click', function(){
  operatorClicked ? secondNum += "1" : firstNum += "1";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button2.addEventListener('click', function(){
  operatorClicked ? secondNum += "2" : firstNum += "2";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button3.addEventListener('click', function(){
  operatorClicked ? secondNum += "3" : firstNum += "3";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button4.addEventListener('click', function(){
  operatorClicked ? secondNum += "4" : firstNum += "4";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button5.addEventListener('click', function(){
  operatorClicked ? secondNum += "5" : firstNum += "5";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button6.addEventListener('click', function(){
  operatorClicked ? secondNum += "6" : firstNum += "6";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button7.addEventListener('click', function(){
  operatorClicked ? secondNum += "7" : firstNum += "7";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button8.addEventListener('click', function(){
  operatorClicked ? secondNum += "8" : firstNum += "8";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button9.addEventListener('click', function(){
  operatorClicked ? secondNum += "9" : firstNum += "9";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
button0.addEventListener('click', function(){
  operatorClicked ? secondNum += "0" : firstNum += "0";
  operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
});
// buttonPO.addEventListener('click', function(){
//   operatorClicked ? secondNum += "." : firstNum += ".";
//   operatorClicked ? document.getElementById('answer').innerHTML = secondNum : document.getElementById('answer').innerHTML = firstNum;
// });
