// first example of interface
function method1(person:{firstName:string, age?: number}){

}

let obj1 = {
    firstName: 'maria',
    lastName: 'dogaru',
    age: 3
}
method1(obj1);

// interfaces in typescript
interface Person {
    firstName: string,
    age?: number
}

function method2(person: Person){   
}

let obj2: Person = {
    firstName: 'maria',
    age: 3
}
method2(obj2);

// readonly 
interface Point {
    readonly x: number;
    readonly y: number;
}

var point: Point = {
    x: 3,
    y: 5
};
point.x = 3;

let array = [1,2,3];
let readonlyArray: ReadonlyArray<number> = array;
readonlyArray[1]=3;
 
// readonly vs const ???

// func types
interface SomethingWithDelegationFunction{
    onClick? : (a: number, b: number) => string;
}

let something: SomethingWithDelegationFunction = {
    onClick : (a:number, b: number) => {
        return '1';
    }
}

// index property
interface MyArray {
    [index: number]: string;
}

