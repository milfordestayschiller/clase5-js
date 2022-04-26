// Con funciones y loop

var sumar = 0 
function sumArray(valores){
    for (i = 0;  valores.length >i ; i++) {
    sumar += valores[i]
     }
   console.log(sumar) 
   return sumar
  }
  sumArray([7,6]); 



sumArray([1,2,3]) // 6

// Con forEach
var sumanumeros = [2,3,6]
suma = 0;
sumanumeros.forEach (function(numeros){
    suma += numeros;
});
console.log(suma);



