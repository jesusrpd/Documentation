// BUCLE WHILE
console.log('------WHILE---------');
var i = 0;
while(i < 3){
    console.log(i);
    i++;
}

// BUCLE DO WHILE
console.log('-----DO WHILE---------');
var l = 0;
do{
    console.log(l);
    l++;
} while(l < 3);

// BUCLE FOR
console.log('--------FOR--------');

for(var f = 0; f < 3; f++){
    console.log(f);
}

// CONTINUE AND BREAK
console.log('--------CONTINUE AND BREAK--------');
for (let index = 0; index < 10; index++) {
    if(index == 5){
        break;
        // continue;
    }
    console.log(index);
    
}