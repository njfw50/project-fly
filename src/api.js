export async function fetchApi() {
 const req = await fetch('https://api.privateimoveis.com/api/v3/imovel');
 const res = await req.json();

 console.log(res.lista[0].caracteristicas.map(e => e.nome));
};
