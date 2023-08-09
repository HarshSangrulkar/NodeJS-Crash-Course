console.log(__filename, __dirname);

class person2 {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
}

module.exports = person2;