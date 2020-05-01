"use strict";

const threshold = 11;

function addNumber(num) {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value += num;
  changeFontSize(current, threshold);
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value += "+";
  changeFontSize(current, threshold);
}

function subtraction() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value += "-";
  changeFontSize(current, threshold);
}

function multiply() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value += "*";
  changeFontSize(current, threshold);
}

function divide() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value += "/";
  changeFontSize(current, threshold);
}

function equals() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = eval(
    document.querySelector("#results").value
  );
  changeFontSize(current, threshold);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  changeFontSize(current, threshold);
  document.querySelector("#results").value = current.slice(0, -1);
}

function toggleSign() {
  let current = document.querySelector("#results").value;
  let currentFirstChar = current.slice(0, 1); // first char of results
  let currentAfterFirstChar = current.slice(1); // everything after first char of results

  // check for cases where adding/removing a negative sign wouldn't make sense
  if (errorHandler(current, currentAfterFirstChar)) return;

  if (currentFirstChar === "-") {
    // remove "-" from current results
    document.querySelector("#results").value = current.substr(1);
  } else {
    // add "-" to current results
    document.querySelector("#results").value = "-" + current;
  }
}

// Function that checks if str1 is empty or str2 contains a "+", "-", "*", or "/"
function errorHandler(str1, str2) {
  if (
    str1 === "" ||
    str1 === "0" ||
    str2.includes("+") ||
    str2.includes("-") ||
    str2.includes("*") ||
    str2.includes("/")
  )
    return true;
  else return false;
}

// Function that decreases font size of an element
function decreaseFontSize(element) {
  element = document.getElementsByTagName("input")[0];
  element.style.fontSize = "85%";
}

// Function that increases font size of an element
function increaseFontSize(element) {
  element = document.getElementsByTagName("input")[0];
  element.style.fontSize = "115%";
}

// Function that deterimines if we should increase/decrease font size depending on str length
function changeFontSize(str, threshold) {
  let length = str.length;

  if (length > threshold) decreaseFontSize(str);
  else increaseFontSize(str);
}
