import { busca } from "./busca.js";
import { data } from "./data/data.js";

const inputOutbound = document.getElementById('input-outbound');
const inputInbound = document.getElementById('input-inbound');
const divOutbound = document.getElementById('div-outbound');
const divInbound = document.getElementById('div-inbound');

inputOutbound.addEventListener('input', ({ target: { value } }) => busca(value, divOutbound, data));
inputInbound.addEventListener('input', ({ target: { value } }) => busca(value, divInbound, data));