interface Shaorma{
    getPrice(): number;
    getIngredients(): string[]
}

class SimpleShaorma implements Shaorma {
    constructor(){ }

    getPrice(): number {
        return 10;
    }

    getIngredients(): string[] {
        return ['simple shaorma'];
    }
}

class KetchupDecorator implements Shaorma {
    constructor(private shaorma: Shaorma){}

    getPrice(): number {
        return this.shaorma.getPrice() + 2;
    }

    getIngredients(): string[] {
        var ingredients = this.shaorma.getIngredients();
        ingredients.push('ketchup');
        return ingredients;
    }
}

class OrionDecorator implements Shaorma {
    constructor(private shaorma: Shaorma){}

    getPrice(): number {
        return this.shaorma.getPrice() + 3;
    }

    getIngredients(): string[] {
        var ingredients = this.shaorma.getIngredients();
        ingredients.push('Orion');
        return ingredients;
    }
}

class FriesDecorator implements Shaorma {
    constructor(private shaorma: Shaorma){}

    getPrice(): number {
        return this.shaorma.getPrice() + 4;
    }

    getIngredients(): string[] {
        var ingredients = this.shaorma.getIngredients();
        ingredients.push('fries');
        return ingredients;
    }
}

let shaorma = new SimpleShaorma();
let ketchup = new KetchupDecorator(shaorma);
let orion = new OrionDecorator(ketchup);
let fries = new FriesDecorator(orion);

console.log('shoarma price: %s', fries.getPrice());
console.log('Ingredients: %s', fries.getIngredients().join(', '));