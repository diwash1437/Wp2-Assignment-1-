// Names and scores of 15 students
const students = [
  [ "Sese", 88],
  [ "Diwash", 92],
  [ "Prasanna", 72],
  ["Samjhana", 82],
  ["Sahil", 68],
  ["Abhinas", 66],
  ["Bishesh", 80],
  ["Uddhav", 70],
  ["Saroz", 89],
  ["Sabin", 89],



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
  console.log((i+1) +". Student Name: " + student_name
   + ", Student Score: " + student_score);
}
