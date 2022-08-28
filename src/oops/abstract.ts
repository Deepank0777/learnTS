/* 
const shape = new Shape('red');
shape.draw();
class Shape{
    constructor(public color:string){}

    draw():void{}
}

:- this literally has no meaning since we can't draw a shape
so make Shape class a abstract class (can't create a object then)
make method as abstract as well so that no definition can be defined
*/

abstract class Shape{
    constructor(public color:string){}

    abstract draw():void
}

class Circle extends Shape{
    constructor(public redius:number, color:string){
        super(color);
    }

    override draw(): void {
        console.log('drawing a circle of redius ', this.redius);
    }
}

const circle = new Circle(5, 'red');
circle.draw();