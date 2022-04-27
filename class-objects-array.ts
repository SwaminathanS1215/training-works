class Employee {
    id: string;
    name: string;
    designation: string;
    experience: number;
    salary: number;

    constructor(id: string, name: string, designation: string, experience: number, salary: number) {
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.experience = experience;
        this.salary = salary;
    }
}

// Employee object array which stores all employee data
let empObjArr: Employee[] = [];

empObjArr.push(new Employee('WT100', 'Ramesh', 'Senior Engineer', 10, 200000));
empObjArr.push(new Employee('WT101', 'Suresh', 'Senior Associate Engineer', 8, 150000));
empObjArr.push(new Employee('WT102', 'Dinesh', 'Senior Manager', 12, 300000));
empObjArr.push(new Employee('WT103', 'Veeresh', 'Senior Associate Manager', 10, 250000));
empObjArr.push(new Employee('WT104', 'Kaamesh', 'Associate Engineer', 2, 50000));

// function to find the highest employee salary
function findHighestEmpSalary(): void {
    // Iterate through employee objects to find highest salary
    for (let emp = 1; emp < empObjArr.length; emp++) {
        if (empObjArr[0].salary < empObjArr[emp].salary) {
            empObjArr[0] = empObjArr[emp];
        }
    }

    console.log(`${empObjArr[0].id} has the highest salary which is ${empObjArr[0].salary}`);
}

findHighestEmpSalary();