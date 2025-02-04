const obj = {
    name: 'Arthur',
    age: 25,
    isTrueKingOfBritain: true
}

//typeof allows us to take a variable and extract its inferred type
type Person = typeof obj;

const anotherObj: Person = {
    name: 'Merlin',
    age: 1000,
    isTrueKingOfBritain: false,
    anotherProp: 'test' //not allowed
}
