import { Door } from './1-simple-factory';

export class CustomizedDoor implements Door {
    color: string;
    durability: number;
    coolFeature: boolean;

    constructor(public width: number, public height: number){}


    printDescription(): void {
        console.log("This is a customized door. width=%s, height=%s, color=%s, durability=%s, coolFeature=%s", 
            this.width, this.height, this.color, this.durability, this.coolFeature)
    }
}

namespace Problem1 {
    let door: CustomizedDoor;
    door = new CustomizedDoor(1,2);
    door.color = "red";
    door.durability = 1;
    door.coolFeature = true;
    // 1. here might be a lot of assignments
    // 2. what about default values?
}

namespace Problem2 {
    class CustomizedDoorFactory {
        make(width: number, height: number, color?: string, durability?: number, coolFeature?: boolean): Door {
            let door: CustomizedDoor;
            door = new CustomizedDoor(1,2);
            door.color = "red";
            door.durability = 1;
            door.coolFeature = true;
            return door;
        }
    }

    let factory = new CustomizedDoorFactory();
    let door = factory.make(1,2,"red");
}

namespace Solution {
    class CustomizedDoorBuilder {
        private width: number;
        private height: number;
        private color: string;
        private durability: number;
        private coolFeature: boolean;
        
        constructor(width: number, height: number){
            this.width = width;
            this.height = height;
        }
    
        withColor(color: string): CustomizedDoorBuilder{
            this.color = color;
            return this;
        }
    
        withDurability(durability: number): CustomizedDoorBuilder {
            this.durability = durability;
            return this;
        }
    
        withCoolFeature(value: boolean): CustomizedDoorBuilder{
            this.coolFeature = value;
            return this;
        }
    
        build(): CustomizedDoor{
            let door = new CustomizedDoor(this.width, this.height);
            door.color = this.color;
            door.durability = this.durability;
            door.coolFeature = this.coolFeature;
            return door;
        }
    }

    export function run(){
        var door = new CustomizedDoorBuilder(4,5)
            .withColor("red")
            .withCoolFeature(true)
            .withDurability(10)
            .build();

        door.printDescription();
    }
}

Solution.run();

namespace AdvantageOfBuilder {
    export class ColoredDoor implements Door {
        color: string;
        
        constructor(public width: number, public height: number){}
    
        printDescription(): void {
            console.log("This is a colored door. width=%s, height=%s, color=%s", 
                this.width, this.height, this.color,)
        }
    }

    class DoorBuilder {
        private width: number;
        private height: number;
        private color: string | null;
        private durability: number | null;
        private coolFeature: boolean | null;
        
        constructor(width: number, height: number){
            this.width = width;
            this.height = height;
        }
    
        withColor(color: string): DoorBuilder{
            this.color = color;
            return this;
        }
    
        withDurability(durability: number): DoorBuilder {
            this.durability = durability;
            return this;
        }
    
        withCoolFeature(value: boolean): DoorBuilder{
            this.coolFeature = value;
            return this;
        }
    
        build(): Door {
            if(this.durability != null || this.coolFeature != null){
                let door = new CustomizedDoor(this.width, this.height);
                door.color = this.color;
                door.durability = this.durability;
                door.coolFeature = this.coolFeature;
                return door;
            } else if (this.color != null) {
                let door = new ColoredDoor(this.width, this.height);
                door.color = this.color;
                return door;
            } else{
                return  <Door>{ 
                    width: this.width,
                    height: this.height
                };
            }
        }
    }

    export function run(){
        var door = new DoorBuilder(4,5)
            .withColor("red")
            .withCoolFeature(true)
            .withDurability(10)
            .build();

        door.printDescription();
    }
}

