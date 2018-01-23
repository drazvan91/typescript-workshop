namespace Guards {

    // typeof
    function goGetIt(value: number | string){
        if(typeof value == "number"){
            
        }
        else if(typeof value == "string"){

        }
    }

    // instanceof

    class Dog  {
        bark(){}
    }

    class Fish {
        swim(){}
    }

    function go(animal: Dog | Fish){
        if(animal instanceof Dog){
            animal.bark();
        }
        else {
            animal.swim();
        }
    }

    // user defined type guards

    let animal = <any>{};
        // wrong
    if(animal.bark){
        let dog = <Dog>animal;
        dog.bark();
    } else {
        let fish = <Fish>animal;
        fish.swim();
    }

    function isDog(animal: any): animal is Dog {
        return animal.bark;
    }

    if(isDog(animal)){
        animal.bark();
    }

}