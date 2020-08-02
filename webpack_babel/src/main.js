// proposal-optional-chaining stg4
// proposal-nullish-coalescing stg4
const a = { b: 1 };
const b = a?.b?.c ?? a?.b;
console.log(b);


// ie 10不支持属性继承
class Animal {
  type = 'animal';
  say() {
    console.log(`i am ${this.type}`);
  }
}

// proposal-private-fields-in-in stg2
// 需要手动集成 @babel/plugin-proposal-private-property-in-object @babel/plugin-proposal-class-properties
class Dog extends Animal {
  #animal = 'dog';
  walk() {
    console.log(`${this.#animal} walk`);
  }
}

const dog = new Dog();
dog.say();
dog.walk();

// proposal-dynamic-import stage-4
import('./file4import');

// 箭头函数，匹配ie10 兼容 
const fn = () => console.log('fn');