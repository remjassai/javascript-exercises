



//const primitive = true;
//const primitive = 'string';
const primitive = 23;



let primType = typeof primitive;

if(primType === "boolean") {
    console.log(`Your variable's type is ${primType}.`);
} else if(primType === "string") {
    console.log(`Your variable is a ${primType}.`);
}else{
    console.log(`Your variable is a special ${primType}.`);
}

