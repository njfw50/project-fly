import { data } from "./data/data.js";


// ESTRUTURAS DE REPETIÇÕES

// Arrays se acessam por POSIÇÃO
// nome do array e sua posição
// array[0], array[1]...

for (let index = 0; index < data.length; index++) {
    // TIPO DE DADO DENTRO DO DATA
    const element = data[index]; // o Objeto dentro do DATA

    // console.log(element); 
}

// ESTRUTURA DE REPETIÇÃO MAP
// ELE RETORNA UM NOVO ARRAY

const iatas = data.map((element, index) => element.iata);

// FIND que procura por um elemento dentro do ARRAY
const findCity = data.find((el, i) => el.city === 'Curitiba');
