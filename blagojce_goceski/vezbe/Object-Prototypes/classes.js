class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}


class Employee extends Person {
    constructor(name, surname, job, salary) {
        super(name, surname);
        this.job = job;
        this.salary = salary;
    }

    getData() {
        return super.getFullName() + ' ' + this.salary;
    }

    getSalary() {
        return this.salary;
    }

    increaseSalary() {
        return (this.salary * 1.1);
    }
}


class Developer extends Employee {
    constructor(name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }

    getSpecialization() {
        return console.log(this.specialization);
    }
}


class Manager extends Employee {
    constructor(name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }

    getDepartment() {
        return console.log(this.department);
    }

    changeDepartment() {
        this.department = 'IT sector';
        return this.department;
    }
}



var employee1 = new Employee ('Blaza', 'Gocesi', 'IT', 1000);
console.log(employee1.getData());
console.log(employee1.getSalary());
console.log(employee1.increaseSalary());