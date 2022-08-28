function calculateTax(income:number, year:number): number{
// function calculateTax(income:number, year?:number): number{ //argument year is optional
        if(year < 2022){
            return income*.25;
        }
        return income*.30;
}

function kgToLbs(weight: number | string):number {
    if(typeof(weight) === 'number'){
        return weight * 2.2;
    }

    return parseInt(weight) * 2.2;
}

function greet(name: string | null){
    console.log('hi ', name);
}

greet('John');
greet(null);

function reject(message: string):never{
    throw new Error(message);
}

reject('some error');
// console.log('since above line is throwing an error thus I will always be unreachable);