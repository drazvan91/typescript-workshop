
// bad way
function sum(x: number| boolean): number | string{
    if(typeof x == "number"){
        return 3;
    }

    else if(typeof x == "boolean"){
        return "ok";
    }

}

sum(3);

// nice way

function multiply(x: number): number;
function multiply(x: boolean): string;
function multiply(x:any):any{
    if(typeof x == "number"){
        return 3;
    }

    else if(typeof x == "boolean"){
        return "ok";
    }
}

console.log(multiply(3));

class Person1 {
    go(value: string) : number;
    go(value: number) : string;
    go(value: any): any{
        return null;
    }
}