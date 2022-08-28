class KeyValStore<K,V>{
    // constructor(public key:K, public value:string){
    constructor(public key:K, public value:V){

    }
}

const keyValStore = new KeyValStore<number, string>(1,'apple');
