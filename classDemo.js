"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(sName, sRank, sMarks) {
        this.sName = sName;
        this.sRank = sRank;
        this.sMarks = sMarks;
    }
    Student.prototype.getSname = function () {
        return this.sName;
    };
    Student.prototype.getStudentGrade = function () {
        if (this.sMarks >= 75) {
            return "A";
        }
        return "C";
    };
    return Student;
}());
exports.Student = Student;
/**let s1 = new Student();
s1.sName = "John"; s1.sMarks = 75; s1.sRank = 3;
console.log(s1.getStudentGrade());
console.log(s1);
**/
console.log("using constructors..");
var s2 = new Student("Taylor", 60, 4);
console.log("from student:");
console.log(s2);
console.log("from student:" + s2.getStudentGrade());
