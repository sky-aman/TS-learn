function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + " " + b.toString();
    }
    return a + b;
}
const result = add("Max", "Schwarz");
console.log(result.split(" "));
export {};
