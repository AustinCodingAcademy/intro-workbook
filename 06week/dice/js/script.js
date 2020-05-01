let dieChar = [
  "&#9856;",
  "&#9857;",
  "&#9858;",
  "&#9859;",
  "&#9860;",
  "&#9861;"
];

function roll() {
  document.querySelector("#dice").innerHTML = "";
  for (let i = 0; i < 5; i++) {
    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector(
      "#dice"
    ).innerHTML += `<span class="die" data-roll="${roll}">${
      dieChar[roll - 1]
    }</span>`;
  }
  report();
}

roll();

//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  document.querySelector("#report").innerHTML = ""; // clear out the report box
  let diceHtml = document.querySelectorAll(".die"); // this puts all the individual die HTML elements in diceHtml
  var howManyPairs = 0;
  var howManyTriplets = 0;
  var howManyOnes = 0;
  var howManyTwos = 0;
  var howManyThrees = 0;
  var howManyFours = 0;
  var howManyFives = 0;
  var howManySixes = 0;

  for (let dieVal = 1; dieVal < 7; dieVal++) {
    // we set up a nested loop, first we check for all the 1s, then 2s, etc
    var howManyDice = 0; // we zero out our counter
    for (let i = 0; i < 5; i++) {
      // we create the inner loop that cycles through the rolled dice
      if (dieVal === Number(diceHtml[i].getAttribute("data-roll"))) {
        // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count

        switch (dieVal) {
        case 1: howManyOnes++; break;
        case 2: howManyTwos++; break;
        case 3: howManyThrees++; break;
        case 4: howManyFours++; break;
        case 5: howManyFives++; break;
        case 6: howManySixes++; break;
        }
        
      }
    }

    // condition: pair
    if (howManyDice === 2) {
      howManyPairs++; // keep track of number of pairs

      document.querySelector(
        "#report"
      ).innerHTML += `There is a pair of ${dieVal}'s<br>`; // if yes, we report a pair

      // condition: two-pair
      if (howManyPairs === 2) {
        document.querySelector("#report").innerHTML += `>> Two-pair!`;
      }

      // condition: full-house case 1
      if (howManyTriplets === 1) {
        document.querySelector("#report").innerHTML += `>>> Full-House!`;
      }
    }

    // condition: three
    else if (howManyDice === 3) {
      howManyTriplets++; // keep track of number of triplets

      document.querySelector(
        "#report"
      ).innerHTML += `There are three ${dieVal}'s<br>`;

      // condition: full-house case 2
      if (howManyPairs === 1) {
        document.querySelector("#report").innerHTML += `>>> Full-House!`;
      }
    }

    // condition: four
    else if (howManyDice === 4) {
      document.querySelector(
        "#report"
      ).innerHTML += `There are four ${dieVal}'s<br>`;
    }

    // condition: yahtzee!
    else if (howManyDice === 5) {
      document.querySelector(
        "#report"
      ).innerHTML += `>>>>> All ${dieVal}'s! Yahtzee!<br>`;
    }
  }

  // condition: small-straight
  if (
    howManyOnes === 1 &&
    howManyTwos === 1 &&
    howManyThrees === 1 &&
    howManyFours === 1 &&
    howManyFives === 1
  ) {
    document.querySelector("#report").innerHTML += `>>>> Small-Straight!`;
  }

  // condition: big-straight
  if (
    howManyTwos === 1 &&
    howManyThrees === 1 &&
    howManyFours === 1 &&
    howManyFives === 1 &&
    howManySixes === 1
  ) {
    document.querySelector("#report").innerHTML += `>>>> Big-Straight!`;
  }
  

  // condition: nothing
  if (document.querySelector("#report").innerHTML === "") {
    document.querySelector("#report").innerHTML += `*sad trombone*`;
  }
}

// two of dice have the same points, like 3 6 5 6 1 - called pair: example solved for you. Complete the other cases below:

// three of dice have the same points, like 2 4 5 4 4 - called three;
// four of dice have the same points, like 1 4 1 1 1 - called four;
// all five dice have the same points, like 2 2 2 2 2 - called yacht;
// two pairs at once, like 3 6 5 3 5 - called two-pairs;
// pair and three at once, like 1 6 6 1 6 - called full-house;
// sequence from 1 to 5, like 2 4 3 5 1 - called small-straight;
// sequence from 2 to 6, like 6 3 4 2 5 - called big-straight.

//
// report the results in the div with the ID 'report'.
report();
