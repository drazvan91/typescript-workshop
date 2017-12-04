export interface Door {
    width: number;
    height: number;
    printDescription(): void;
}

export class WoodenDoor implements Door {
    constructor(public width: number, public height: number){}

    printDescription(): void {
        console.log("This is a wooden door. Height: %s, width: %s", this.height, this.width);
    }
}

export class IronDoor implements Door {
    constructor(public width: number, public height: number){}

    printDescription(): void {
        console.log("This is a steel door. Height: %s, width: %s", this.height, this.width);
    }
}

class DoorFactory {
    static makeDoor (width: number, height: number): Door{
        return new WoodenDoor(width, height);
    }
}


console.log('---------------- 1 simple factory ----------------');
let door = DoorFactory.makeDoor(1,2);
door.printDescription();
