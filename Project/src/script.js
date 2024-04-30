import { data } from "./data/data.js";

function getByQuery(query) {
   for (let index = 0; index < data.length; index++) {
    const element = data[index]; // Obtém o elemento atual do array

    // Verifica se a cidade do elemento atual corresponde à cidade procurada
    if (element.city === query) {
        // Se corresponder, exibe o elemento no console
        console.log(element)
    } else {
        console.log('Não foi encontrado!')
    }

    // Verifica se alguma iata tem incluso o valor da query recebida
    if (element.iata.includes(query)) {
        // Se tiver incluso, exibe o elemento no console
     console.log(element)   
    }

    if (element.state === query || element.contry === query) {
        console.log(element)
    }

   }
}


getByQuery('BRA')