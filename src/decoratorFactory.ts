function LoggerD(logString: string) {
  console.log("Logger Factory");
  return function (constructor: Function) {
    console.log(logString || "Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template Logger");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    console.log("rendering template");
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@LoggerD("Logging - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class PersonD {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

// const person = new PersonD();

// console.log(person);
