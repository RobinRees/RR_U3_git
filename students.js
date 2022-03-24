"use strict";



//key up funktion
function onKeyUp() {
    console.log(this.value);
    let foundStudent = DATABASE.students.filter((student) => student.lastName.toLowerCase().includes(input.value))
    console.log(foundStudent)

}
let input = document.querySelector("input");
input.addEventListener("keyup", onKeyUp);



//Rendrera studenter
function renderStudent (student) {
    for (let i = 0; i < student.students.length; i++) {
        let div = document.createElement("div");
        div.classList.add("container");

        div.innerHTML =`
        <header id="studentNames">${student.students[i].firstName} ${student.students[i].lastName}</header>
        <h4>Courses:</h4>
        <div id="grid"> 
            <div id="box"></div>
            
        </div>
    `

    document.querySelector("#wrapper").appendChild(div);
    }
}



renderStudent(DATABASE)

