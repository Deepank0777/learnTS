class Account{
    acNumber: number;
    private _balance: number;
    type: AccountType;
    
    constructor(acNumber: number, balance:number, type: AccountType){
        this.acNumber = acNumber;
        this._balance = balance;
        this.type = type;
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

type AccountType = 'saving' | 'current';
const account = new Account(123, 0, 'saving');
account.updateBalance(123, 5);
account.getBalance(123);