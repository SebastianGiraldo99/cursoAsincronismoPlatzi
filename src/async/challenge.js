import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json()
    return data;    
}

const anotherFn = async (urlApi) =>{
    try{
        const products = await fetchData(`${urlApi}/products`); //Llamado a todos los productos
        const product = await fetchData(`${urlApi}/products/${products[0].id}`) //Llamado al primer elemento
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        console.log(product);
        console.log(product.title);
        console.log(category.name);
    } catch (error){
        console.log(error);
    }
}

anotherFn(API);