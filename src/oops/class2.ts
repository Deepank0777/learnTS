class Account2{
    
    constructor(public acNumber: number,private _balance:number,public type: AccountType){
    }

    updateBalance(acNumber: number, balance:number): void{
        if(acNumber !== this.acNumber){
            throw new Error('invalid account number');
        }

        if(balance <= 0){
            throw new Error('invalid balance');
        }

        this._balance += balance;
    }

    getBalance(acNumber:number):number{
        if(acNumber !== this.acNumber){
            throw new Error('invalid account number');
        }

        console.log(this._balance);
        return this._balance;
    }
}

// type AccountType = 'saving' | 'current';
const account2 = new Account2(123, 0, 'saving');
// account2.updateBalance(123, 5);
account2.getBalance(123);