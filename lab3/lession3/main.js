const Entity = ((entityName, greetingDelay) => {
  this.entityName = entityName;
  this.greetingDelay = greetingDelay;
});

Entity.prototype.greet = () => {
  setTimeout(() => {
    console.log(`Hello, I'm ${this.entityName}`);
  }, this.greetingDelay);
};

let java = new Entity('java', 5000);

java.greet();
