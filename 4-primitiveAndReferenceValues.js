// let nome1="daniela";
// let nome2=nome1;

// console.log(nome1);
// console.log(nome2);

// nome1="flavia";
// console.log(nome1);
// console.log(nome2);

// Criei um objeto na memória cujo address é AA11 e cujo valor de referência é A1A2 e eu criei também um objeto no heap cujo address é A1A2 e o valor é o objeto abaixo.
let obj1={
    nome:"obj1",
    valor:5
}

console.log(obj1);

// Quando eu faço isso, eu estou dizendo que o meu obj2 vai apontar para o mesmo address do stack, que é AA11, sendo que esse valor está relacionado ao A1A2. Então se eu pego e escrevo que obj2.nome agora é Daniela, o valor do nome do objeto1 também vai ser Daniela.

let obj2=obj1;
obj2.nome="Daniela";

console.log(obj1);
console.log(obj2);
