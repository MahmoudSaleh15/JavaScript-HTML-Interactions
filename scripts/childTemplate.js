console.log("You made it to the childTemplate.js!"); //Debugging line to console ensuring to console ensuring JavaScript link

function main ()
{
  let firstNumber, secondNumber, text;

  firstNumber = document.getElementById("textfield1").value;

  document.getElementById("validityTest1").innerHTML = alert( testNaN (firstNumber) );
  document.getElementById("validityTest1").innerHTML = testNaN (firstNumber);

  secondNumber = document.getElementById("testfield2").value;

  document.getElementById("validityTest2").innerHTML = alert( testNaN (secondNumber) );
  document.getElementById("validityTest2").innerHTML = testNaN (secondNumber);

  if (stop == true)
  {
    document.getElementById("large").innerHTML = "Restart because I said so."
  }
    else
    {
      console.log("What did you say", geometry (firstNumber, secondNumber));
      document.getElementById("large").innerHTML = "What did you say " + geometry (firstNumber, secondNumber);
    }
  }
