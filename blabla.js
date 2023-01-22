// console.log(typeof(2));

// let num = 2;
 
// function change(){
//     console.log(num);
// }
//  change();

// const numChange=() => {
//     let num = 3;
//     console.log(num);
// }

// numChange();

// console.log(num);


// function printPairNum(arg1, checkIfPair){
//     if(checkIfPair(arg1) == true ){
//         return arg1;
//     }else{
//         console.log("Your imput is not a pair number");
//     }
// }

// function checkIfPair(arg) {
//    if (arg%2===0) {
//     return arg;
//    }
// } 

// let number = 5;

// const obj = {
//     color:"green",
//     v:5,
// }

// number += 5;

// console.log(number);

// for(const i in obj){
// console.log(obj[i] + 5 );
// }


let obj = {
    "key": "value",
    "number": 10,
    "obj": {
        "key": 2,
    }
}

function changeValue(obj, key, val) {
    let copy = obj;
    copy[key]= val;
}

console.log(obj.number);

changeValue(obj, "number", 15);

function changeNumber(num){
    num = num + 5;
}

let num = 10;
//console.log(num);

changeNumber(num);

//console.log(num);


console.log(obj.number);
