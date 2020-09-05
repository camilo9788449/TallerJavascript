//  Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
alert("Hello World");

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.write("Hello World");
document.write('<br>');
//  Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3+5);
document.write('<br>');
//  Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
nombre = prompt("Nombre por favor?");
document.write("Hola "+nombre);
document.write('<br>');
// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
var num1 = parseInt(prompt("Numero 1"));
var num2 = parseInt(prompt("Numero 2"));
var result = (num1+num2);
document.write("El resultado es:"+result);
document.write('<br>');

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

var num1 = parseInt(prompt("Numero 1"));
var num2 = parseInt(prompt("Numero 2"));
if(num1>num2){
    document.write("El numero "+num1+" es mayor a "+num2);
}else{
    document.write("El numero "+num2+" es mayor a "+num1);
}
document.write('<br>');
// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres

var num1 = parseInt(prompt("Numero 1"));
var num2 = parseInt(prompt("Numero 2"));
var num3 = parseInt(prompt("Numero 3"));

if(num1>num2&&num3){
    document.write("El numero "+num1+" es mayor a "+num2+" y "+num3);
}else if(num2>num3){
    document.write("El numero "+num2+" es mayor a "+num1+" y "+num3);
}else{
    document.write("El numero "+num3+" es mayor a "+num1+" y "+num2);
}
document.write('<br>');
//  Escribe un programa que pida un número y diga si es divisible por 2

var num1 = parseInt(prompt("Numero 1"));
if (num1 % 2 == 0) {
    document.write("El numero "+num1+" es divisible por 2");
} else {
    document.write("El numero "+num1+" no es divisible por 2");
}
document.write('<br>');
//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

var palabra = prompt("Escriba una palabra");
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "a" || palabra.substr(i,1)== "A") {
        document.write(palabra.substr(i,1));
    }
}
document.write('<br>');
//Escribe un programa que pida una frase y escriba las vocales que aparecen

var palabra = prompt("Escriba una palabra");
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "a" || palabra.substr(i,1)== "e" || palabra.substr(i,1)== "o" || palabra.substr(i,1)== "i" || palabra.substr(i,1)== "u") {
        document.write(palabra.substr(i,1));
    }
}
document.write('<br>');
// Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

var palabra = prompt("Escriba una palabra");
var resultado = 0;
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "a" || palabra.substr(i,1)== "e" || palabra.substr(i,1)== "o" || palabra.substr(i,1)== "i" || palabra.substr(i,1)== "u") {
        resultado += 1;
        document.write(palabra.substr(i,1));
    }
}
document.write('<br>');
document.write("Las vocales aparecieron "+resultado+" veces");
document.write('<br>');
//Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

var palabra = prompt("Escriba una palabra");
var resulta = 0;
var resulte = 0;
var resulti = 0;
var resulto = 0;
var resultu = 0;
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "a" ) {
        resulta += 1;
    }
}
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "e" ) {
        resulte += 1;
    }
}
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "i" ) {
        resulti += 1;
    }
}
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "o" ) {
        resulto += 1;
    }
}
for (var i = 0; i < palabra.length; i++) {
    if (palabra.substr(i,1) == "u" ) {
        resultu += 1;
    }
}
document.write("La vocal a aparecio "+resulta+" veces");
document.write('<br>');
document.write("La vocal e aparecio "+resulte+" veces");
document.write('<br>');
document.write("La vocal i aparecio "+resulti+" veces");
document.write('<br>');
document.write("La vocal o aparecio "+resulto+" veces");
document.write('<br>');
document.write("La vocal u aparecio "+resultu+" veces");
document.write('<br>');
//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

var num1 = parseInt(prompt("Numero 1"));
if (num1 % 2 == 0 || num1 % 3 == 0 || num1 % 5 == 0 || num1 % 7 == 0) {
document.write("Es divisible por 2, 3, 5 o 7");
} else {
document.write("No es divisible por 2,3,5,7");
}
document.write('<br>');
//Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

var num1 = parseInt(prompt("Numero 1"));
if (num1 % 2 == 0 || num1 % 3 == 0 || num1 % 5 == 0 || num1 % 7 == 0) {
    if (num1 % 2 == 0 && num1 % 3 == 0 && num1 % 5 == 0) {
        document.write("Es divisible por 2,3,5");
    
    }else if (num1 % 2 == 0 && num1 % 3 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 2,3,5");
    
    }else if (num1 % 3 == 0 && num1 % 5 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 3,5,7");
    
    }else if (num1 % 5 == 0 && num1 % 2 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 2,5,7");
    }else if (num1 % 2 == 0 && num1 % 3 == 0) {
        document.write("Es divisible por 2,3");
    
    }else if (num1 % 2 == 0 && num1 % 5 == 0) {
        document.write("Es divisible por 2,5");
    
    }else if (num1 % 2 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 2,7");

    }else if (num1 % 3 == 0 && num1 % 5 == 0) {
        document.write("Es divisible por 3,5");
    
    }else if (num1 % 3 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 3,7");
    
    }else if (num1 % 5 == 0 && num1 % 7 == 0) {
        document.write("Es divisible por 5,7");
    
    }else if (num1 % 2 == 0) {
        document.write("Es divisible por 2");
        
    }else if (num1 % 3 == 0) {
    document.write("Es divisible por 3");
        
    }else if (num1 % 5 == 0) {
    document.write("Es divisible por 5");
        
    }else if (num1 % 7 == 0) {
    document.write("Es divisible por 7");
    }
}else {
    document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}
document.write('<br>');
//Escribir un programa que escriba en pantalla los divisores de un número dado

var num1 = parseInt(prompt("Numero 1"));

for (var i=2;i <= num1/2; i++) {
    if (num1 % i === 0) {
        document.write(i,",");
    }
}
document.write('<br>');
//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

var num1 = parseInt(prompt("Numero 1"));
var num2 = parseInt(prompt("Numero 2"));
var menor;
if (num1 < num2) {
    menor = num1;
} else {
    menor = num2;
}
for (var i=2; i <= menor / 2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
    document.write(i,", ");
    }
}
document.write('<br>');
//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

var num1 = parseInt(prompt("Numero 1"));
var i = 2;
while (num1 % i !== 0 && i < num1 / 2 ) {
    i++;
}
if (num1 % i !== 0) {
    document.write("El número es primo");
} else {
    document.write("El número no es primo");
}
