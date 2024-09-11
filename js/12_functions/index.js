// FUNCIONES 

function showMessage(){
    console.log("hola");    
}

showMessage();

// PARAMETROS
var multi = 5
function multiplyNumber(a){
    var s = 4
    return a*multi
}
console.log(multiplyNumber(4));


// VALORES PREDETERMINADOS
// PUEDE DECLARARSE FUNCIONES TAMBIEN
function errMsg(){
    console.log("error en el mensaje");
    
}
function message(msg = errMsg()){
    console.log(msg);
}
message()

// CALLBACKS
function sum(a, b){
    console.log(a,b);
    var m = function resta(b, c){
        //más código
        return "mensaje"
    }
    return m + m
}