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
-Es el que brinda una respuesta o response a las peticiones del cliente;
-Brinda acceso a los rcursos y servicios que solicita el cliente
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
-Bajo HTTP la informacion que viaja con cada request y con cada response lo hace a traves de headers y bodys
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


//Sistema de ruteo y response*/