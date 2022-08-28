class Account3{
    constructor(public acNumber: number,private _balance:number,public type: AccountType){
    }

    set balance(value:number){
        console.log('value from balance setter',value)
        if(value <= 0) throw new Error('invalid value');

        this._balance += value;
    }

    get balance():number{
        console.log(this._balance);
        return this._balance;
    }
}

const account3 = new Account3(123, 0, 'saving');
account3.balance;
account3.balance = 10;
account3.balance;


