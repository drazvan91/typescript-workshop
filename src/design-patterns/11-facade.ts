class Computer {
    showShuttingDownScreen(): void {
        console.log("shutting down");
    }
    showLoadingScreen(): void {
        console.log("loading ...");
    }
    setDisplayMonitor(value: boolean): void {
        console.log(`set display monitor: ${value}`);
    }
    setVentilation(value: boolean): void {
        console.log(`set ventilation: ${value}`);
    }
    makeBeepSound(): any {
        console.log('beep');
    }


}

class ComputerFacade {
    constructor(private computer: Computer){}

    turnOn(): void{
        this.computer.makeBeepSound();
        this.computer.setVentilation(true);
        this.computer.setDisplayMonitor(true);
        this.computer.showLoadingScreen();
    }

    turnOff(): void {
        this.computer.showShuttingDownScreen();
        this.computer.setDisplayMonitor(false);
        this.computer.setVentilation(false);
        this.computer.makeBeepSound();
    }
}

let computer = new Computer();
let computerFacade = new ComputerFacade(computer);

computerFacade.turnOn();
computerFacade.turnOff();