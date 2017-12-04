interface PersonInterface {
    name: string,
    age?: number;

    destroy(p1: number): string;
}

class Person implements PersonInterface {
    name: string;
    age?: number;

    destroy(p1: number): string {
        return 'ok';
    }
}

class SugarSyntaxConstructor implements PersonInterface {
    
    constructor(public name: string, public age?: number){}
    
    destroy(p1: number): string {
        return 'ok';
    }
    
}

// new constructor in interface
interface DogInterface { 
    age: number;
    bark(): void;
}

interface DogConstructor {
    new (age: number): DogInterface;
}

function createDog(dogConstructor: DogConstructor, age: number){
    return new dogConstructor(age);
}

class Dog implements DogInterface {
    age: number;
    bark(): void {
    }
}

let dog1 = createDog(Dog, 4);

// extending interfaces
interface SuperDogInterface extends DogInterface{
    fly(): void;
}

let superDog = <SuperDogInterface>{};
superDog.fly = () => {};
superDog.bark = () => {};
superDog.age = 3;

// hybrid types
interface MyHybridInterface {
    (a: number): string;
    coolName: string;
}

let myHybrid = <MyHybridInterface>function(a:number):string{
    return 'ok';
}
myHybrid.coolName = 'ok1';

// implements and extends
interface Interface1 {}
interface Interface2 extends Interface1 {}

class Class1 implements Interface1 {}
class Class2 extends Class1 {}

class Interface3 implements Class1 {}

// inheritance
class Mom {
    constructor(public name: string, public age: number){}

    do(action: string): void{

    }

    private privateDo(action: string): void{}
    protected protectedDo(action: string): void{}
}

class Child extends Mom{
    private privateAge: number;
    protected protectedAge: number;

    constructor(
        public name: string, 
        public age: number){

        super(name, age);
    }

    do(action: string): void{
        super.do(action);
        super.protectedDo(action);
    }


}

var child = new Child("ion", 3);


// readonly sugar
class Mouse {
    constructor(public readonly name: string){}

    do(){
        this.name = 'ok';
    }
}


// accessors
class Man {
    private _name: string;

    get name(): string{
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}


// static
class StaticMan {
    static oneValue: string;
    static readonly GOD_VALUE = 'GOD';
}

StaticMan.oneValue = 'ok';

// abstract class
abstract class Abs {
    abstract do(): void;
    protected abstract  protectedDo(): void;
}

class NoAbs extends Abs{
    do(): void {}

    protected protectedDo(): void{}
}

let noAbs = new NoAbs();