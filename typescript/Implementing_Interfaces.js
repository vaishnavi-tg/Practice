var Employee = /** @class */ (function () {
    function Employee(n, a) {
        this.name = n;
        this.age = a;
    }
    Employee.prototype.greet = function (phrase) {
        console.log("Good morning ".concat(phrase, " ").concat(this.name));
    };
    return Employee;
}());
var e = new Employee("vaishnavi", 20);
console.log(e.name);
e.greet("TG");
