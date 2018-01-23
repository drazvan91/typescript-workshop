


var proto1 = {};
var proto2 = Object.create(proto1);
var proto3 = Object.create(proto2);

var proto4 = {};
Object.setPrototypeOf(proto4, { go : function(){console.log("oisdifsdf");}});
proto4["__proto__"] = { go : function(){console.log("2oisdifsdf");}};

proto4.go();

function Blue(){
    this.name = "ok";
    console.log("Blue constructor called");
}

Blue.prototype.go = function(){
    console.log("baaai");
}

var b1 = new Blue();
//or
var b2 = Object.create(Blue.prototype);
Blue.call(b2);

b1.go();
b2.go();


// let's summarize
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.sleep = function(){
}

function Student(name, age, studentId){
    Person.call(this, name, age);
    this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Person;
