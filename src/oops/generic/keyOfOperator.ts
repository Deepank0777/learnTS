interface Product{
    name:string,
    price:number
}

class ProductStore<T>{
    objects:T[] = [];

    addProduct(prod:T){
        this.objects.push(prod);
    }

    findProduct(key: keyof T, value:unknown): T | undefined{
        return this.objects.find(obj => obj[key] === value); 
    }
}

const store = new ProductStore<Product>();
store.addProduct({name:'Olive', price:500});
store.findProduct('name', 'Olive')
store.findProduct('price', 500);
// store.findProduct('unknown key', 'Olive');//invalid key to search since this is not a key of Product