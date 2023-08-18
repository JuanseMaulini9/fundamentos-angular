const username: string = 'juanse';
const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, 2);

class Person {
  constructor(public age: number, public lastName: string) {}
}

const juanse = new Person(21, 'Maulini');

juanse.age;
