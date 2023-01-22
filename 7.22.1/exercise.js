let user = {
  name: "Cosimo",
  age: 30,
};

let newUser = Object.assign({}, user);

newUser.name = "Paolo";
newUser.age = 23;

console.log(newUser);
console.log(user);
