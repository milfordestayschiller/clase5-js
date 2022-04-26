// Con funciones y loop

function sumArray(suma1,suma2) {
    var iteracion = 0;
    while (suma1+suma2>iteracion) {
      iteracion +=suma1+suma2;
      console.log(iteracion)
    }
   
}
sumArray(-5,100)


sumArray([1,2,3]) // 6

// Con forEach
var sumanumeros = [2,3,6]
suma = 0;
sumanumeros.forEach (function(numeros){
    suma += numeros;
});
console.log(suma);



