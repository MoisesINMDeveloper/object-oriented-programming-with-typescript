console.log('Math.PI', Math.PI);
console.log('Math.max', Math.max(1, 2, 3, 4, 5, 623, 34));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}
console.log('MyMath.PI ', MyMath.PI);
console.log('MyMath.max', MyMath.max(5, 4, 7, 9, 7, 5, 799, 5, 87));
const numbers = [-5, -4, -7, -9, -7777, -5, -799, -1, -87];
console.log('MyMath.max', MyMath.max(...numbers));
