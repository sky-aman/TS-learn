"use strict";
let add;
add = (n1, n2) => n1 + n2;
class Person {
    constructor(name, age, outputName) {
        this.name = name;
        this.age = age;
        this.outputName = outputName;
    }
    greet(phrase) {
        if (this.outputName) {
            console.log(phrase + " " + this.outputName);
        }
        else {
            console.log(phrase + " " + this.name);
        }
    }
}
let user1;
user1 = new Person("Max", 26);
user1.greet("Hello");
console.log;
console.log(user1);
