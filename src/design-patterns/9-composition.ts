interface Employee {
    salary: number;
}

class Developer implements Employee {
    constructor(public salary: number, public technology: string){
    }
}

class Tester implements Employee {
    constructor(public salary: number, public knowsAutomation: boolean){}
}

class Organization {
    private _employees = new Array<Employee>();

    addEmployee(employee: Employee){
        this._employees.push(employee);
    }

    calculateTotalSalary(): number {
        return this._employees.reduce((total, employee) => total + employee.salary, 0);
    }
}

let org = new Organization();
org.addEmployee(new Developer(10, ".net"));
org.addEmployee(new Tester(9, true));

console.log(org.calculateTotalSalary());
