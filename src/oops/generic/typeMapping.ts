interface Prod{
    name:string;
    price:number;
}

type ReadOnly<T> = {
    readonly [K in keyof T] : T[K]
}
type Optional<T> = {
    [K in keyof T]?: T[K]
}

const product: ReadOnly<Prod> = {
    name: 'Olive',
    price: 50,
}

// product.name = 'dncbd';//can't change because of readonly

