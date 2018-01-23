import { Door, WoodenDoor, IronDoor } from './1-simple-factory';

namespace Problem {
    class WoodenDoorInstaller {
        installDoor(width: number, height: number): void{
            let door = new WoodenDoor(width, height);

            console.log("hey, i will install this door: ");
            door.printDescription();
        }
        
    }

    class SteelDoorInstaller {
        installDoor(width: number, height: number): void{
            let door = new IronDoor(width, height);
            
            console.log("hey, i will install this door: ");
            door.printDescription();
        }
    }
}

abstract class DoorInstaller {
    protected abstract buyDoor(width: number, height: number): Door;  // this is the factory method

    installDoor(width: number, height: number): void{
        let door = this.buyDoor(width, height);
        console.log("hey, i will install this door: ");
        door.printDescription();
    }
}

class WoodenDoorInstaller extends DoorInstaller {
    protected buyDoor(width: number, height: number): Door {
        return new WoodenDoor(width, height);
    }
    
}

class SteelDoorInstaller extends DoorInstaller {
    protected buyDoor(width: number, height: number): Door {
        return new IronDoor(width, height);
    }
}

console.log('---------------- 2 factory method ----------------');

let woodenDoorInstaller = new WoodenDoorInstaller();
woodenDoorInstaller.installDoor(2, 5);
