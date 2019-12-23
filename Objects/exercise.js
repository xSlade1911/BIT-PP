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

function Person(name, surname) {
    this.name = name;
    this.surname = surname;
}

Person.prototype.getFullName = function () {

    return this.name + " " + this.surname;

}

function Employee(name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary;
}

Employee.prototype.getData = function () {

    return this.name + " " + this.surname + " " + " salary : " + this.salary;

}

Employee.prototype.getSalary = function () {

    return "Salary : " + this.salary;

}

Employee.prototype.increaseSalary = function () {

    return this.salary *= 1.1;

}



function Developer(name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {

    return this.specialization;

}

function Manager(name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {

    return this.department;

}

Manager.prototype.changeDepartment = function (depart) {

    this.department = depart;
    return this.department;

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

function Application(name, licence, stars) {
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}

Application.prototype.isCCLicence = function () {
    return this.licence === "CC";

}

Application.prototype.like = function () {

    return ++this.stars;

}

Application.prototype.showStars = function () {

    return this.stars;

}

Application.prototype.getData = function () {
    return `Name: ${this.name}, licence: ${this.licence}, stars: ${this.stars}`;
};


function WebApp(name, url, technologies, licence, stars) {
    Application.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
};

WebApp.prototype = Object.create(Application.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function () {
    return `Name: ${this.name}, url: ${this.url}, technologies: ${this.technologies}, licence: ${this.licence}, stars: ${this.stars}`;
};

WebApp.prototype.reactBased = function () {
    return (this.technologies.indexOf("React") !== -1);
};

function MobileApp(name, platforms, licence, stars) {
    Application.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(Application.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.forAndroid = function () {
    return (this.platforms.indexOf("Android") !== -1);
}

MobileApp.prototype.getData = function () {
    return `Name: ${this.name}, platform: ${this.platforms}, licence: ${this.licence}, stars: ${this.stars}`;
};


var app1 = new WebApp("Bus Plus", "http.nesto", "PHP MySql", "CC", 4);
var app2 = new WebApp("Filmovi", "http.nesto drugo", "JS React", "GNU", 1);
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



