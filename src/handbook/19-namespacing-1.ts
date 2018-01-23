namespace Validators {
    export interface Validator<T> {
        validate(value:T): boolean;
    }

    export class NumberValidator  implements Validator<number>{
        validate(value: number){
            return true;
        }
    }
}


let numberValidator = new Validators.NumberValidator();

