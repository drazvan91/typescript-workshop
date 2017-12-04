import { Door } from './1-simple-factory';

class PlasticDoor implements Door {
    color: string;

    constructor(public width: number, public height: number){}

    printDescription(): void {
        console.log("This is a plastic door. Height: %s, width: %s, color: %s", this.height, this.width, this.color);
    }

    getClone(): PlasticDoor { // 1st way
        let clone = new PlasticDoor(this.width, this.height);
        clone.color = this.color;
        return clone;
    }

    static cloneDoor(source: PlasticDoor): PlasticDoor {  // 2nd way
        let clone = new PlasticDoor(source.width, source.height);
        clone.color = source.color;
        return clone;
    }
}

console.log('---------------- 5 prototype ----------------');

let door1 = new PlasticDoor(1,2);
door1.color = "red";

let door2 = door1.getClone();
door2.color = "blue";
door1.width = 10;

door1.printDescription();
door2.printDescription();