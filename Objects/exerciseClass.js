/* Employees and Managers

Create constructor functions with properties representing the following:
Person: name, surname
Employee: inherits Person and has job and salary
Developer: inherits from Employee and has specialization
Manager: inherits from Employee and has department

All developers should inherit method:
getSpecialization which prints out the name of the specialization

All managers should inherit methods:
getDepartment which prints out the name of the department
changeDepartment which sets the department value on the given value

All employees should inherit methods:
getData which returns the name, surname and salary
getSalary which prints out the salary
increaseSalary which increases the salary by 10%
 */

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

    return `${this.name} ${this.surname} salary : ${this.salary}`;

}

getSalary() {

    return `Salary : ${this.salary}`;

}

increaseSalary() {

    return this.salary *= 1.1;

}

}


class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super(name, surname, job, salary);
        this.specialization = specialization;
    }


getSpecialization() {

    return this.specialization;

}

}

class Manager extends Employee {
    constructor (name, surname, job, salary, department) {
        super(name, surname, job, salary);
        this.department = department;
    }


    getDepartment() {

        return this.department;
    
    }
    
    changeDepartment(depart) {

        this.department = depart;
        return this.department;
    
    }

}



var empl1 = new Employee("Pera", "Zdera", "accountant", 10000);
var empl2 = new Developer("Mika", "Mikic", "developer", 30000, "JS");
var empl3 = new Manager("Zika", "Zikic", "junior president", 100000, "QA");


console.log(empl1.getSalary());
console.log(empl1.increaseSalary());

console.log(empl2.getSalary());
console.log(empl2.increaseSalary());

console.log(empl2.getSpecialization());

console.log(empl3.getData());
console.log(empl3.getDepartment());
console.log(empl3.changeDepartment("R&D"));
console.log(empl3.getDepartment());


/* Applications:

Create constructor functions with properties representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars
 
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React
 
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms the application is developed for is Android

Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars 
 */

class Application {
    constructor(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

isCCLicence() {

    return this.licence === "CC";

}

like() {

    return ++this.stars;

}

showStars () {

    return this.stars;

}

getData() {
    return `Name: ${this.name}, licence: ${this.licence}, stars: ${this.stars}`;
}

}

class WebApp extends Application {
    constructor(name, licence, stars, url, technologies) {
    super(name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}

getData() {
    return super.getData() + `, url: ${this.url}, technologies: ${this.technologies}`;
}

reactBased() {
    return (this.technologies.indexOf("React") !== -1);
}

}

class MobileApp extends Application {
    constructor(name, platforms, licence, stars) {
    super(name, licence, stars);
    this.platforms = platforms;
}

forAndroid() {

    return (this.platforms.indexOf("Android") !== -1);

}

getData() {

    return super.getData() + ` platform: ${this.platforms}`;

}

}


var app1 = new WebApp("Bus Plus", "CC", 4, "http.nesto", "PHP MySql");
var app2 = new WebApp("Filmovi", "GNU", 1, "http.nesto drugo", "JS React");
var app3 = new MobileApp("Plus", "Android", "CCl", 10);
var app4 = new MobileApp("Bus", "IOS", "CC", 3);

console.log(app1.isCCLicence());
console.log(app1.showStars());
console.log(app1.getData());
console.log(app1.reactBased());
console.log(app2.reactBased());
console.log(app2.like());
console.log(app3.isCCLicence());
console.log(app4.forAndroid());
console.log(app3.getData());



