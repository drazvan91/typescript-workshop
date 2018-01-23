function numberGenerator(initialValue: number): number{
    return initialValue;
}

function stringGenerator(initialValue: string): string {
    return initialValue;
}

function generator<T>(initialValue: T): T{
    return initialValue;
}

let boolValue = generator<boolean>(true); 
let boolValue2 = generator(true); //infered but not recomanded

// --------------
interface List<T>{
    add(item: T): void;
    insert(position: number, item:T): void;
    removeAt(index: number): T;
}

// ------------
interface Entity {
    name: string;
}

class Repository<T extends Entity>{
    add(item: T){
        console.log(item.name);
    }
}

// type parameters in generic constraints

function getProp(entity: any, property: any): any {
    return entity[property];
}

let entity = {
    a: 'hey',
    b: 'there'
}

let propA = getProp(entity, 'a');

function getProperty<T, K extends keyof T>(entity: T, propertyName: K){
    return entity[propertyName];
}

let propB = getProperty(entity, "b");

// class types in generics

function create<T>(ctor: new() => T): T {
    return new ctor();
}

class Smiley{
    constructor() {
        
    }
}

create(Smiley);



