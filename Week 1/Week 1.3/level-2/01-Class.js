
class Animal {
    constructor(name, legCount,speak) {
      this.name = name
      this.legCount = legCount
      this.speak = speak
    }

    describe() {
      return `${this.name} has ${this.legCount} legs and speaks ${this.speak}`
    }
    static staticfun(){
        console.log("this is a static method");
    }
  }
  

const dog = new Animal("dog",4,"bhaw bhaw"); //create objects
const val = dog.describe()
console.log(val)
Animal.staticfun()
  
  