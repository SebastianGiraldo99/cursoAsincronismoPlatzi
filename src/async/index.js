const fnAsync = () => {
    return new Promise((resolve, reject) =>{
        (true) 
        ? setTimeout(()=> resolve('Async!!'), 2000)
        : reject(new Error('Error!'));
    });
} 

const AnotherFn = async() => { //Cuerpo de la funcion 
    const something = await fnAsync();  //Logica a implmentar
    console.log(something);
    console.log('Hello');
}

console.log('Before');
AnotherFn();
console.log('After');

