class ArrayUtils{

    static wrapInsideArray<T>(value:T){
        return [value];
    }
}

const utils = new ArrayUtils();
// console.log(utils.wrapInsideArray(5));
console.log(ArrayUtils.wrapInsideArray(5));