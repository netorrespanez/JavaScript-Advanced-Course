/**
 * Easy Prototypal Inheritance with Classes
 */


//NOTE: classes === constructor functions

function Student() {}
console.log(typeof class Student {});

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }   
    
  addSubject(newSubject) {
    this.subjects = [...subjects, newSubject]
  }  
}

const student1 = new Student(1, 'Reed');
console.log(student1);


console.log(Student.prototype.addSubject)
const student1 = new Student(1, 'Reed');
console.log(student1.id);


//Everything in JS Classes is public

class Student {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;      
  }  
    
  getStudentName() {
    return `Student: ${this.name}`  
  }
    
  addSubject(newSubject) {
    this.subjects = [...subjects, newSubject]
  }  
}

const student1 = new Student(1, 'Reed');
console.log(student1.getStudentName());