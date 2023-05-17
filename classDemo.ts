export class Student {
     sName: string;
    sRank: number;
    sMarks: number;

   constructor(sName: string, sRank: number, sMarks: number) {
        this.sName = sName;
        this.sRank = sRank; this.sMarks = sMarks;
    }

    getSname(): string{
        return this.sName;
    }
    getStudentGrade(): string{
        if (this.sMarks >= 75) {
            return "A";
        }
        return "C";
    }
    
}

/**let s1 = new Student();
s1.sName = "John"; s1.sMarks = 75; s1.sRank = 3;
console.log(s1.getStudentGrade());
console.log(s1);
**/
console.log("using constructors..")
let s2 = new Student("Taylor", 60, 4);
console.log("from student:");
console.log(s2);
console.log("from student:"+s2.getStudentGrade());