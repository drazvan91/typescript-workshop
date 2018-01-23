import { Door } from './1-simple-factory';

class UniqueDoor implements Door {
    width: number;
    height: number;
    printDescription(): void {
        console.log("This is an unique door. Height: %s, width: %s", this.height, this.width);
    }
}

class UniqueDoorProvider {
    private _instance: UniqueDoor;
    get instance() {
        if(this._instance == null){
            this._instance = new UniqueDoor();
            this._instance.height = 4;
            this._instance.width = 4;
        }

        return this._instance;
    }
}

let provider = new UniqueDoorProvider();
let uniqueDoor1 = provider.instance;
let uniqueDoor2 = provider.instance;

uniqueDoor1.printDescription();
uniqueDoor2.printDescription();

let provider1 = new UniqueDoorProvider();
let uniqueDoor3 = provider1.instance;
let uniqueDoor4 = provider1.instance;

uniqueDoor3.printDescription();
uniqueDoor4.printDescription();