export class MyClass {
    name;
    constructor() {
        this.name = 'MyClass';
    }   
}

const myClass = new MyClass();


console.log(myClass.name);

function foo (bar: MyClass ) {
    return bar.name;
}