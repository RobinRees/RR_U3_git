"use strict";

//Skapar en global variabel för databasen == Students
let students = DATABASE.students;

// skapar div (result) som innehåller elevens för och efternamn samt totala poäng
// Skapar nu även en div som med kurserna
function renderStudent(id) {
    let div = document.createElement("div");
    let student = DATABASE.students[id];
    div.id = "result";
    div.innerHTML =
    `<header>${student.firstName} ${student.lastName} (total credits: ${totalCredits(student)}) </header>
    <div>
        <div id="studentcourses">
        <p>Courses:</p>
        <div id="courses">
            ${renderCourses(student)}
        </div>
    </div>
    </div>`

    return div;
}


// loop som skapar div elementen för students
function renderCourses (student){
    let courseData = DATABASE.courses;
    let courses = [];
    for (let i = 0; i < student.courses.length; i++){
        let id = student.courses[i].courseId 
        courses.push(courseData[id])
    }

   let courseDiv = []
   for (let i = 0; i < courses.length; i++) {
       let div = document.createElement("div");

        // skapar kurserna för studenterna med olika classer beroende på om dem klarat kursen eller inte.
       if (student.courses[i].passedCredits == courseData[courses[i].courseId].totalCredits) {
           let text = div.innerHTML = 
           `<div class="done"><h4>${courses[i].title}</h4>
           <p><b><i>Started:</i></b> ${student.courses[i].started.semester} ${student.courses[i].started.year} </p>
           <p>(${student.courses[i].passedCredits} of ${courseData[courses[i].courseId].totalCredits} credits)</p></div>`
           courseDiv.push(text)
       } else {
           let text = div.innerHTML = 
           `<div class="notdone"><h4>${courses[i].title}</h4>
           <p><b><i>Started:</b> ${student.courses[i].started.semester} ${student.courses[i].started.year} </p>
           <p>(${student.courses[i].passedCredits} of ${courseData[courses[i].courseId].totalCredits} credits)</p></div>`
           courseDiv.push(text)
       }
   }

   return courseDiv.toString().split(",").join("");
}

// För att räkna ut total credits
function totalCredits(student) {
    let credits = []
    for (let course of student.courses) {
        credits.push(course.passedCredits)
    };

    let creditSum = 0
    for (let i = 0; i < credits.length; i++){
        creditSum += credits[i]
    };
    return creditSum;
}

function showStudents (students) {
    let studentsElement = document.getElementById("result");
    for (let student of students) {
        let studentElement = renderStudent(student.studentID);
        studentsElement.appendChild(studentElement);
    }
}

function searchLastName() {
    return input.value.toLowerCase();
}

let input = document.getElementById("students-search");
input.addEventListener("keyup", studentLastName);

function studentLastName (){
    let studentsArray = []
    for ( let i = 0; i < students.length; i++){
        document.getElementById("result").innerHTML = ""
        if ("" == searchLastName()){
            document.getElementById("result").innerHTML = ""
        } else if (students[i].lastName.toLowerCase().includes(searchLastName())) {
            studentsArray.push(students[i]);
        } 

    }

    showStudents(studentsArray)
}

function submit () {
    let studentsArray = []
    for ( let i = 0; i < students.length; i++){
        if (students[i].lastName.toLowerCase().includes(searchLastName())) {
            studentsArray.push(students[i]);
        } 
    }

    showStudents(studentsArray)
}

input.addEventListener("submit", submit);


// För att alla studenter ska vara renderade när sidan
showStudents(DATABASE.students);

