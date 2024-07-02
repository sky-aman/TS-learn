function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: "Max" }, { age: 30 }));

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// Below is redundant
// const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
//   { name: "Max", hobbies: ["Sports"] },
//   { age: 30 }
// );

console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got " + element.length + " elements.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe([]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Aman" }, "name"));
