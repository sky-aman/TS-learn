// Funciton Type
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1, n2) => n1 + n2;

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  static nature: string;
  constructor(
    public name: string,
    public age: number,
    public outputName?: string
  ) {}

  greet(phrase: string) {
    if (this.outputName) {
      console.log(phrase + " " + this.outputName);
    } else {
      console.log(phrase + " " + this.name);
    }
  }
}

let user1: Greetable;

user1 = new Person("Max", 26);

// user1.name = "Aman";

user1.greet("Hello");

console.log;
console.log(user1);
