import { Door, WoodenDoor, IronDoor } from './1-simple-factory';

interface DoorComponent { 
    printDescription(): void;
}

class WoodenDoorComponent implements DoorComponent {
    printDescription(): void{
        console.log("This is a wooden door component");
    }
}

class IronDoorComponent implements DoorComponent {
    printDescription(): void {
        console.log("This is a iron door component");
    }
}

namespace Problem1 {
    class WoodenDoorFactory {
        makeDoor(width: number, height: number): Door {
            return new WoodenDoor(width, height);
        }
    }

    class WoodenDoorComponentFactory {
        makeDoorComponent(): DoorComponent {
            return new WoodenDoorComponent();
        }
    }

    let doorFactory = new WoodenDoorFactory();
    let doorComponentFactory = new WoodenDoorComponentFactory();

    let door = doorFactory.makeDoor(1,2);
    let doorComponent = doorComponentFactory.makeDoorComponent();
}

namespace Problem1_Improved {
    class WoodenDoorFactory {
        makeDoor(width: number, height: number): Door {
            return new WoodenDoor(width, height);
        }
        makeDoorComponent(): DoorComponent {
            return new WoodenDoorComponent();
        }
    }

    let doorFactory = new WoodenDoorFactory();

    let door = doorFactory.makeDoor(1,2);
    let doorComponent = doorFactory.makeDoorComponent();
}

namespace Problem2 {
    class WoodenDoorFactory {
        makeDoor(width: number, height: number): Door {
            return new WoodenDoor(width, height);
        }
        makeDoorComponent(): DoorComponent {
            return new WoodenDoorComponent();
        }
    }

    class IronFactory {
        makeDoor(width: number, height: number): Door {
            return new IronDoor(width, height);
        }
        makeDoorComponent(): DoorComponent {
            return new IronDoorComponent();
        }
    }

    let doorFactory = new WoodenDoorFactory();

    let door = doorFactory.makeDoor(1,2);
    let doorComponent = doorFactory.makeDoorComponent();
}

namespace Solution {
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

    export function run(){
        let woodenDoorFactory = new WoodenDoorFactory();

        let door = woodenDoorFactory.makeDoor(2,3);
        let doorComponent = woodenDoorFactory.makeDoorComponent();
        
        door.printDescription();
        doorComponent.printDescription();
    }
}

Solution.run();
