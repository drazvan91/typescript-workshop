// array desconstructing
let input = [1, 2];
let [first, second] = input;

[first, second] = [1,2,3];
//cooool
[first, second] = [second, first];

function func([first, second]: [number, string]): void{
}

func([1, 'ok']);
func([1, 'ok', 3]);

let [theFirst, ...theRest] = [1,2,3,4];
let [,theSecond,,theForth] = [1,2,3,4];

// object desconstructing
let person = {
    firstName: 'John',
    lastName: 'Johnson',
    age: 3,
    isOk: true
};

let { firstName, age} = person;
let {isOk, ...restOfTheProperties} = person;

let {isOk: newIsOn, lastName } = person; // property renaming

// default values
function defaultValues(person: {firstName: string, age?: number}){
    let {firstName, age = 10} = person;
}

// spread arrays
let array1 = [1, 2];
let array2 = [3, 4];
let fullArray = [0, ...array1, array2, 5];

// spread objects
let defaultOptions = {
    height: 10,
    width: 5
};

let myValues = {
    ...defaultOptions,
    height: 8
};

