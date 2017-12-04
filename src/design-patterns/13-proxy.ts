interface Door {
    open(): void;
    close(): void;
}

class SimpleDoor implements Door{
    open(): void {
        console.log('opening simple door');
    }
    close(): void {
        console.log('closing simple door');
    }
}

class DoorSecurityProxy {
    constructor(private door: Door){}
    open(password: string){
        if(password == 'password'){
            this.door.open();
        } else{
            console.log("Access denied!");
        }
    }

    close(){
        this.door.close();
    }
}

let door = new SimpleDoor();
let proxy = new DoorSecurityProxy(door);

proxy.open("bad password");
proxy.open("password");
proxy.close();