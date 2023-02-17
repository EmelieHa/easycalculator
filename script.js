
let operator;
let firstNum;
let secondNum;
let sum;
let operandSign;
document.getElementById("clear").addEventListener('click', clear);
let equal = document.getElementById("equals");
equal.addEventListener('click', equalFunc);
let displayArr = [];
let numArr = [];

    
  
function displayFunc(valueNum) {
 
  if (displayArr[0] == 0 && valueNum == 0) {
return;
  } else if (displayArr[0] == 0 && valueNum > 0) {
    displayArr.shift();
 displayArr.push(valueNum);
  } else {
    displayArr.push(valueNum);
  }
    document.getElementById('display').value = displayArr.join('');
}


function clear() {
document.getElementById('display').value = "";
  displayArr = [];
  numArr = [];
}


function calculate(num1, num2, operand) {
    if (operand === '+') {
        sum = parseInt(num1) + parseInt(num2);
    } else if (operand === '-') {
        sum = parseInt(num1) - parseInt(num2);
    } else if (operand === '*') {
       sum = parseInt(num1) * parseInt(num2);
    } else {
        sum = parseInt(num1) / parseInt(num2);
    }
  document.getElementById('display').value = sum;
}


let plus = document.getElementById('+');
plus.addEventListener('click', pushFunc.bind(this, '+'));
let minus = document.getElementById('-');
minus.addEventListener('click', pushFunc.bind(this, '-'));
let times = document.getElementById('*');
times.addEventListener('click', pushFunc.bind(this, '*'));
let divided = document.getElementById('/');
divided.addEventListener('click', pushFunc.bind(this, '/'));


function pushFunc(sign) {
  numArr.push(displayArr.join(''));
displayArr = [];
operandSign = sign;
  document.getElementById('display').value = sign;
} 


function equalFunc() {
  numArr.push(displayArr.join(''));
firstNum = numArr[0];
 secondNum = numArr[1];
 calculate(firstNum, secondNum, operandSign);  
}

