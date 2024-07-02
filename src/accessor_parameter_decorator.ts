function Log(target: any, propertyName: string | Symbol) {
  console.log("-->Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("-->Accessor decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("-->Method decorator!");
  console.log(target);
  console.log(name);
  console.log(descriptor);

  return {};
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("-->Parameter decorator!");
  console.log(target);
  console.log(name);
  console.log(position);
}
class product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price should be greater than 0");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
