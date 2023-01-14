


//let feesType = "BB";
//let feesType = "HB";
//let feesType = "FB";
let feesType = 23;



switch (feesType) {
    case "BB":
        console.log("Pay: 50$");
        break;
    case "HB":
        console.log("Pay: 80$");
        break;
    case "FB":
        console.log("Pay: 100$");
        break;
    default:
        console.log("error: We only offer BB, HB or FB fees.")
        break;
}