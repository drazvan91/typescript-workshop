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

console.log('---------------- 4 builder ----------------');

var doorBuilder = new CustomizedDoorBuilder(4,5);
doorBuilder.withColor("red");
doorBuilder.withCoolFeature(true);
doorBuilder.withDurability(10);
var door = doorBuilder.build();

door.printDescription();