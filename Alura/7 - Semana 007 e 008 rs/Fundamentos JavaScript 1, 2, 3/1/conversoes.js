// tipo de dado 
// booleanos 

// conversão implícita
const numero = 456;
const numeroString = "456";

// //false
// console.log(numero === numeroString);
// //true
// console.log(numero == numeroString);
//456456
// console.log(numero + numeroString);

// conversão explícita

//Number()
//String()
// também funcionaria: const numeroString = Number("456");
console.log(numero + Number(numeroString));

// console.warn(new Error('oi'))

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100