const user = {
  name: 'Andrey',
  getName() {
    return this.name;
  },
};

// const fn = user.getName;
// fn();

const bound = user.getName.bind(user);
console.log(bound()); // Andrey

function greet() {
  return this.name;
}

console.log(greet.call({ name: 'QA' })); // QA

const obj = {
  name: 'Test',
  arrow: () => this.name,
};

console.log(obj.arrow.bind(obj)); // Test
