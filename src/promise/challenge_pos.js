import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';


function postData(urlApi, data){
    const respone = fetch(urlApi,{
        method : 'POST',  //Methoddo que puede ser GET,POST, PUT, DELETE
        moode: 'cors',
        credentias: 'same-origin',
        headers :{
            'Content-Type': 'application/json' //Se le envian los datos como tipo JSON
        },
        body: JSON.stringify(data)
    });
    return respone;
}

const data = {
    "title": "New Product SebasG9",
    "price": 10.99,
    "description": "Producto Creado por Sebastian",
    "categoryId": 1,
    "images": ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes-Benz_free_logo.svg/2048px-Mercedes-Benz_free_logo.svg.png"]
  }

  postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));