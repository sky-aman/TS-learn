function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class PersonC {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const pers = new PersonC();

console.log(pers);
