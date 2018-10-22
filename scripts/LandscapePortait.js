//console.log("You made it to the LandscapePortait.js!");


let stop = false;

function testNaN (number) {
  console.log(stop);
  if ( isNaN (number) ) {
    stop = true;
    return "Type a Real Number"
  } else {
    return "Input Validated"
  }

}

function geometry (width, height) {
  if (width == height) return 'Square';

}

function main () {

  let firstNumber, secondNumber, text;

  firstNumber = document.getElementById("textfield1").value;

  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById("testfield2").value;

  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true)
  {
    document.getElementById("answer").innerHTML = "Restart the example, an width or height needs to be a number."
  }
    else
    {
      console.log("What did you say", geometry (firstNumber, secondNumber));
      document.getElementById("large").innerHTML = "What did you say " + geometry (firstNumber, secondNumber);
    }
  }
