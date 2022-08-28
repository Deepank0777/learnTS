class Person1{
    constructor(public firstname:string, public lastname:string){
    }

    get fullName():string{
        return this.firstname +' '+this.lastname;
    }

    makeAWalk(){
        this.walk;
    }

    private walk():void{
        console.log('walking');
    }

    protected talk():void{
        console.log('talking');
    }
}

class Student1 extends Person1{
    constructor(public studentId:string, firstname:string, lastname:string){
        super(firstname, lastname);
    }

    read():void{
        console.log('reading');
    }

    accessParentMethods(){
        this.fullName;//public method can be accessed
        this.talk();//protected method can be accessed
        // this.walk();//private mentod can't be accessed here
    }
}

const student = new Student1('123' ,'Alex' ,'Martin');
student.accessParentMethods(); 