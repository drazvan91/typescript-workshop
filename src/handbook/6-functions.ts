// optional params
function doSomething(a: number, b?: number): void{
}

doSomething(1);
doSomething(1,2);


// default params
function doSomethingElse(a: number, b: number = 3){

}

doSomethingElse(1);
doSomethingElse(1,2);

// rest of the params
function doAgainSomethingElse(a: number, ...theRest: string[]){

}

doAgainSomethingElse(1);
doAgainSomethingElse(1, 'hey');
doAgainSomethingElse(1,'hey', 'how', 'are', 'you');


// arraw functions

interface SomeInterface {
    do(a: number, b: string): number;
}

let someObj = <SomeInterface>{
    do:(a,b)=>3
}