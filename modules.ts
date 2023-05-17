///to access the class of one file in another file we will use modules concept in TS
//used to export one or more classes to other files.
//to export a class we will use 'export' keyword.|(src file)
//to import a class we will use 'import' keyword.|(destination file)

import { Student } from "./classDemo";

class School {
    students: Student[] =
        [
            new Student("john", 45, 4),
            new Student("Taylor", 45, 4),
        ];
    
    display(): void {
        for (var i in this.students) {
            console.log(this.students[i]);
        }
    }
}

let sch = new School();
console.log("from school....");
console.log("Object:");
console.log(sch);
console.log("Display:"+sch.display());