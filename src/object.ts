// example-1
const employee:{
    readonly id:number,
    name:string,
    retire: (date: Date) => void
}  = {
    id: 5,
    name: 'Jon',
    retire: (date: Date) =>{
        console.log(date)
    }
}
// employee.id = 6 //invalid because id is readonly

// example-2
type Fruit = {
    name: string,
    color: string,
    quantity: number
}

const summerFruit: Fruit = {
    name: 'mango',
    color: 'yellow',
    quantity: 5
}

// example-3
type Hight = {
    hight: number
}
type Weight = {
    weight: number
}
type Age = {
    age: number
}

const bmr: Hight & Weight & Age = {
    hight : 6,
    weight: 86,
    age: 26,
}