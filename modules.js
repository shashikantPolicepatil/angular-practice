"use strict";
///to access the class of one file in another file we will use modules concept in TS
//used to export one or more classes to other files.
//to export a class we will use 'export' keyword.|(src file)
//to import a class we will use 'import' keyword.|(destination file)
Object.defineProperty(exports, "__esModule", { value: true });
var classDemo_1 = require("./classDemo");
var School = /** @class */ (function () {
    function School() {
        this.students = [
            new classDemo_1.Student("john", 45, 4),
            new classDemo_1.Student("Taylor", 45, 4),
        ];
    }
    School.prototype.display = function () {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    };
    return School;
}());
var sch = new School();
console.log("from school....");
console.log("Object:");
console.log(sch);
console.log("Display:" + sch.display());
