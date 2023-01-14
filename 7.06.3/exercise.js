let mat = 'true';
console.log(mat);
console.log(typeof(mat));

let matNumber = Number(mat);

console.log( "Casting a string into a number will result in: " + matNumber+ ", and will have a type of " + typeof(matNumber));

let matString = String(mat);

console.log("Casting a string into a string will result in: " + matString + ", and will have a type of " + typeof(matString));

let matBoolean = Boolean(mat);

console.log("Casting a string into a boolean will result in: " + matBoolean + ", and will have a type of " + typeof(matBoolean));