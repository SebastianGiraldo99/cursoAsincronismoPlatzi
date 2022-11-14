/**
 * Callback es una funcion que pasa como argumento
 * otra funcion y sera usada dentro segun sea el caso.
 */

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2); //Se puede llamar de cualquier manera.
}
setTimeout(calc,2000, 2,2,sum);

console.log(calc(2,2,sum));

setTimeout(function(){
    console.log('Hola Javascript');
}, 2000)

function gretting(name){
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Sebastian');


