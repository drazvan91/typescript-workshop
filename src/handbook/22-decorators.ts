function callingLogger(){
    console.log('logger factory');
    return function(target:any){
    console.log('logger called');
        
    }
}

class Person {
    @callingLogger()
    go(): void{
        console.log('gooo');
    }
}

let p = new Person();
p.go();
p.go();

console.log('hey');
