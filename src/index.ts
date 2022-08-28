let num: number = 5;
if(num < 5){
    num = 10
}
console.log(num);

let arr: number[] = [1,2,3];
// let arr1: number[] = [1,2,'3'];//invalid

let tuple: [number, string] = [1, 'userid'];

//PascalCase naming convention
// enum Size {Small, Medium, Large}
const enum Size {Small = 1, Medium, Large} //more optimized one
const tShirtSize: Size = Size.Large;
console.log(tShirtSize);

type Quantity = 50 | 100;
const quantity1: Quantity = 50;//quantity can either be 50 or 100
