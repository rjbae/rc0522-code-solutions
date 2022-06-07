function ExampleConstructor() {

}

console.log('value of prototype:', ExampleConstructor);
console.log('typeof prototype:', typeof ExampleConstructor);

var constructor = new ExampleConstructor();
console.log(constructor);

var instance = constructor instanceof ExampleConstructor;
console.log('constructor instanceof ExampleConstructor:', instance);
