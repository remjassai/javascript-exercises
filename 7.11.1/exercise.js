


//let primitive = true;
//let primitive = 'jassai';
let primitive = 23;

let primType = typeof primitive;

switch (primType) {
    case "boolean":
        console.log(`Your variable's type is ${primType}.`);
        break;
    case "string":
        console.log(`Your variable is a ${primType}.`);
        break;
    default:
        console.log(`Your variable is a special ${primType}.`);
        break;
}