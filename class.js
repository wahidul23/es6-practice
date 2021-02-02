class student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Hadaram Academy";
    }
}
const student1 = new student(11, "kasem");
const student2 = new student(12, "baten");
console.log(student1, student2);