let user = {
  "name":"Cosimo",
  age: 30,
};



let newUser = {};

for(let key in user){
  newUser[key] = user[key];
}

newUser.name = "Paolo";
newUser.age = "23";


console.log(newUser);
console.log(user);





// function changeValue(user, key, val){
//   newUser = user;
//   newUser[key] = val;
// }

// changeValue(newUser, "name", "Rem");
// changeValue(newUser, "age", 23);

// console.log(newUser);
// console.log(user);

// console.log(changeUser(newUser, name, "Rem"));
// console.log(newUser[name]);