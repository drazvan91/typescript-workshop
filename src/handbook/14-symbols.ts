const getClassNameSymbol = Symbol();
class C {
    [getClassNameSymbol](){
       return "C";
    }
}

class MyList {
    [Symbol.iterator](){

    }

    [Symbol.match](){

    }
}

let list = new MyList();

for (const iterator of list) {
    
}
