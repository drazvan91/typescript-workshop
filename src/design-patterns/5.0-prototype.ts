import { WoodenDoor, Door } from './1-simple-factory';
import { CustomizedDoor } from './4-builder';

namespace Problem1 {
    let door: CustomizedDoor;

    let door2 = new CustomizedDoor(door.width, door.height);
    door2.color = door.color;
    door2.coolFeature = door.coolFeature;

    door2.durability = 3;
}

namespace Solution1_ButProblem1 {
    class CustomizedDoorCloner{
        getClone(door: CustomizedDoor): CustomizedDoor{
            let door2 = new CustomizedDoor(door.width, door.height);
            door2.color = door.color;
            door2.coolFeature = door.coolFeature;
        
            door2.durability = door.durability;

            return door2;
        }
    }
}

namespace Solution2_ForPrivateProps {
    class ColoredDoor implements Door {
        private color: string;
    
        constructor(public width: number, public height: number){}
    
        printDescription(): void {
            console.log("This is a plastic door. Height: %s, width: %s, color: %s", this.height, this.width, this.color);
        }
    
        getClone(): ColoredDoor { // 1st way
            let clone = new ColoredDoor(this.width, this.height);
            clone.color = this.color;
            return clone;
        }

        static cloneDoor(source: ColoredDoor): ColoredDoor {  // 2nd way
            let clone = new ColoredDoor(source.width, source.height);
            clone.color = source.color;
            return clone;
        }
    }

    export function run(){
        let door = new ColoredDoor(1,2);

        let clone1 = door.getClone();
        let clone2 = ColoredDoor.cloneDoor(door);
    }
}

Solution2_ForPrivateProps.run();
