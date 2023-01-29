// Exercise 1
// There is a JSON file with students.Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json


fetch("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json")
    .then(response => response.json())
    .then(data => {
        console.log("All students with an average grade higher than 3", averageGradeHigherThan3(data));
        console.log("All female student names with an average grade of 5", femaleStudentWithAverageGradeOf5(data));
        console.log("All male student full names who live in Skopje and are over 18 years old", maleStudentFullNamesWhoLiveInSkopjeOver18(data));
        console.log("The average grades of all female students over the age of 24", averageGradesOfAllFemaleStudentsOver24(data));
        console.log("All male students with a name starting with B and average grade over 2", maleStudentsWithNameStartingWithBAverageGradeOver2(data));
    })
    .catch(error => console.log(error));


let averageGradeHigherThan3 = (students) => students
    .filter(x => x.averageGrade > 3);


let femaleStudentWithAverageGradeOf5 = (students) => students
    .filter(x => x.gender === "Female" && x.averageGrade === 5)
    .map(student => student.firstName)


let maleStudentFullNamesWhoLiveInSkopjeOver18 = (students) => students
    .filter(x => x.gender === "Male" && x.city === "Skopje" && x.age > 18)
    .map(student => `${student.firstName} ${student.lastName}`)



let averageGradesOfAllFemaleStudentsOver24 = (students) => students
    .filter(x => x.gender === "Female" && x.age > 24)
    .map(student => student.averageGrade)



let maleStudentsWithNameStartingWithBAverageGradeOver2 = (students) => students
    .filter(x => x.gender === "Male" && x.averageGrade > 2 && x.firstName.toUpperCase().startsWith("B"))





