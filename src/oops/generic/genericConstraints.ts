//type-1
function echo1<T>(message:T):T{
    console.log(message)
    return message;
}
// echo1(5);

//type-2
//only string and number is valid type
function echo2<T extends string | number>(message:T):T{
    console.log(message)
    return message;
}
// echo2([]);//type-error call

//type-3
interface StringMessage{
    message:string
}

function echo3<T extends StringMessage>(message:T):T{
    console.log(message);
    return message;
}

class StrMess implements StringMessage{
    message: string = 'some message';
}

// echo3(new StrMess());

//type-4
function echo4<T extends {name:string}>(message:T):T{
    console.log(message);
    return message;
}

echo4({name:'John'});