import { ResetToZero, BackSpace, Includes, IsMinus, Percent, Power, Inverse, SquareRoot, CubeRoot, PlusMinus, AddNumber, AddNumberByKey, PutOperator, AddDoubleZero, AddComma, PutAnswerInto } from "../math/calculator.js";

// CALCULATION => RESULT
const calculation = document.getElementById('calculation');
const result = document.getElementById('result');

// NUMBER (0-9)
const number = document.querySelectorAll('.number');
for (let i = 0; i < 10; i++)
    number[i].addEventListener('click', ()=>{AddNumber(calculation, number[i])});
document.addEventListener('keydown', e => {AddNumberByKey(calculation, e);});

// NUMBER (DOUBLE ZERO)
const doubleZero = document.getElementById('double-zero');
doubleZero.addEventListener('click', ()=>{AddDoubleZero(calculation, doubleZero)});

// NUMBER (COMMA)
const comma = document.getElementById('comma');
comma.addEventListener('click', ()=>{AddComma(calculation, comma)});
document.addEventListener('keydown', (e)=>{if (e.keyCode == 190) AddComma(calculation, comma)})

// AC = ALL CLEAR
const ac = document.getElementById('AC');
ac.addEventListener('click', ()=>{ResetToZero(calculation)});

// BACKSPACE
const backSpace = document.getElementById("BACK");
backSpace.addEventListener('click', ()=>{BackSpace(calculation)});
document.addEventListener('keydown', e => {if (e.keyCode == 8) BackSpace(calculation);});

// PLUSMINUS
const plusMinus = document.getElementById('+/-');
plusMinus.addEventListener('click', () => {PlusMinus(calculation)});

// INVERSE
const inverse = document.getElementById('1/x');
inverse.addEventListener('click', () => {Inverse(calculation);});

// PERCENT
const percent = document.getElementById('%');
percent.addEventListener('click', ()=>{Percent(calculation)});
document.addEventListener('keydown', e => {if (e.keyCode == 37) Percent(calculation);});

// POWER OF 2
const power2 = document.getElementById('power2');
power2.addEventListener('click', ()=>{Power(calculation, calculation.innerText, 2);});

// POWER OF 3
const power3 = document.getElementById('power3');
power3.addEventListener('click', ()=>{Power(calculation, calculation.innerText, 3);});

// 10 POWER X
const tenPower = document.getElementById('ten-power');
tenPower.addEventListener('click', ()=>{Power(calculation, 10, calculation.innerText);});

// UNARY: SQUARE-ROOT
const squareRoot = document.getElementById('square-root');
squareRoot.addEventListener('click', ()=>{SquareRoot(calculation);});

// UNARY: CUBE-ROOT
const cubeRoot = document.getElementById('cube-root');
cubeRoot.addEventListener('click', ()=>{CubeRoot(calculation);});

// BINARY
const binary = document.getElementsByClassName('binary');

// BINARY: ADD
const add = binary['add'];
add.addEventListener('click', ()=>{PutOperator(calculation, add)});
document.addEventListener('keydown', e=>{if (e.key == "+") PutOperator(calculation, add)});

// BINARY: SUBTRACT
const subtract = binary['subtract'];
subtract.addEventListener('click', ()=>{PutOperator(calculation, subtract)});
document.addEventListener('keydown', e=>{if (e.keyCode == 173) PutOperator(calculation, subtract)});

// BINARY: MULTIPLY
const multiply = binary['multiply'];
multiply.addEventListener('click', ()=>{PutOperator(calculation, multiply)});
document.addEventListener('keydown', e=>{if (e.keyCode == 42) PutOperator(calculation, multiply)});

// BINARY: DIVIDE
const divide = binary['divide'];
divide.addEventListener('click', ()=>{PutOperator(calculation, divide)});
document.addEventListener('keydown', e=>{if (e.keyCode == 191) PutOperator(calculation, divide)});

// EQUAL
const equal = document.getElementById('equal');
equal.addEventListener('click', ()=>{
    PutOperator(calculation, equal); PutAnswerInto(result, calculation)});
document.addEventListener('keydown', e=>{
    if (e.key == "=") {
        PutOperator(calculation, equal); PutAnswerInto(result, calculation);
    }
});