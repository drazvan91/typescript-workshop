namespace AdvancedTypes {
    // union type
    let a: number | string;
    a = 3;
    a = 'ceva';
    
    // intersection
    interface Person {
        name: string;
    }

    interface Animal { 
        color: string;
    }

    let personimal: Person & Animal = {
        name: "ion",
        color: "blue"
    };

    // nice using case
    function extend<T1, T2> (first: T1, second:T2): T1 & T2 {
        let result = <T1 & T2>{};
        for(let prop in first){
            (<any>result)[prop] = first[prop];
        }

        for(let prop in second){
            (<any>result)[prop] = second[prop];
        }

        return result;
    }

    // type aliases
    type MyCoolName = string;
    type MyCoolFunction = () => string;
    type MyCoolNameOrFunction = MyCoolName | MyCoolFunction;

    function getName(cool: MyCoolNameOrFunction): MyCoolName{
        if(typeof cool == "string"){
            return cool;
        } else{
            return cool();
        }
    }

    // generics with type aliases
    type Container<T> = { value: T };
    type ContainerOrItem<T> = T & Container<T>;


    // type literals
    function printStatusWrong(status: "open" | "close"){
    }

    printStatusWrong("open");

    type DoorStatus = "open" | "close";
    function printStatus(status: DoorStatus ){
        
    }

    printStatus("open");

    // method overloads
    function pStatus(status:"open"):void;
    function pStatus(status:"close"):void;
    function pStatus(status: string){
        //...
    } 


    // key of
    interface Person{
        name: string;
        age: number;
    }

    let personProperties: keyof Person = "name";


    // creating classes using keyof
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }

    type PersonPartial = Partial<Person>;
    type ReadonlyPerson = Readonly<Person>;

}