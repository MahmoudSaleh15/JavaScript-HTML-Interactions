let number = [1, 20]; 
let skipCount = 1;
let difference = number[1] - number[0];
let mystartingnumber = number[1];
for (let i=0; i<=difference; i++){
  numbereven = (mystartingnumber += skipCount) % 2;
  console.log("This number is", numbereven, "; This iteration is number", i+skipCount);
}
