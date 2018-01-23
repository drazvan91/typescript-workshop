import {b} from './16-module-b';
import {C as Good} from './16-module-c';

import * as ModuleC from './16-module-c';

export let a: number = 3;

export class Person {
    name: string = "hey";
    age: number;

    constructor(){
        this.name = b;
        this.age = Good;
        this.age = ModuleC.C;
    }
}
// 17- module defualt

import $ from './17-module-default';

$.coolName = "hey";

// 18- module reexport
import {someValue } from './17-module-default';

import { Laptop } from './18-module-reexport';

class MyExtendedLaptop extends Laptop {
    shutDown(){
        console.log("shutDown");
    }
}

export { MyExtendedLaptop as Laptop };

