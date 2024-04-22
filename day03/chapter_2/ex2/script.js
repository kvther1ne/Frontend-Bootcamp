const button1 = document.getElementsByClassName("1")[0];
const button2 = document.getElementsByClassName("2")[0];
const button3 = document.getElementsByClassName("3")[0];
const button4 = document.getElementsByClassName("4")[0];
const button5 = document.getElementsByClassName("5")[0];
const button6 = document.getElementsByClassName("6")[0];
const button7 = document.getElementsByClassName("7")[0];
const button8 = document.getElementsByClassName("8")[0];
const button9 = document.getElementsByClassName("9")[0];
const button0 = document.getElementsByClassName("0")[0];
const buttonDot = document.getElementsByClassName(".")[0];

const buttonC = document.getElementsByClassName("C")[0];

const buttonSum = document.getElementsByClassName("+")[0];
const buttonDif = document.getElementsByClassName("-")[0];
const buttonMul = document.getElementsByClassName("*")[0];
const buttonDiv = document.getElementsByClassName("/")[0];

const buttonRes = document.getElementsByClassName("=")[0];

let operandsString = "";
let operatorsString = "";
let previewString = "";
let answer = 0;

button1.addEventListener("click", function () {
  operandsString = "1";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button2.addEventListener("click", function () {
  operandsString = "2";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button3.addEventListener("click", function () {
  operandsString = "3";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button4.addEventListener("click", function () {
  operandsString = "4";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button5.addEventListener("click", function () {
  operandsString = "5";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button6.addEventListener("click", function () {
  operandsString = "6";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button7.addEventListener("click", function () {
  operandsString = "7";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button8.addEventListener("click", function () {
  operandsString = "8";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button9.addEventListener("click", function () {
  operandsString = "9";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

button0.addEventListener("click", function () {
  operandsString = "0";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonDot.addEventListener("click", function () {
  operandsString = ".";
  previewString = previewString.concat(operandsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonC.addEventListener("click", function () {
  operandsString = "";
  operatorsString = "";
  previewString = "";
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonSum.addEventListener("click", function () {
  operatorsString = "+";
  previewString = previewString.concat(operatorsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonDif.addEventListener("click", function () {
  operatorsString = "-";
  previewString = previewString.concat(operatorsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonMul.addEventListener("click", function () {
  operatorsString = "*";
  previewString = previewString.concat(operatorsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonDiv.addEventListener("click", function () {
  operatorsString = "/";
  previewString = previewString.concat(operatorsString);
  document.getElementsByClassName("screen")[0].innerHTML = previewString;
});

buttonRes.addEventListener("click", function () {
  try {
    let value = eval(previewString);
    document.getElementsByClassName("screen")[0].innerHTML = value;
  } catch (error) {
    if (error instanceof Error)
      document.getElementsByClassName("screen")[0].innerHTML = "Error";
  }

  operandsString = "";
  operatorsString = "";
  previewString = "";
});
