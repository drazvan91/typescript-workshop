class TV {  // the receiver
    isTurnedOn: boolean;

    turnOn(): void{
        this.isTurnedOn = true;
        console.log("Turning the TV on");
    }

    turnOff(): void {
        this.isTurnedOn = false;
        console.log("Turning the TV off");
    }
}

interface TvCommand {  // the command
    execute(tv: TV): void;
}

class TurnTvOnCommand implements TvCommand {
    execute(tv: TV): void {
        tv.turnOn();
    }
}

class TurnTvOffCommand implements TvCommand {
    execute(tv: TV): void {
        tv.turnOff();
    }
}

class RemoteControl {  // the invoker
    constructor(private tv: TV){ }

    executeCommand(command: TvCommand): void{
        command.execute(this.tv);
    }
}

let tv = new TV();  // the receiver
let remoteControl = new RemoteControl(tv);   // the invoker

remoteControl.executeCommand(new TurnTvOnCommand()); // the command
remoteControl.executeCommand(new TurnTvOffCommand());