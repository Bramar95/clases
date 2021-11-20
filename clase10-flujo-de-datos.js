const express = require('express');//Llamamos a la libreria de archivos express y la guardamos en una variable
const app = express();//Guardamos la ejecucion de la funcion express en una variable

app.get("/",(req, res)=> res.send("Bienvenidos al sitio"));
app.listen(8000, ()=> console.log("Levantando un servidor con Express"));//Levantsr un servidor en un determinado puerto
//El primer parametro del metodo listen es el puerto a levantar y el segundo es una callback a modo de mostrar un console.log

/*ARQUITECTURA CLIENTE- SERVIDOR: FLUJO REQUEST/RESPONSE
-Hace referencia a un modelo de comunicación en el que un cliente se comunica o envia datos a un servidor a traves de internet

Cliente/Request:
-El cliente es el o los dispositivos que envian una petición de recursos o de servicios a un servidor; piden por un contenido especifico 
-El implemento que hace la peticion debe estar conectado a internet
-El cliente hace estas peticiones de recursos mediante el navegador web
-Envia un request a traves del navegador a un servidor, como puede ser el acceso a una pagina almacenada en un servidor fisico 
-Del lado del cliente o del navegador nos referimos al Front-end, que engloba todos los elementos graficos y visuales que conforman la interfaz del sitio,
parte de la funcionalidad; esta definido por lenguajes CSS(estilos visuales), HTML(estructura) y JavaScript(interaccion del sitio)

Servidor/Response:
-Es cualquier computadora que procese solicitudes y brinda una respuesta o response a las peticiones del cliente a traves de internet;
-Brinda acceso a los recursos y servicios que solicita el cliente
-En una misma computadora se puede encontrar el servidor y el cliente
-El servidor mediante un Web server(programa del servidor) recibe el request, procesa la peticion y luego envia una respuesta al cliente o navegador, como puede ser devolver la pagina solicitada
-Del lado del servidor nos referimos al Back-end, que engloba toda la logica interna y funcionamiento del sitio. Esto permite cargar las solicitudes enviadas por el cliente
Esta definido por bases de datos como MongoDB,lenguajes como PHP, Javascript y frameworks como express y Laravel



INTRODUCCION A HTTP(protocolo de transferencia de hipertexto)
-Gestiona el flujo de datos o las transacciones entre cliente y servidor en la web
-Es un conjunto de subreglas que se encargan de definir como responder ante determinadas  o bien de definir metodos de peticion

URI(Identificador de recursos uniformes)
-Es un bloque de texto o direccion web que transfieren informacion en la web bajo un protocolo
-Se defienen en la barra de direcciones del navegador
-Se componen por una URL y una URN
-URL: empieza con un protocolo e indica el recurso al que deseamos acceder; "http//"
-URN: indica el nombre exacto del recurso uniforme. El nombre del dominio y el nombre del recurso; "www.lasvegas.com/casinos-lujosos"

Headers y Body
-Dentro del esquema de peticiones y respuestas y bajo el formato HTTP, la informacion que viaja con cada request y con cada response lo hace a traves de headers y bodys
-Los headers son porciones de texto que contienen informacion importante requerida por el cliente o el servidor
-Separados por una linea blanca, vienen los bodys que contienen la informacion misma de cada request y response, 
que puede ser el codigo de una pagina a modo de respuesta o el contenido de un formulario a modo de request

Metodos de peticion:
-Cada metodo define una accion y refiere a una funcionalidad especifica
Get:Envia informacion o datos al servidor y tambien la recibe de un recurso especifico; se utiliza a traves del navegador o de URLS, o bien de enlaces
Post:Envia datos al servidor pero de modo mas seguro que get
Delete:Borra un recurso presente en el servidor
Put:Reemplaza toda la informacion actual o datos de un recurso presente en el servidor
Patch:Aplica modificaciones parciales de un dato en un recurso presente en el servidor

Codigos de estado HTTP:
-Cuando el servidor recibe y procesa una request emite un codigo de estado que indica el estado de respuesta HTTP, formado por tres digitos;
-404:pagina no encontrada
-1__:respuestas informativas
-2__:respuestas exitosas
-3__:redirecciones
-4__:errores del cliente
-5__:errores del servidor

EXPRESS;FRAMEWORKS
-Es un entorno de trabajo que trae resueltas una serie de tareas
-Es uno de los modulos mas estables y mas utilizados por node
-Es una libreria de codigo o modulo nativo con funcionalidades armadas para trabajar

Instalar Express:
-Primero se debe abrir el terminal y poner "npm init"
-Una vez creado el archivo "package.json", debemos poner "npm install express"
-Quien quiera clonar el proyecto podra requerir todas la dependencias instaladas con el comando "npm install"

Ejercicio1, Requerir y usar Express

-Primero, desde el entry point se debe requerir el modulo, creando la variable express y asi almacenar en ella el modulo express
-Esta libreria devuelve una funcion que encapsula toda la funcionalidad de Express
-Para poder usar todos esos metodos y propiedades de Express, debemos crear la variable app y almacenar en ella la ejecucion del objeto express

const express= require("express");
const app= express();

SERVIDOR WEB CON EXPRESS; LEVANTAR UN SERVIDOR WEB


Ejercicio 2, Instanciar servidor
-Se requiere el modulo express en una variable del mismo nombre
-Se guarda en otra variable la ejecucion de la funcion
const express = require('express');
const app = express();


2-Al objeto app le pedimos el metodo get,
-Recibe dos parametros: un string que define la url de la ruta, y un callback con dos parametros(req, res),
ambos son objetos que nos brinda Express y contiene toda la informacion y funcionalidad para trabajar los pedidos y las respuestas
-req contendra todos los metodos y propiedades de la peticion que llegó y queremos trabajar
-res contendra todos los metodos y propiedades de la respuesta que enviaremos y queremos trabajar
-Dentro del callback definimos la respuesta a enviar,en este caso pidiendo para el objeto res el metodo send
-Como parametro recibe lo que queremos mostrar en el navegador, una respuesta de texto al navegador o cliente

app.get("/",(req, res)=>
 res.send("Bienvenidos al sitio")
 );

1-Al objeto app le pedimos el metodo listen, que se encargara de levantar el servidor
-Recibe dos parametros: el puerto, y un callback que devuelve un mensaje

app.listen(8000, ()=>
 console.log("Levantando un servidor con Express")
 ); 

SISTEMA DE ROUTEO Y RESPONSE
-Al crear un servidor es necesario definir un sistema de ruteo o route system, para que el servidor pueda
atender a las diferentes peticiones de un cliente y responder o redirigir en consecuencia de las mismas
-Son aquellas respuestas que predefinimos dependiendo la ruta por la que la persona accede al visitar nuestra pagina
-La respuesta puede ser de tipo variado o de cualquier formato que pueda interpretar el navegador: un PDF, texto plano, texto en formato HTTP, un fichero de imagen

Definiendo una ruta:
-El primer objeto es app, la variable que almacena la funcionalidad de Express
-Luego, debemos agregar el metodo http a utilizar(get, put, patch,delete. send)
-Como primer parametro tenemos un string, que representa la ruta a la que ha ingresado nuestro cliente, como puede ser la razis o home del sitio "/"
-Dentro del callback definimos la logica a ejecutar para manejar la respuesta al pedido del cliente
-Dentro del metodo puede ir una variable, como puede ser dentro del metodo send:

app.get("/", (req, res)=> {
    let contenido= "P+agina principal";
    res.send(contenido);
});

Ejercicio 1, Ruta GET home
const express = require('express');
const app = express();

app.get(("/home"), (req, res)=> {
    res.send("Hola, estamos en el home")//Enviamos un texto como respuesta
    });

Ejercicio 2, Ruta GET perfil
const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

app.get(("/perfil"), (req, res)=>{
    res.send(saludo);//Enviamos una variable como respuesta
});

Ejercicio 3, Ruta GET agregar producto

const express = require('express');
const app = express();

let producto= {
    tipoProducto: null,
    precio: null,
    cantidad: null 
}

app.get(("/producto/agregar"), (req, res)=> {
    res.send(producto); //Enviamos un objeto como respuesta
});

ESTRUCTURA DE CARPETAS Y SENDFILE
-Sendfile nos permite enviar un archivo existente en nuestro servidor; responder con un archivo
-Sendfile admite un parametro la ruta absoluta del archivo a enviar
-Primero se debe requerir el modulo nativo path y guardarlo en una variable
const path= require("path");
-Dentro del metodo sendFile usaremos sobre el objeto path el metodo join
-.join une las dos piezas de la ruta absoluta, la constante __dirname y el path relativo:
__dirname es una constante o una variable dinamica de node.js que hace referencia a la direccion del archivo que se esta ejecutando; indica cual es la ubicacion del archivo
el path relativo es la ubicacion del archivo que queremos enviar; hace referencia a la direccion pero teniendo en cuenta quien provee la direccion

res.sendFile(path.join (__dirname, "/carpeta/archivo.extension"))

Ejercicio 1, About us
Queremos que al usuario, al ingresar al about-us, se le envie la siguiente vista: about-us.html. Esta misma se encuentra en la carpeta views.
const path = require('path');

app.get('/', (req, res) => {
    let htmlFile= path.join(__dirname, ("/views/about-us.html"));
    res.sendFile(htmlFile);
});

Ejercicio 1, Hacia la clase en vivo

¿Qué deberás hacer?. Tendrás que levantar un servidor en el puerto 3000 y responder a dos rutas get. La ruta root (/), debe responder enviando la vista en el directorio /views/home.html; y la ruta 404 (/404), debe enviar "Error página no encontrada". Para esto deberás hacer uso de la librería path y de la función sendfile entre otras cosas ya vistas.
Pasos guía / ayuda para la resolución:

1) Importar tanto el framework Express y path.
2) Crear una instancia de Express.
3) Poner al servidor a escuchar al puerto 3000.
4) Agregar la ruta 404 y enviar el mensaje correspondiente.
5) Agregar la ruta root (/) del home y enviar el archivo correspondiente.

const express= require("express");
const path= require("path");
const app= express();

app.get (("/404"),(req, res)=> {
res.send("Error página no encontrada");
});
app.get("/", (req, res)=> {
    let htmlPath= path.join(__dirname, ("/views/home.html"));
    res.sendFile(htmlPath);
})

app.listen((3000), ()=>console.log(""));


*/


