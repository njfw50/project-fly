const dispesas = {
    saldo: 0,
    dispesa: [],
    entrada: []
};

function somarDispesa(nome, valor) {
    dispesas.dispesa.push(
        { nome, valor }
    );
    dispesas.saldo += valor;
};

function pagamento(nome, valor) {
    dispesas.entrada.push(
        { nome, valor }
    );

    dispesas.saldo -= valor;
};

somarDispesa('bone', 25);
somarDispesa('lanche', 15);
somarDispesa('moletom', 155);
somarDispesa('carro', 250);

pagamento('bone', 25);
pagamento('lanche', 15);

console.log(dispesas)