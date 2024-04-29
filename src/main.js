import { busca } from "./busca.js";
import { data } from "./data/data.js";

const inputQuery = document.getElementById('input-query');
const divQuery = document.getElementById('div-query');

inputQuery.addEventListener('input', ({ target: { value } }) => busca(value, divQuery, data));