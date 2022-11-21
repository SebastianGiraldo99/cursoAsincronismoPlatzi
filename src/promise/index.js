//Promesa: Como su nombre lo indica es una peticion que se le 
// hace a una API y se espera un retorno o respuesta 
// Tiene 3 estados: ~Pendiente 
//                  ~Cumplido
//                  ~Rechazada

const promise = new Promise(function (resolve, reject){
    resolve('Hey!')
});

const cows =  9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`Whe have ${cows} cows on the farm`)
    }
    else{
        reject("There is not cows on the farm")
    }
});
countCows.then((result) =>{
    console.log(result); //Muestra el Resolve
}).catch((error) =>{
    console.log(error); // Muestra el Reject
}).finally(() => console.log('Finally'));