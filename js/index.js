var miVariable = 24;
//console.log("mi edad es "+ miVariable);

miVariable = 12;
//console.log("mi edad es "+ miVariable);

const miConstante = 3;
//console.log("el valor de mi constante es: " + miConstante);

var op1 = 2
var op2 = 3
var resultado = op1 + op2;
// console.log("resultado vale: " + resultado);


//condiciones

let miNumero = 6
let nombre = "ariel";
// let resultadoSuma = miNumero == 7;
// console.log(resultadoSuma);

// if (miNumero < 2 || nombre == "raul") {
//     console.log('SI.');
// } else {
//     console.log('NO.');
// }

// let miNumero2 = -2;

// if (miNumero2 > 0) {
//     console.log('mi numero es postivo');
// } else if (miNumero2 === 0) {
//     console.log("mi numero es zero");
// } else {
//     console.log('mi numeo es negativo');
// }

// let contador = 0;
// while(contador < 10){
//     console.log(contador);
//     contador = contador + 1
// }

// for(let i = 0; i <10 ; i++){
//     console.log(i);
// }

function saludar(nombre, edad) {
    console.log('Hola mi nombre es: ' + nombre);
    console.log('Hola mi edad es: ' + edad);
}

function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
// console.log( multiplicar(2,5))


//arreglos o arrays
let miArreglo = ["Ariel", "Bustos", "Suazo", "Omar"]

// for (let i = 0; i < 4; i++){
//     console.log("accediendo a indices "+ i)
// let mostrar = miArreglo[i]
// console.log(mostrar)
// }

//objetos


let persona = {
    nombre: "Ariel",
    apellido: "Bustos",
    edad: 20,
    masculino: true
};

console.log(persona)

persona.edad = 19;
console.log(persona)
// let persona2 = {
//     nombre: "omar",
//     edad: 20,
//     masculino: false
// };

// console.log(persona)
// console.log(persona2)

// let arregloDeObjetos = [persona, persona2]