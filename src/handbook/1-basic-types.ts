// basic
let isEverythingOk: boolean = true;
let aNumber: number = 3;

// strings
let fullname: string = 'Martin';

let sentance: string = `My name is ${fullname}!`;

// arrays
let myArray:number[] = [1,2,3];
let myArray2: Array<number> = [5,6,7];

let myTuple: [string, number] = ['hey', 10];
myTuple[1] = 12;

let myTriple: [string, string, number] = ['boy', 'girl', 10];

// enums
enum Color { Red =3, Blue, Yellow };
let color: Color = Color.Blue;

// any, void, never
let anything: any = 3;
anything='ceva';

let numberOrBoolean: number|boolean = 3;
numberOrBoolean = true;

function calculate(a:number): void{
}
function calculate1(a: number): number | string {
    if(a == 1) return 1;
    return "something else";
}

let calculateResult = calculate1(1);



