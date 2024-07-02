function LoggerD(logString: string) {
  return function (constructor: Function) {
    console.log(logString || "Logging...");
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @LoggerD("Logging - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "app")
class PersonD {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new PersonD();

console.log(person);
