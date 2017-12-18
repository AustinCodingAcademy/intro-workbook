var dieChar = ["", "&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]

function roll() {
  document.getElementById("dice").innerHTML = "";
  for (a=0; a<5; a++) {
    var roll = Math.floor(Math.random()*6)+1;
    document.getElementById("dice").innerHTML += "<span  class='die' data-roll='"+roll+"'>"+dieChar[roll]+"</span>";

  }



  report();


}

roll();


//////////////////////////////////////////////////////
// Add code here that uses loops and conditional statements
// to determine if any of the following cases are true:
//
function report() {
  var pairTest=0;
  var fullTest=0;
  var yahtTest=0;
  var singPair=0;
  var message=0;
  document.getElementById("report").innerHTML = ""; // clear out the report box
  let diceHtml = document.getElementsByClassName('die'); // this puts all the individual die HTML elements in diceHtml
  for (var dieVal = 1; dieVal < 7; dieVal++) {  // we set up a nested loop, first we check for all the 1s, then 2s, etc
    let howManyDice = 0; // we zero out our counter
    for (var die = 0; die < 5; die++) {  // we create the inner loop that cycles through the rolled dice
      if (dieVal == diceHtml[die].dataset.roll) {  // we check if the rolled die is equal to the one's we're counting
        howManyDice++; // if so, we add one to the count
      }
    }
    var rollval = document.getElementsByClassName('die');
    var die1 = rollval[0].dataset.roll;
    var die2 = rollval[1].dataset.roll;
    var die3 = rollval[2].dataset.roll;
    var die4 = rollval[3].dataset.roll;
    var die5 = rollval[4].dataset.roll;
    var dicearray = [];


pair();

function pair (){
    switch (howManyDice) {
      case 2:
        singPair = 1;
        message = document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>";
        break;
      case 3:
        document.getElementById("report").innerHTML += "There are three "+dieVal+"s<br>";
        break;
      case 4:
        document.getElementById("report").innerHTML += "There are four "+dieVal+"s<br>";
        break;
      case 5:
        yahtTest = 4;
        break;

    }
    // if (howManyDice===2) { // we check after the counting is done if it is equal to '2'
    //   document.getElementById("report").innerHTML += "There are a pair of "+dieVal+"s<br>";  // if yes, we report a pair
    // }
  }
}

straight();
fullhouse();
twoPairs();


      console.log(singPair, pairTest, fullTest, yahtTest);

      if (yahtTest===4) {
        document.getElementById("report").innerHTML += "YAHTZEE!!!<br>";
      }else if (fullTest===3 && pairTest===2 && singPair===1) {
          document.getElementById("report").innerHTML += "FullHouse!!!<br>";
        }else if (pairTest===2 && singPair===1) {
            document.getElementById("report").innerHTML += "Two Pairs!!!<br>";
          }else if (singPair===1 && pairTest!==2) {
            message;
      }

  function fullhouse(){
    var x = [die1,die2,die3,die4,die5];
    x.sort();
    if (x[0]==x[1] && x[3]==x[4]) {
      if (x[1]==x[2] || x[3]==x[2]) {
        fullTest = 3;
      }

    }
  }

  function twoPairs(){
    var x = [die1,die2,die3,die4,die5];
    x.sort();
    if (x[0]==x[1] && x[2]==x[3] || x[1]==x[2] && x[3]==x[4] || x[0]==x[1] && x[3]==x[4]){
      pairTest = 2;
    }
  }

  function straight(){
    var x = [die1,die2,die3,die4,die5]
    x.sort
    // diceVal.push()
    small();
    large();

        function small(){
          var test = x.sort().slice(0,4);
          var sm1 = [1,2,3,4];
          var sm2 = [2,3,4,5];
          var sm3 = [3,4,5,6];
          if (test.toString()==sm1.toString() || test.toString()==sm2.toString() || test.toString()==sm3.toString()) {
            // document.getElementById("report").innerHTML += "Small Straight!<br>";
            smtest = true;
            // return smtest;
          }else {
            smtest = false;
          }
        }
        function large(){
          var ltest = x.sort();
          var lg1 = [1,2,3,4,5];
          var lg2 = [2,3,4,5,6];
          if (ltest.toString()==lg1.toString() || ltest.toString()==lg2.toString()) {
            // document.getElementById("report").innerHTML += "Large Straight!<br>";
            lgtest = true;
            // return lgtest;
          }else {
            lgtest = false;
          }
        }

  //The following block of code will evaluate and select the appropriate line of straing to report
        var smtest;
        var lgtest;
        // console.log(straightTest(smtest, lgtest));
        if (smtest === true && lgtest === false){
        // if (straightTest(smtest, lgtest) == true) {
          document.getElementById("report").innerHTML += "Small Straight!<br>";
        }else if(smtest === true && lgtest === true){
            document.getElementById("report").innerHTML += "Large Straight!<br>";
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
}



//
// report the results in the div with the ID 'report'.
// report();
