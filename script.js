// Con funciones

function sumArray([num1,num2,num3]) {
      num1; num2; num3;
    let sumar = [num1, num2, num3];
     console.log(sumar[0]+sumar[1]+sumar[2])
   
    return sumar;
}

sumArray([1,2,3]) // 6

// Con forEach
var sumanumeros = [2,3,6]
suma = 0;
sumanumeros.forEach (function(numeros){
    suma += numeros;
});
console.log(suma);



