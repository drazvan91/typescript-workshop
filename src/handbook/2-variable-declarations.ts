

function javascriptVar(){
    var a = 4;
    if(a > 3){
        var b = 5;
        a=a+b;
    }

    return b;
}

console.log(javascriptVar());

function javascriptLet(){
    let a = 4;
    if(a > 3){
        let b = 5;
        a = a + b;
    }

    return b;
}

console.log(javascriptLet());

// var:
c=c+1;
var c =10;

// let
d = d + 1;
let d = 10;

// const
const e = 3;
e = 6;

const f: number;
f = 10;