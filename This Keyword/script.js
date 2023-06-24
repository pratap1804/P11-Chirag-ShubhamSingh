
class Person {
    constructor(name, age, gender, nationality){
        this.name = name;
        this.age =age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce(){
        return `I am ${this.name}. I am ${this.age} years old. I am a ${this.gender}. I am an ${this.nationality}.`
    }

}

class Student extends Person {
    constructor(name, age, gender, nationality, subject){
        super(name, age, gender, nationality);
        this.subject = subject;
    }

    study(){
        return `I am ${this.introduce()} I study ${this.subject}.`;
    }
}

let person1 = new Person('Amit', 21, 'M', 'Indian');
console.log(person1.introduce());

let person2 = new Person('Andrew', 32, 'M', 'American');
console.log(person2.introduce());

let person3 = new Person('Bilal', 18, 'M', 'Pakistan');
console.log(person3.introduce());

let student1 = new Student('Abhishek', 28, 'Male', 'Indian', 'Computer Science');
console.log(student1.study());

