namespace Problem{
    interface Shape {
        draw(): string;
    }

    abstract class Square implements Shape {
        constructor(public width: number){}

        abstract draw(): string 
    }

    class BlueSquare extends Square {
        constructor(public width: number){
            super(width);
        }

        draw(): string{
            return `Drawing a ${this.width} square with blue color`;
        }
    }

    class RedSquare extends Square {
        constructor(public width: number){
            super(width);
        }

        draw(): string{
            return `Drawing a ${this.width} square with red color`;
        }
    }

    abstract class Circle implements Shape {
        constructor(public radius: number){}

        abstract draw(): string 
    }

    class BlueCircle extends Circle {
        constructor(radius: number) {
            super(radius);
        }

        draw(): string {
            return `Drawing a ${this.radius} circle with blue color`;
        }
    }

    class RedCircle extends Circle {
        constructor(radius: number) {
            super(radius);
        }

        draw(): string {
            return `Drawing a ${this.radius} circle with red color`;
        }
    }

    let redCircle = new RedCircle(4);
    console.log(redCircle.draw());
}

namespace BridgeTheProblem {
    abstract class Shape {
        constructor(protected drawingApi: DrawingApi){}
        abstract draw(): string;
    }

    class Square extends Shape {
        constructor(public width: number, drawingApi: DrawingApi){
            super(drawingApi);
        }

        draw(): string {
            return this.drawingApi.drawSquare(this.width);        
        }
    }
    
    interface DrawingApi {
        drawCircle(radius: number): string;
        drawSquare(width: number): string;
    }

    class BlueDrawingApi implements DrawingApi {
        drawCircle(radius: number): string {
            return `Drawing a ${radius} circle with blue color`;
        }
        drawSquare(width: number): string {
            return `Drawing a ${width} square with blue color`;
        }
    }

    let blueSquare = new Square(6, new BlueDrawingApi());
    console.log(blueSquare.draw());
}