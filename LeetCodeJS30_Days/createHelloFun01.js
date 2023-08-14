function createHelloWorld() {
  return function () {
    return "Hello World";
  };
}
const mufunc = createHelloWorld();
console.log(mufunc());
