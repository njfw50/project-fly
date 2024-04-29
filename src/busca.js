export function busca(value, divQuery, data) {
    const query = value.toUpperCase();

    const dataQuery = [];

    for (let index = 0; index < data.length; index++) {
        const e = data[index];

        if (e.city.toLocaleUpperCase().includes(query) || e.iata.includes(query) ||
            e.contry.toLocaleUpperCase().includes(query) || e.state.toLocaleUpperCase().includes(query)) {
            dataQuery.push(e);
        };
    }

    divQuery.innerHTML = "";

    dataQuery.map(e => divQuery.innerHTML += `
    <h3>${e.city}</h3>
    <p>${e.contry} ${e.state}</p>
    <p>Code iata airport ${e.iata.join(" ")}</p>
`)
};