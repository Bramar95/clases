//MÉTODOS DE STRINGS
//ejercicio 1, concatenar
//Debemos crear una función llamada dominio que recibirá un string como "digitalhouse.com.ar" y su función será retornar: "http://www.digitalhouse.com.ar".
function dominio (string) {
    return "http://www." + string;
}

//ejercicio 2, .length
let texto= 'Hola preciosura!';
console.log(texto.length);

//ejercicio 3, .replace
function reemplazoFastFast (texto, palabraA, palabraB) {
    return texto.replace(palabraA, palabraB);
    }

//ejercicio 4, .indexOf, buscar palabra según índice
function menciona (texto, palabra) {
    if (texto.indexOf(palabra)=== -1) {
    return false;
    } else {
        return true;
    }
    }

//ejercicio 5, .slide
let frase = '¡Hola!, soy Carli';
let licenciada= frase.slice(12);

//OBJETOS LITERALES
//Primer ejercicio: métodos en un objeto, función
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadHoras) {
        this.energia=  this.energia- (cantidadHoras * 5);
        this.experiencia= this.experiencia+ (cantidadHoras * 2);
        return this.energia, this.experiencia;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);

//Segundo ejercicio: constructor de objetos.
let curso= {
    cantidadDeAlumnos: 55,
    horario: "de 19 a 21 hs.",
    docentes: ["Mauro","Lauta"],
    horarioCursada: function () {
        return "El horario de cursada es " + this.horario;
    }
}

function Curso(cantidadDeAlumnos, horario, docentes) {
    this.cantidadDeAlumnos= cantidadDeAlumnos;
    this.horario= horario;
    this.docentes= docentes;
}

let nuevoCursoBotanica= new Curso(43, "de 21 a 23 hs.", ["Chafa", "Tony"]);

console.log(curso.docentes)
console.log(curso.horarioCursada());
console.log(nuevoCursoBotanica);

//FUNCIONES ARROW
//No utliza la palabra function, y son funciones anonimas
//Para nombrarlas la declaramos como valor de una variable
//En una linea de codigo solamente, no necesitamos la palabra return ni las llaves
//Si toma un solo parametro no necesita ese paramentro encerrarlo entre parentesis
//let laMitad= num=> (num/ 2);
//console.log(laMitad(4));

//El operador flecha reemplaza a la palabra return
// Función convencional 
function sumar(n1,n2) {
    return n1 + n2
  }
  
// Arrow function
let sumar = (n1,n2) => n1 + n2

//Con mas de una linea de codigo el arrow necesita de las llaves y de un return explicito
let esMultiplo= (numA, numB) => {
    let resto= a% b;
    return resto=== 0;
}



//ejercicio 1, Convertir a arrow function
function dameCinco() {
    return [1,2,3,4,5];
}

function multiplicarPorDos() {
  return 123 * 2 ;
}

function mostrarNombre() {
  return "Mi nombre es Hernán";
}

let  dameCinco = ()=> [1, 2, 3, 4, 5];
let multiplicarPorDos = ()=> 123* 2;
let mostrarNombre = () => 'Mi nombre es Hernán';

//ejercicio 2, Arrow function con parámetro
function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}
let saludar= nombre => 'Hola, ' + nombre + '!';

//ejercicio 3, Ahora probemos con más de uno
function saludar(nombre, apellido) {
    return 'Hola, ' + nombre + ' ' +  apellido + '!';
}
let saludar= (nombre, apellido)=> 'Hola, ' + nombre + ' ' + apellido + '!';
//CONDICIONALES
//IF Ternario
//Se escribe toda la logica en una sola linea
/*Primero se define la condiciona  que se evalua como true o false, luego si es verdadera el bloque de codigo a ejecutar, 
y despues acompañada de dos puntos el bloque de codigo a ejecutar si la condicion es falsa*/
//Siempre en la segunda expresion hay codigo o sino queremos nada ""
//condicion? expresion para el true: expresion para el false;

//Se suele guardar en una variable ele resultado del if ternario, lo que devuelve

//Switch
//Al iniciar el switch se debe poner entre parentesis la expresion/condicion/variable que se quire evaluar
//Se pueden crear todos los casos necesarios para diferentes escenarios
/*En case se define el valor con que queremos comparar la expresion; si ese valor del case resulta ser verdadero entonces se ejecuta el 
bloque de codigo que va despues de los dos puntos y debajo del case*/
//Debajo de cada bloque de codigo de un case se define un break que indica que el switch se corta si un case es verdadero
//Si un caso no verdadero el switch lo ignora y pasa a comparar el valor del siguiente case con el de la expresion
//Si ningun caso es vedadero entonces al final del switch se ejecuta un default que funciona simil al else de un if normal
//Despues de definir default se ponen dos puntos y debajo el codigo a ejecutar y no hace falta escribir un break

//ejercicio 1, Fin de semana
let dia = 'jueves'
function finDeSemana (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

function finDeSemana (dia) {
	switch (dia) {
		case "viernes":
            console.log("buen finde");
            break;
        case "lunes":
        console.log("buena semana");
            break;
            default:
                console.log("buen dia");
	}
}
console.log(finDeSemana("BRsd"));

//ejercicio 2, Tengo clases; agrupar casos
function tengoClases(dia) {
	switch (dia) {
    	case "lunes":
		case "miércoles":
		case "viernes":
		console.log("tenés clases");//se permite agrupar varios valores de cases que comparta en mismo bloque de codigo que se desee ejecutar
		break;
		default:
		console.log("no tenés clases");//error en dejar el break al final del default
	}
}
console.log(tengoClases("giosd"));
//Ejercicio 3, Practicando el if ternario
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}
//Reforzar conceptos!
let bicicletaConRodadoGrande = bicicletaB.rodado> bicicletaA? bicicletaA:bicicletaB; 

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );


//FOR
//Los ciclos permiten automatizar el codigo mientras una condicion se cumpla osea repetir instrucciones de manera sencilla
/*Despues de definir el for con la palabra reservada, dentro de los parentesis se define tres partes:
Entre las llaves se define el codigo que se ejecuta en cada iteracion
for (variable inicializadora; ; condicion a evaluar, modificador) {
    bloque de codigo a ejecutar
}*/
//variale inicializadora: se establece el valor inicial del for antes de comenzar
//condicion a evaluar: el for evalua en cada iteracion si la condicion es true o false, y en consecuencia ejecuta el codigo o finaliza el ciclo
//modificador: en cada iteracion se modifica el contador de vueltas segun como lo hayamos especificado
//La condicion a evaluar en algun momento tiene que dar false para eitar un bucle infinito

//Ejercicio 1, Repetir como un loro
function loro (texto){
    for(i= 0; i<5; i++) {
    console.log(texto);
    }
    }

//Ejercicio 2, contar impares 
function noParesDeContarImparesHasta(numero){
    let numerosImpares= 0;
    for(i=0; i<numero; i++){
        if (i%3=== 0) { 
        numerosImpares= numerosImpares + 1;
            }
        }
    return numerosImpares;
}
console.log(noParesDeContarImparesHasta(9));