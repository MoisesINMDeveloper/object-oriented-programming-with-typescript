export class Animal {
  constructor(protected name: string) {}
  move() {
    console.log('Moving along');
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('dooo');
  }
}
export class Dog extends Animal {
  constructor(public name: string, public owner: string) {
    super(name);
  }
  woof(times: number): void {
    for (let index = 0; index < times; index++) {
      console.log(`Woof!! ${this.name}`);
    }
    this.doSomething();
  }
  move() {
    console.log('Moving as a dog');
    super.move();
  }
}

const captain = new Dog('Captain', 'Moises');
captain.name = 'Blue';
captain.move();
captain.woof(1);
console.log(captain.owner);
