let schedule = {};

function isEmpty(obj){
    for(let key in obj){
    return false;
    }
    return true;
    
}

let test = isEmpty(schedule); 

console.log(test);

schedule["07:10"] = "Jassai!";

test = isEmpty(schedule);

console.log(test);