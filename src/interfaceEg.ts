interface Employee {
    name: string;
    salary: number;
}

let employee: Employee = {
    name: "Anand",
    salary: 1000
}


class Manager implements Employee {
    name: string;
    salary: number;
    constructor(n: string, s: number) {
        this.name = n;
        this.salary = s
    }

    print() {
        console.log(`Name: ${this.name}, salary: ${this.salary}`);
    }
}

const emp1 = new Manager("Aravind", 2000)

console.log(emp1);