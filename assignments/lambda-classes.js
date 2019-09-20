// CODE here for your Lambda Classes

class Person {
    constructor(attribs){
        this.name = attribs.name;
        this.age = attribs.age;
        this.location = attribs.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} 

class Instructor extends Person {
    constructor(attribs){
        super(attribs);
        this.specialty = attribs.specialty;
        this.favLanguage = attribs.favLanguage;
        this.catchPhrase = attribs.catchPhrase;
    }  
    demo(subject)  {
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject)  {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attribs){
        super(attribs);
        this.previousBackground = attribs.previousBackground;
        this.className = attribs.className;
        this.favSubjects = attribs.favSubjects;
    }  
       listsSubjects()  {
        return `${this.favSubjects}`;
      };
     
    PRAssignment(subject)  {
         return `${this.name} has submitted a PR for ${subject}`;
    }
     sprintChallenge(subject)  {
        return `${this.name} has begun sprint challenge on ${subject}`;
     }
}

class ProjectManager extends Instructor {
    constructor(attribs){
        super(attribs);
        this.gradClassName = attribs.gradClassName;
        this.favInstructor = attribs.favInstructor;
    }  
    standUp(name,channel)  {
        return `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
      debugsCode(student, subject)  {
          return `${this.name} debugs ${student.name}'s code on ${subject}`;
     }
}

//Person

const bob = new Person({
    name: 'Bob',
    location: 'New York',
    age: 31,
  });

const david = new Person({
    name: 'David',
    location: 'California',
    age: 24,
  });
  
const sara = new Person({
    name: 'Sara',
    location: 'Florida',
    age: 42,
  });  

//Instructor  

const fred = new Instructor({
    name: 'Fred',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const jenny = new Instructor({
    name: 'Jenny',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Hello everyone`
  });

const chris = new Instructor({
    name: 'Chris',
    favLanguage: 'Java',
    specialty: 'Fullstack',
    catchPhrase: `Let's go`
  });


//Student 

const don = new Student ({
    name:'Don',
    previousBackground: 'management',
    className: 'CS332',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    
    PRAssignment: [
        'Don',
        'JavaScript',
      ],
    sprintChallenge: [
        'Don',
        'JavaScriptII',
      ],
  });

const jon = new Student ({
    name:'Jon',
    previousBackground: 'retail',
    className: 'DS3234',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    
    PRAssignment: [
        'John',
        'Python',
      ],
    sprintChallenge: [
        'Don',
        'Python',
      ],
});

const jen = new Student ({
    name:'Jen',
    previousBackground: 'student',
    className: 'CS2312',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    
    PRAssignment: [
        'Jen',
        'CSS',
      ],
    sprintChallenge: [
        'Jen',
        'Html',
      ],
});

//Project Manager

const henry = new ProjectManager ({
    name:'Henry',
    gradClassName: 'CS832',
    favInstructor: 'Glen',
    standUp: [
        'Henry',
        'Help channel',
      ],
      debugsCode: [
        'Henry',
        'Derrick',
        'CSS',
      ],
  });

const pearl = new ProjectManager ({
    name:'Pearl',
    gradClassName: 'CS334',
    favInstructor: 'Ken',
    standUp: [
        'Pearl',
        'Night channel',
      ],
      debugsCode: [
        'Pearl',
        'Wendy',
        'Html',
      ],
});

const ron = new ProjectManager ({
    name:'Ron',
    gradClassName: 'CS654',
    favInstructor: 'Sean',
    standUp: [
        'Ron',
        'Morning channel',
      ],
      debugsCode: [
        'Ron',
        'Bobby',
        'CSS',
      ],
});

console.log(bob.speak());
console.log(fred.demo('Javascript'));
console.log(jenny.grade(jenny,"Javascript"));
console.log(don.listsSubjects());
console.log(don.PRAssignment("Javascript"));
console.log(ron.standUp("Ron","Help channel"));
console.log(pearl.debugsCode(pearl,"Javascript"));

