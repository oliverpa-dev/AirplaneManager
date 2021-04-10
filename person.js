class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    checkPersonInfo() {

    }
    assignType() {

    }
}

class Customer extends Person {
    constructor(customerName, customerAge) {
        this.customerName = customerName;
        this.customerAge = customerAge;
    }
    checkCustomerInfo() {

    }
    assignRole() {

    }
}

class Employee extends Person {
    constructor(employeeName, employeeAge) {
        this.employeeName = employeeName;
        this.employeeAge = employeeAge;
    }
    checkCustomerInfo() {

    }
    assignRole() {

    }
}

class Passenger extends Customer {

}

class FlightAttandant extends Employee {

}

class Pilot extends Employee {

}