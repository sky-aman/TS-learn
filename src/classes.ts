abstract class Department {
  //   private readonly id;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe(this: ITDepartment) {
    console.log(`IT Department id: (${this.id})`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    AccountingDepartment.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReport() {
    console.log(this.reports);
  }
  addEmployee(employee: string): void {
    if (employee === "Max") {
      return;
    }
    this.employees.push(employee);
  }

  describe(this: AccountingDepartment) {
    console.log(`Accounting Department id: (${this.id})`);
  }
}

// const it = new ITDepartment("d1", ["Max"]);

// it.addEmployee("Max");
// it.addEmployee("Manu");
// it.printEmployeeInformation();

// it.describe();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

const accounting = AccountingDepartment.getInstance();

// console.log(accounting.mostRecentReport);

// accounting.mostRecentReport = "";

accounting.addReport("Something went wrong");

accounting.printReport();

accounting.addEmployee("Max");
accounting.addEmployee("Aman");
accounting.printEmployeeInformation();
