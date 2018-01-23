// optional params
function doSomething(a: number, b?: number): void{
}

doSomething(1);
doSomething(1,2);


// default params
function doSomethingElse(a: number, b: number = 3){

}

doSomethingElse(1);
doSomethingElse(1,2);

// rest of the params
function doAgainSomethingElse(a: number, ...theRest: string[]){

}

doAgainSomethingElse(1);
doAgainSomethingElse(1, 'hey');
doAgainSomethingElse(1,'hey', 'how', 'are', 'you');


// arraw functions

interface SomeInterface {
    do(a: number, b: string): number;
}

let someObj = <SomeInterface>{
    do:(a,b)=>3
}

// this - damn this!


let thisObject = {
    message: 'test',
    getFactory: function(){
        //return function(value: string){
        return (value: string) => {
            this.message = value;
            console.log(this);
            return '3';
        }
    }
}

let factory = thisObject.getFactory();
let value = factory('hey');

console.log(thisObject.message);
console.log('----------------------');
// this on callback functions
class Button {
    private _onClick: (newText: string) => void;
    
    setOnClick(onClick: (this: void, newText: string) => void){
        this._onClick = onClick;
    }

    click(newText: string){
        this._onClick(newText);
    }
}



class ButtonHandler {
    message: string = "default button handler message";

    handle(this: void, text: string){ // step 2: use arrow func
        //this.message = text;
        console.log(this);
    }
}

let button = new Button();
let buttonHandler = new ButtonHandler();
button.setOnClick(buttonHandler.handle);

button.click('hello, I just clicked you');

console.log(buttonHandler.message);



