import { Dog } from './09-protected';
// function getValue(value: unknown) {
//   return value;
// }
// function getValue(value: number | string) {
//   return value;
// }

function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([11, 4, 523, 634, 23, 2]).forEach;
const Aleman = new Dog('Aleman', 'Moises');
getValue<Dog>(Aleman).greeting;
