function max (mahmoudsnumber1, mahmoudsnumber2) { //Notice these parameters are local and do not mix with "number" variable
  if (mahmoudsnumber1 > mahmoudsnumber2) return mahmoudsnumber1; // if mahmoudsnumber1 is larger than mahmoudsnumber2 then it returns with the mahmoudsnumber1
  else if (mahmoudsnumber1 < mahmoudsnumber2) return mahmoudsnumber2; // if mahmoudsnumber1 is not larger than mahmoudsnumber2 then it returns with the mahmoudsnumber2
  else square = true;
  console.log("The function didn't run properly"); //Function written to return a number. This is a debugging line
}

let square = false;

let mahmoudsnumber = max (1, 5);  // the number 5 is larger than 1
if (square == true) console.log("The numbers are the same."); // this prints when both the numbers are the same example: 5, 5
else console.log("The larger number is", mahmoudsnumber); // this tells which number is the larger one
