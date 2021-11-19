//CALLBACKS
//Es una funcion que se pasa como parametro de una funcion
//La funcion que lo recibe es quien se encarga de ejecutarla cuando sea necesario dentro del codigo interno
//No todas son anonimas, tambien pueden ser definidas previamente antes de pasar como parametro de otra funcion
//Dentro del parametro de una funcion padre,el callback no se debe ejecutar entre parentesis

//ejercicio 1, pasar un callback
function doble(numero) {
    return numero* 2;
    };
    
function triple(numero) {
    return numero* 3;
    };
    
function aplicarCallback(numero, callback) {
    return callback(numero);
};


//ejercicio 2, hagamos una calculadora
//realice funciones arrow de las operaciones por separado y luego las integre a la funcion padre
let suma= (numeroA, numeroB)=> numeroA+ numeroB;
let resta= (numeroA, numeroB)=> numeroA- numeroB;
let multiplicacion= (numeroA, numeroB)=> numeroA* numeroB;
let division= (numeroA, numeroB)=> numeroA/ numeroB;
//No se sabe que operacion se va a usar en la fn padre calculadora
let calculadora= (numeroA, numeroB, callback)=> callback(numeroA, numeroB);

//Al momento de ejecutar primero se ejecuta la funcion callback que esta como argumento y luego la fn padre
console.log(calculadora(numeroA, numeroB, resta));


//ejercicio 3, callback reloaded
//en la funcion procesar integre la funcion agregarhttp para que itere el array de esa funcion y le vaya sumando los resultados modificados de cada vuelta en el array nuevo
function agregarHttp(url) {
    return "http://" + url;
};

function procesar(array, callback){
    let nuevoArray= [];
    for (i= 0; i< array.length; i++) {
    nuevoArray.push(callback(array[i]));//Se pasa un callback previamente definido y es aca donde la fn padre decide ejecutarlo
    }
    return nuevoArray;
};
//Tambien se puede pasar otro callback que no sea agregarHTTP mientras que en la logica interna de fn padre respete el tipo de dato con el que se opera



//METODOS DE ARRAY PARTE 2
/*los metodos de array reciben un callback
-el map retorna una array con el numero de elementos intacto pero cada elemento modificado
-el filter retorna un array nuevo con el numero de elementos modificado
-el reduce retorna cualquier tipo de dato que deseemos. se debe poner un valor inicial a 0. Retorna un array modificado en valores y en numero de elementos
-el foreach sirve para iterar un elemento o array. No devuelve ningun array nuevo
algoritmo: serie de pasos logicos detallado de lo que se debe hacer
//Ejercicio 1, Filter
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]
let aprobados= estudiantes.filter(p=> p.promedio>= 7);
let desaprobados= estudiantes.filter(p=> p.promedio< 7
);
//Tambien se puede
//Estudiantes como parametro hace referencia a cada elemento del array
//Tambien como logica del callback se puede usar el dato true de arpobado como criterio de filtrado, estudiantes: aprobado; se necesita de un dato para definir la funcion
let aprobados= estudiantes.filter(function(estudiantes){
    return estudiantes.promedio>= 7;
});
let desaprobados= estudiantes.filter(function(estudiantes) {
    return estudiantes.promedio< 4;
});
console.log(aprobados);

//Ejercicio 2, Map
let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados= horariosPartida.map(function(numero) {
    return numero- 1;
})

//Ejercicio 3, Reduce

let vueltas = [5, 8, 12, 3, 22];

let totalVueltas= vueltas.reduce(function(acum, num) {
    return acum+ num;
});

//Ejercicio 4, ForEach

let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
listaDeSuperMercado.forEach(function(valor) {
    console.log(valor)
})

//OBJETO DATE
//Se crea una variable para almacenar la instancia del objeto Date con el metodo new Date
//Si no se escriben argumentos el objeto se crea con la hora y fecha del momento
let miFecha= new Date();




//Ejercicio 1, Date
//Si no quiero una fecha especifica en el objeto date, los metodos se ejecutan con la fecha actual
//Luego se puede declarar variables que guarden el valor del dia, del mes y del año, para que finalmente despues de definir toda la fecha devolvamos un mensaje final
let dia= fecha.getDate("XX");
let mes= fecha.getMonth("YY");
let anio= fecha.getFullYear("ZZZZ");
console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ dia +' del mes '+ mes +' del año '+ anio)

//para reacomodar el numero del mes correctamente por fuera del indice que devuelve el metodo realizamos un array con los strings de los nombres de cada mes

let meses= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
//luego al momento de mostrarlo en consola en lugar de la posicion del indice, el metodo va a devolver con el operador de indice el array con  el valor del string correspondiente
console.log(meses[mes]);
//tambien se puede mostrar en numero del mes, pero arreglando la posicion del indice que devuelve el metodo
console.log(mes+1);


//DESTRUCTING
//La asignacion por destructuracion sirve para extraer datos de objetos y arrays de manera sencilla y rapida
//La asignacion por destructuracion no altera o elimina el array original

//Ejercicio 1, Destructuring
//Para destructurar arrays se declara una variable o muchas varibles entre corchetes, luego se le asigna el array del cual extraimos esos datos
//Se pueden declarar mas de una variable separandolas por comas y sin comillas
//Si queremos saltar un valor del array del cual extraemos se debe dejar un espacio vacio separado por comas
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [ , bariloche, , china, ]= destinosDelMundo;
//se debe declarar una variable y sin caracteres especiales

//Los datos de un array ya definido se transfieren a las variables que definimos nosotros respetando el orden del indice original
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];
let [pais1, pais2, pais3, pais4, pais4]= destinosDelMundo;

//Ejercicio 2, Destructurando ojetos
//Para destructurar objetos literales se declara una variable o muchas variables entre llaves, luego se le asigna el nombre del objeto del cual extraimos esas propiedades
//Se pueden declarar mas de una variable separandolas por comas y sin comillas
//Partiendo de un objeto definido no hace falta dejar espacios vacios ya que a cada variable se le asiganra el valor de las propiedades que extraimos del objeto original
//Es indistinto el orden

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color} = auto;

//Dentro de un detructuring para cambiar el nombre a una variable se marca con : despues de la variable y se procede a declarar el nuevo nombre

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color: tonalidad} = auto;

//SPREAD OPERATOR
//Se utiliza sobre cualquier objeto iterable y permite expandir y copiar datos de un elemento a otro elemento
//El elemento iterable es una variable que puede ser un array, un objeto o un string
//Se define con el operador spread(...) antecediendo a la variable:
 //...variable 

 //Dentro de arrays
 //copiar todos los datos de un array a un array nuevo:
 let FMS= ["Papo", "Dani", "Sub"];
 let redbull= ["Soni", "Tata", "Klan"];
let competiciones= [...FMS, ...redbull];

//copiar todos los datos de un array dentro de un existente:
let parte= ["cómo"];
let pregunta= ["Hola,", ...parte, "Estás?"]

//copiar propiedades de un objeto a otro:

let rasgo= {mejorMarca: 4, lugar: "Chicago"}
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true, ...rasgo},
    {nombre: 'Jane', promedio: 7, aprobado: true, ...rasgo},
    {nombre: 'June', promedio: 3, aprobado: false, ...rasgo},
]

//array como argumento de funcion a ejecutar
//la funcion toma al contenido del array como argumentos separados, ya que el operador spread expande los datos del array:
let horas= [13, 14, 15, 16, 17];
Math.min(...horas);//Toma n cantidad de elementos y devuelve el menor

//Parametro Rest
//Se usa como ultimo parametro de una funcion 
//Se utiliza durante la definicion de la funcion y crea un array que devuelve los argumentos adicionales
//Captura los ultimos argumentos restantes de esta manera la funcion acepta culquier numero de argumentos

function miFuncion(numA, numB, ...otros) {
    return otros;
}
console.log(miFuncion("a","b","c","d","e"));
//devuelve un array ["c","d","e"];

function sumar(...numeros) {
    return numeros.reduce((acum, num)=> acum+ num);//el parametro rest numeros se vuelve array y entonces se le puede aplicar el metodo que deseemos
}
console.log(sumar(1,3,6,4,8,7));
console.log(sumar(3,6));//Admite la cantidad de argumentos que deseemos gracias al rest