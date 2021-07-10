class Animal {
  constructor(name) {
    this.name = name;
  }
  sayMyName() {
    console.log(`i is ${this.name}`);
  }
}
const cat = new Animal('kit');
const mouse = new Animal('jerry');

cat.sayMyName();

//referring to the method of the class
// const sayMouseName = mouse.sayMyname;

//
