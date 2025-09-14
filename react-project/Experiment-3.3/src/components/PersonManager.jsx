import React from "react";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    return Name: ${this.name}, Age: ${this.age};
  }
}

class Student extends Person {
  constructor(name, age, course) {
    super(name, age);
    this.course = course;
  }

  displayInfo() {
    return ${super.displayInfo()}, Course: ${this.course};
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  displayInfo() {
    return ${super.displayInfo()}, Subject: ${this.subject};
  }
}

function PersonManager() {
  const student1 = new Student("Bhavishya", 19, "Computer Science");
  const teacher1 = new Teacher("Kumar", 40, "Mathematics");

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h2>Person Class Hierarchy</h2>
      <div style={{ marginBottom: "15px" }}>
        <h3>Student Details:</h3>
        <p>{student1.displayInfo()}</p>
      </div>
      <div>
        <h3>Teacher Details:</h3>
        <p>{teacher1.displayInfo()}</p>
      </div>
    </div>
  );
}

export default PersonManager;