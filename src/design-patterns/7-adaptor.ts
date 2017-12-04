interface Lion {
    roar(): void;
}

class AfricanLion implements Lion {
    roar(): void {
        console.log('roar from african lion');
    }
}
class AsianLion implements Lion {
    roar(): void {
        console.log('roar from asian lion');
    }
}

class Hunter {
    hunt(lion: Lion): void{
        console.log('let me hunt!');
        lion.roar();
    }
}

// -------------

class WildDog{
    bark(): void {
        console.log('bark from wild dog');
    }
}

class WildDogToLionAdaptor implements Lion{
    constructor(private wildDog: WildDog){}
    roar(): void {
        this.wildDog.bark();
    }
}

console.log('---------------- 7 adaptor ----------------');

let hunter = new Hunter();
let lion = new AsianLion();
hunter.hunt(lion);

let dog = new WildDog();
let dogAdaptor = new WildDogToLionAdaptor(dog);
hunter.hunt(dogAdaptor);