interface Result<T>{
    data: T | null;
    error: string | null;
}

interface User{
    name:string
}

class Url{
    fetch<T>(url:string):Result<T>{
        console.log(url);
        return {data:null, error:null};
    }
}

// function fetch<T>(url:string):Result<T>{
//     return {data:null, error:null};
// }
const url = new Url();
url.fetch<User>('http://someurl.com').data