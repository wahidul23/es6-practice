class Parent{
    constructor(){
        this.fathersName = "Schwerznegger";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fathersName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Rasel");
console.log(baby.getFullName());
console.log(baby2);