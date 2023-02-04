// IMPORT MODULES
// import { Subject } from "./subject.js";
// import { Student } from "./student";
// import {} from "./form.js";
// import {} from "./exam.js";

// SKLADIRANJE PODATAKA U NIZ
var skladiste = [];

// DOCUMENT READY
$(document).ready(function () {
  //
  // Kreiranje i Ubacivanje subjecta u HTML
  // Promeni da se dodaje sa append
  var subject1 = new Subject("JavaScript", "js");
  var subject2 = new Subject("Web Applications", "web");
  var subject3 = new Subject("Python", "pyt");
  var subContainer = $(".predmet");
  //   console.log(subContainer);
  var sub1 = $(
    `<option id="option1" selected value="${subject1.shortname}">${subject1.name}</option>`
  );
  subContainer.append(sub1);
  var sub2 = $(
    `<option id="option1" value="${subject2.shortname}">${subject2.name}</option>`
  );
  subContainer.append(sub2);
  var sub3 = $(
    `<option id="option1" value="${subject3.shortname}">${subject3.name}</option>`
  );
  subContainer.append(sub3);
});

//
// UCITAVANJE UNETIH PODATAKA
function addStudent(event) {
  // console.log(event);
  var newStudentSubject = $("#validationCustom01").val();
  var newStudentName = $("#validationCustom02").val();
  var newStudentGrade = $("#validationCustom03").val();
  // console.log(newStudentSubject);
  // console.log(newStudentName);
  // console.log(newStudentGrade);

  // Pozivanje klase STUDENT
  var newStudent = newStudentName.split(" ");
  // console.log(newStudent);
  var newS = new Student(newStudent[0], newStudent[1]);
  var newNameSurname = newS.getStudentData();

  var newEntry = new Exam(newStudentSubject, newNameSurname, newStudentGrade);
  // console.log(newEntry.getExamInfo());
  // console.log(newEntry.hasPassed());
  var entry1 = newEntry.getExamInfo();
  var entry2 = newEntry.hasPassed();

  var studentData = new Object();
  studentData.name = entry1;
  studentData.hasPassed = entry2;
  studentData.grade = newStudentGrade;
  // console.log(studentData);

  skladiste.push(studentData);
  // console.log(skladiste);
  //
  ispisPodataka();
  //
}

// ISPIS PODATAKA
function ispisPodataka() {
  console.log(skladiste);
  var tabelaPassed = $("#tabPassed");
  tabelaPassed.html("");
  var tabelaFailed = $("#tabFailed");
  tabelaFailed.html("");
  var passedNum = 0;
  var failedNum = 0;
  //
  for (let i = 0; i < skladiste.length; i++) {
    if (skladiste[i].grade > 5) {
      var newPassed = $(`<tr>
                        <td>${skladiste[i].name}</td>
                        <td id="green">${skladiste[i].grade}</td>
                        </tr>`);
      tabelaPassed.append(newPassed);
      passedNum++;
    } else {
      var newFailed = $(`<tr>
      <td>${skladiste[i].name}</td>
      <td id="red">${skladiste[i].grade}</td>
      </tr>`);
      tabelaFailed.append(newFailed);
      failedNum++;
    }
  }

  var passPerc = ((passedNum / (passedNum + failedNum)) * 100).toFixed(2);
  var failPerc = ((failedNum / (passedNum + failedNum)) * 100).toFixed(2);
  $("#passedNumber").text(`${passedNum}`);
  $("#passedPercent").text(`${passPerc}`);
  $("#failedNumber").text(`${failedNum}`);
  $("#failedPercent").text(`${failPerc}`);
  $("#sudentsCount").text(`Total students: ${passedNum + failedNum}`);
}
