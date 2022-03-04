const testUno = document.querySelector('h1');

let actual = document.getElementById('test');
//Obtiene contenido de etiquetas html
let contActual = actual.innerHTML;
console.log('Esta es una prueba '+contActual);


testUno.textContent = '!Hola mundo';