class Person{
    constructor(public firstname:string, public lastname:string){
    }

    get fullName():string{
        return this.firstname +' '+this.lastname;
    }
}

class Student extends Person{
    constructor(public studentId:string, firstname:string, lastname:string){
        super(firstname, lastname);
    }

    read():void{
        console.log('reading');
    }
}

class Teacher extends Person{
    override get fullName(): string {
        return 'Professor ' + super.fullName;    
    }
}

// const student = new Student('s1', 'John', 'Doe');
const teacher = new Teacher('John', 'Doe');
console.log(teacher.fullName);