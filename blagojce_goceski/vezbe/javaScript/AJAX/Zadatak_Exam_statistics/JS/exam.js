// EXAM
class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = grade;
  }

  getExamInfo() {
    return `${this.subject} - ${this.student}`;
  }

  hasPassed() {
    if (this.grade > 5) {
      return true;
    } else {
      return false;
    }
  }
}
