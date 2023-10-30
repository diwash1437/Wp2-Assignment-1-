// Names and scores of 15 students
const students = [
  [ "Sese", 78],
  [ "Diwash", 92],
  [ "Prasanna", 72],
  ["Samjhana", 90]

  // Add more students as needed
];
console.log(students[0][1])

// Sorting the students array in descending order based on name
students.sort().reverse();
console.log(students);




// Using a for loop to iterate through the students array
for (let i = 0; i < students.length; i++) {
  // Accessing the name and score for each student
  let student_name = students[i][0];
  let student_score = students[i][1];

  // Displaying the name and score
  console.log("Student Name: " + student_name + ", Student Score: " + student_score);
}