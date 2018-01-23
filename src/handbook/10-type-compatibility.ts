namespace TypeCompatiblity {

interface Person {
    name: string;
}

class Employee {
    name: string;
}

let person: Person;
let employee = new Employee();

person = employee; // structural typoing

// --------
let employee1 = {
    name: 'ion',
    age: 3
};

person = employee1;

//--------- function type compatibility

let f1 = (x: number): string => 'ok1';
let f2 = (x: number, y: number): string => 'ok2';

f2 = f1;
//f1 = f2; // -- error

// why?
function forEach(array: number[], f: (index: number, value: number) => void) {}

forEach([1,2,3], (index) => {
});

// classes compatibility

class Animal1 {
    name: string;
}
class Animal2{
    name: string;
    private age: number;
}

let a1: Animal1;
let a2: Animal2;
a1 = a2;
//a2 = a1; //-- error

// interfaces compatiblity
interface Empty<T> {
    // data: T;
}
let x: Empty<number>;
let y: Empty<string>;

x = y;  // okay, y matches structure of x

}
