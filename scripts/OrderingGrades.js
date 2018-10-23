var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]]; // the students names and their Avgmarks are here

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length); // average of all students
}

console.log("Average grade: " + (Avgmarks)/students.length); // gets the total grades together and then displays the average grade and the grade in a letter

        if (avg < 60){
          console.log("Grade : F"); // if the avg is 0-59 then the Grade: F will get displayed in the console.
          }
        else if (avg < 70) {
                console.log("Grade : D"); // if the avg is 60-69 then the Grade: D will get displayed in the console.
                  }
        else if (avg < 80)
             {
                console.log("Grade : C"); // if the avg is 70-79 then the Grade: F will get displayed in the console.
        } else if (avg < 90) {
                console.log("Grade : B"); // if the avg is 80-89 then the Grade: F will get displayed in the console.
        } else if (avg < 100) {
                console.log("Grade : A"); // if the avg is 90-100 then the Grade: F will get displayed in the console.
}
