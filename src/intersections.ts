export type Admin = {
  name: string;
  privileges: string[];
};

export type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface ElevatedEmployee extends Employee, Admin {}

export const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

export type Combinable = string | number;
export type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const universal_value: Universal = 20;
