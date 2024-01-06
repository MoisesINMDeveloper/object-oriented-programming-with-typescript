export class Animal {
  constructor(public name: string) {}
  move() {
    console.log('Moving along');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}
export class Dog extends Animal {
  constructor(public name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log('woof!');
    }
  }
}

const captain = new Dog('Captain', 'Moises');
captain.move();

console.log(captain.greeting());
captain.woof(5);

const blue = new Animal('Blue');
blue.move();
console.log(blue.greeting());

console.log(captain.owner);
