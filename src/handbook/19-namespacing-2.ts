//// <reference path="19-namespacing-1.ts" />
namespace Validators {
    class StringValidator implements Validator<string> {
        validate(value: string): boolean {
            throw new Error("Method not implemented.");
        }

    }
}

let numberValidator1 = new Validators.NumberValidator();

// then play with modules