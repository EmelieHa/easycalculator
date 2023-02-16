
let operator;
let firstNum;
let secondNum;
let sum;
document.getElementById("clear").addEventListener('click', clear);
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

let operandSign;

function pushFunc(sign) {
  numArr.push(displayArr.join(''));
displayArr = [];
operandSign = sign;
  document.getElementById('display').value = sign;

} 


let equal = document.getElementById("equals");
equal.addEventListener('click', equalFunc);

function equalFunc() {
  numArr.push(displayArr.join(''));
firstNum = numArr[0];
 secondNum = numArr[1];
 console.log(numArr, operandSign);
 calculate(firstNum, secondNum, operandSign); 
  
}

