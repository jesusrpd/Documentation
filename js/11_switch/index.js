// SENTENCIAS switch

// var day = "Martes";

// switch(day){
//     case "Lunes":
//         console.log("es lunes");
//     break
//     case day <= 20:
//         console.log("es menor o igual que 20");
//     break
//     default: 
//     console.log("ese día no existe");
// }


// agrupamiento de case
// case 4:
// case 5:
var day = "Miercoles";

switch(day){
    case "Miercoles":
    case "Lunes":
        console.log("es lunes o miercoles");
    break
    case day <= 20:
        console.log("es menor o igual que 20");
    break
    default: 
    console.log("ese día no existe");
}