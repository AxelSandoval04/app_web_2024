// Comentario de una línea

/* 
Comentario
de varias líneas
*/

// Mostrar una alerta
alert("Soy una ventana de alerta");

// Variables
let nombre = "Axel";
let nombre2 = "Javier";
let edad = 20;
let logica = true;
let estatura = 1.77;

// Mostrar en pantalla con getElementById
let datos = document.getElementById("informacion");
datos.innerHTML = `
    <br>
    <h1>La persona: ${nombre}, tiene una altura de ${estatura}</h1>
`;

datos.innerHTML += "<h2>La edad es: " + edad + "</h2>";

// Condicionales if
if (estatura >= 1.90) {
    datos.innerHTML += `
        <hr>
        <h3>Eres una persona alta</h3>
    `;
} else {
    datos.innerHTML += `
        <hr>
        <h3>Tienes estatura promedio</h3>
    `;
}

// Ciclo for
for (let i = 1; i <= 5; i++) {
    datos.innerHTML += `<hr><h3>For: el número es: ${i}</h3>`;
}

// Ciclo while
let j = 1;
while (j <= 5) {
    datos.innerHTML += `<hr><h3>While: el número es ${j}</h3>`;
    j++;
}

// Ciclo do-while
let k = 1;
do {
    datos.innerHTML += `<hr><h3>Do-While: el número es ${k}</h3>`;
    k++;
} while (k <= 5);

// Función que no recibe parámetros y no devuelve valor
function suma() {
    let n1 = 2;
    let n2 = 2;
    let suma = n1 + n2;
    console.log("La suma es " + suma);
    datos.innerHTML += `<hr><h3> La suma es: ${suma}</h3>`;
}

// Función que no recibe parámetros pero devuelve un valor
function suma2() {
    let n1 = 5;
    let n2 = 3;
    return n1 + n2;
}

// Llamada a la función suma2
let sum = suma2();
datos.innerHTML += `<hr><h3> La suma2 es: ${sum} </h3>`;

// Función que recibe parámetros y no devuelve valor
function suma3(numero1, numero2) {
    let suma = numero1 + numero2;
    datos.innerHTML += `<hr><h3> La suma3 es: ${suma}</h3>`;
}

// Llamada a la función suma3
suma3(4, 6);

// Función que recibe parámetros y devuelve un valor
function suma4(numero1, numero2) {
    let suma = numero1 + numero2;
    return suma;
}

// Llamada a la función suma4
let sum4 = suma4(8, 5);
datos.innerHTML += `<hr><h3> La suma4 es: ${sum4}</h3>`;

//ARREGLO
let animales = [];
animales[0] = "Cuervo";
animales[1] = "Serpiente";
animales[2] = "Gato";

datos.innerHTML += `<hr><h3>El pájaro más negro es el ${animales[0]}</h3>`;

for (let i = 0; i < animales.length; i++) {
    datos.innerHTML += `<hr><h3>El animal es: ${animales[i]}</h3>`;
}

animales.forEach(element => {
    datos.innerHTML += `<hr><h3>El animal es: ${element}</h3>`;
});
// Function Normal
function sumaR(a,b){
    result=a+b
}
datos.innerHTML+=`<hr> <h3> la suma es: ${sumaR(4,3)}</h3>`
const sumaflecha=(a,b)=>a+b;

datos.innerHTML+=`<hr><h3>La sumaFlecah es ${sumaflecha(3,6)} </h3>`;

