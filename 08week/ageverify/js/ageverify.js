document.getElementById('submit-button').addEventListener("click", redirect);

function redirect() {
  const ageNum = Number(document.getElementById('input-age').value);
  console.log(ageNum);
  if (ageNum < 21) {
    console.log("Too young");
  } else if (ageNum >= 21) {
    console.log("Just right");
    // window.location.replace('../../../07week/Checkpoint2/index.html');
  } else if (ageNum < 0 || ageNum === NaN) {
    console.log("Not a number");
    // document.getElementById('wrong-age').innerHTML = "Please enter valid age.";
  }

  }
