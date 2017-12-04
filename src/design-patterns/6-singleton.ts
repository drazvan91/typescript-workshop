import { Door } from './1-simple-factory';

class UniqueDoor implements Door {
    width: number;
    height: number;
    printDescription(): void {
        console.log("This is an unique door. Height: %s, width: %s", this.height, this.width);
    }
    
    private constructor() {} 

    private static _instance: UniqueDoor;
    static get instance() {
        if(UniqueDoor._instance == null){
            UniqueDoor._instance = new UniqueDoor();
            UniqueDoor._instance.height = 4;
            UniqueDoor._instance.width = 4;
        }

        return UniqueDoor._instance;
    }
}

console.log('---------------- 6 singleton ----------------');

let uniqueDoor1 = UniqueDoor.instance;
let uniqueDoor2 = UniqueDoor.instance;

uniqueDoor1.printDescription();
uniqueDoor2.printDescription();