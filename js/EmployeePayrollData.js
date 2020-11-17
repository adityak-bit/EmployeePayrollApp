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
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(name))
            this._name = name;
        else throw "Name is incorrect";    
    }

    //method
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocaleDateString("en-us", options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary +
            ", gender= " + this.gender + ", startDate= " + empDate;
    }
}
let employeePayrollData = new EmployeePayrollData(1, "Mark", 300);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
try{
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}

let newEmp = new  EmployeePayrollData(3,"Terrisa", 500, "F", new Date());
console.log(newEmp.toString());