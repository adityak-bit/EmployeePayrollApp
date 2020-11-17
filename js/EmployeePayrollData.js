class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4]
    }

    //getter and setter method
    get name() { return this._name; }
    set name(name) {
        this._name = name;
    }

    //method
    toString() {
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary +
            ", gender= " + this.gender + ", startDate= " + this.startDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 300);
console.log(employeePayrollData.toString());