const p = require('./person1');
console.log(p);
console.log(p.name);

const p2 = require('./person2');
const person2 = new p2('Hrash' , 20);
console.log(person2);
person2.display();