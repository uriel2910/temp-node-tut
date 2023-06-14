//MODULES
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
const { singlePerson } = require("./6-alternative-flavor");
require("./7-mind-granade");

sayHi("Susan");
sayHi(john);
sayHi(peter);
console.log("singlePerson", singlePerson.name);
