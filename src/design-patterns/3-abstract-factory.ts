import { Door, WoodenDoor, IronDoor } from './1-simple-factory';

abstract class DoorComponent { 
    abstract printDescription(): void;
}

class WoodenDoorComponent {
    printDescription(): void{
        console.log("This is a wooden door component");
    }
}

class IronDoorComponent extends DoorComponent {
    printDescription(): void {
        console.log("This is a iron door component");
    }
}

abstract class DoorFactory {
    abstract makeDoor(width: number, height: number): Door;
    abstract makeDoorComponent(): DoorComponent;
}

class WoodenDoorFactory extends DoorFactory {
    makeDoor(width: number, height: number): Door {
        return new WoodenDoor(width, height);
    }
    makeDoorComponent(): DoorComponent {
        return new WoodenDoorComponent();
    }
}
class IronDoorFactory extends DoorFactory {
    makeDoor(width: number, height: number): Door {
        return new IronDoor(width, height);
    }
    makeDoorComponent(): DoorComponent {
        return new IronDoorComponent();
    }
}


console.log('---------------- 3 abstract factory ----------------');

let woodenDoorFactory = new WoodenDoorFactory();

let door = woodenDoorFactory.makeDoor(2,3);
let doorComponent = woodenDoorFactory.makeDoorComponent();

door.printDescription();
doorComponent.printDescription();

