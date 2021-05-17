// Call

var obj ={num:2};

var addToThis= function (a){

    return this.num + a;

}

console.log(addToThis.call(obj,3));



//Apply

var obj ={num:2};

var addToThis= function (a,b,c){

    return this.num + a+b+c;

}

var arr= [2,3,4];

console.log(addToThis.apply(obj,arr));



//bind

var obj ={num:2};

var addToThis= function (a,b,c){

    return this.num + a+b+c;

}

var arr= [1,2,3];

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));



//WAP to print student age

var Student ={age:20};

var addToThis= function (){

    return this.age;

}

console.log(addToThis.call(Student));

// CURRYING BY BIND
let multiply = function(x, y){
    console.log(x * y);
}

let multipyByTwo = multiply.bind(this, 2);
multipyByTwo(5);

let multipyByThree = multiply.bind(this, 3);
multipyByThree(5);

// CURRYING BY CLOSURES
let multiply = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multipyByTwo = multiply(2) ;
multipyByTwo(5);

let multipyByThree = multiply(3) ;
multipyByThree(5);
