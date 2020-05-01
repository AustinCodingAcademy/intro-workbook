"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.body.querySelector(".container-inner");
  const input = document.body.querySelector("#input");
  const goButton = document.body.querySelector("#go");
  const resetButton = document.body.querySelector("#reset");
  var timer = [];
  var pressed = false;

  goButton.addEventListener("click", () => {

    if(pressed) fizzBuzzStop();
    pressed = true;

    var inputValue = parseInt(input.value);

    if (inputValue) {
      inputValue = parseInt(inputValue);
    }

    if(isNaN(inputValue)) {
      alert("I JUST CAN'T DO IT CAPTAIN (value not a number)");
      fizzBuzzClear();
    } else if (inputValue <= 1000) { 
      fizzBuzz(inputValue);
    } else { 
      alert("I JUST CAN'T DO IT CAPTAIN (value over 1000)");
      fizzBuzzClear();
    }
  });

  resetButton.addEventListener("click", () => {
    fizzBuzzStop();
  });

  function fizzBuzz(inputValue) {
    for (let i = 1; i < inputValue + 1; i++) {
      timer.push(setTimeout(function fizzBuzzLogic() {
        if (i % 5 === 0 && i % 3 === 0) {
          container.innerHTML += `<div class="box">Fizz<br>Buzz</div>`;
        } else if (i % 5 === 0) {
          container.innerHTML += `<div class="box">Buzz</div>`;
        } else if (i % 3 === 0) {
          container.innerHTML += `<div class="box">Fizz</div>`;
        } else {
          container.innerHTML += `<div class="box">${i}</div>`;
        }
      }, 10*i));
    }
  }

  function fizzBuzzStop() {
    pressed = false;
    timer.forEach(function(value) {
      window.clearTimeout(value);
    });
    container.innerHTML = "";
  }

  function fizzBuzzClear() {
    input.value = "";
  }

  
});
