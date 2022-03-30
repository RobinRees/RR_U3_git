"use strict";

let courses = DATABASE.courses;

function renderCourse(id) {
    let div = document.createElement("div");
    let courses = DATABASE.courses[id];
    div.classList = "result";
    div.innerHTML =
    `<header><u>${courses.title} (total credits: ${courses.totalCredits})</u></header>
    <div>
        <h3>Course Responsible:</h3>
        <div id="resteachers">${findResponsible(courses)}</div>
        <br>
        <h3>Teachers:</h3>
        <div id="teachers">${findTeachers(courses)}</div>
        <br>
        <h3>Students:</h3>
        <div id="students">
        ${findStudents(courses)}</div>
        <br>
        <div id="border"></div>
    </div>
          `
    return div;
}

function renderCourses (courses) {
    let coursesElement = document.getElementById("result");
    for (let course of courses) {
        let courseElement = renderCourse(course.courseId);
        coursesElement.appendChild(courseElement);
    }
}
