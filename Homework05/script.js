// Exercise 1
// Create 3 object templates.Academy, Student and Subject.The structure should be: 

// Academy
// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject
// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number.The number can't be smaller than 3.

// Student
// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy.If not, give error in console and do not set the CurrentSubject property

// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
//     StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students(The academy that he is starting)
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students(The subject that he is starting).If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(name, start, end, numberOfClasses) {
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = numberOfClasses * 10;

    this.printStudents = function () {
        console.log(`${this.name} Students:`)
        this.students.forEach(x => {
            console.log(`${x.firstName} ${x.lastName}`)
        })
    }

    this.printSubjects = function () {
        console.log(`${this.name} Subjects:`)
        this.subjects.forEach(x => {
            console.log(x.title)
        })
    }
}

function Subject(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];
    this.overrideClasses = function (num) {
        if (num >= 3) {
            this.numberOfClasses = num;
        } else {
            console.log("Number of classes cannot be smaller then 3!")
        }
    }
}

function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function (academy) {
        academy.students.push(this);
        this.academy = academy;
    };
    this.startSubject = function (subject) {
        if (this.academy && !this.academy.subjects.map(x => x.title).includes(subject.title)) {
            this.academy.subjects.push(subject);
            this.currentSubject = subject;
        } else {
            this.completedSubjects.push(this.currentSubject);
        }
    }
}

let academy1 = new Academy("SEDC", "10.10.2022", "10.10.2023", 10)
let academy2 = new Academy("Brainster", "10.10.2022", "10.10.2023", 10)

let subject1 = new Subject("Javascript", false, null);
let subject2 = new Subject("C#", false, null);
let subject3 = new Subject("React", false, null);

let student1 = new Student("Ilija", "Dobrinov", 20);
let student2 = new Student("Roze", "Dobrinova", 20);

// console.log(subject1);

student1.startAcademy(academy1);
student2.startAcademy(academy1);

student1.startSubject(subject1);
student2.startSubject(subject2);
student2.startSubject(subject3);


academy1.printStudents();
console.log("");
academy1.printSubjects();

// console.log(student1);

// console.log(subject1.numberOfClasses)
// subject1.overrideClasses(5);
// console.log(subject1.numberOfClasses)


// console.log(student1);
// student1.startAcademy(academy1);
// console.log(student1);
// student1.startSubject(subject2);
// console.log(student1);