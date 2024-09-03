var age = 20

// CONDICIONALL IF ELSE
if(age >= 18){
    console.log("es mayor de edad");
}else{
    console.log("no es mayor de edad");
}

var edad = 20;

if(edad >=40){
    console.log("tienes más de 40 años");
    
}else if(edad < 40){
    console.log("Tienes menos de 40 años");
}else{
    console.log("Dato erroneo, vuelve a intentarlo");
}


// CONDICIONALES CON COMPUERTAS LÓGICAS
var boy1 = 20;
var boy2 = 18;

// COMPUERTA AND
if(boy1 && boy2 >= 18){
    console.log("Los dos niños pueden ingresar");
}

// COMPUERTA OR
var age1 = 23;
var age2 = 18;
if(age1 >= 18 || age2 >= 18){
    console.log("una de las edades es mayoría de edad");
    
}

// COMPUERTA NOT
var number = 5;
if(number != 5){
    console.log("no es el número" + number);
}else{
    console.log("es el número " + number);
}