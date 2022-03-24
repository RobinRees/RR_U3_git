"use strict";

// let selectTheElement = (selectElement) => {
//     return document.querySelector(selectElement);
// }

// //key up funktion
// function onKeyUp() {
//     console.log(this.value);
//     let foundStudent = DATABASE.students.filter((student) => student.lastName.includes(input.value))
//     console.log(foundStudent)
// }
// let input = document.querySelector("input");
// input.addEventListener("keyup", onKeyUp);



// //Rendrera studenter
// function renderStudent (student) {
//     for (let i = 0; i < student.students.length; i++) {
//         let div = document.createElement("div");
//         div.classList.add("container");

    //     div.innerHTML =`
    //     <header id="studentNames">${student.students[i].firstName} ${student.students[i].lastName}</header>
    //     <h4>Courses:</h4>
    //     <div id="grid"> 
    //         <div id="box"></div>
            
    //     </div>
    // `

//     document.querySelector("#wrapper").appendChild(div);
//     }
// }




// renderStudent(DATABASE)


let filterStudents = document.getElementById("filterStudents");

function findStudents () {
    let student = DATABASE.students.filter(student => student.lastName.toLowerCase().includes(filterStudents.value))
    .map(student => student.firstName + " " + student.lastName + "(total:" + "" + "credits)");

    return student;
}

filterStudents.addEventListener("keyup", function () {
    let foundStudent = findStudents();
    document.getElementById("container").innerHTML = "";
    createHTML(foundStudent);

    if (filterStudents.value == "") {
        document.getElementById("container").innerHTML = "";
    }



});

function renderStudent (student) {
    let results = document.getElementById("container");
    let div = document.createElement("div");
    div.classList.add("container");


    div.innerHTML = student;
    results.appendChild(div);
}


function createHTML (students) {
    for (let student of students){
        renderStudent(student);
    }
}


