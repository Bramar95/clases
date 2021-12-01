/*
INTRODUCCION A HTML(Hyper Text Markup Language)
-Además de estructura, provee un sentido logico y semantico al sitio
-El hipertexto puede viajar a traves de la red de manera sencilla y rapida, y puede ser interpretado por un software(el navegador)
-Cada elemento en el lenguaje HTML produce un elemento visual en el navegador; el navegador procesa el archivo o el codigo html y lo muestra al usuario
-La estructura html se compone de elementos dispuestos en caja y otros que ocupan solo el ancho de su contenido


ETIQUETAS Y ATRIBUTOS
-El lenguaje está compuesto por etiquetas
-Las etiquetas son porciones de texto, que al ser interpretado por el navegador definen un resultado visual particular
-Al conjunto de etiquetas y contenido lo llamamos elemento
-Las etiquetas poseen una apertura y una clausura
-Las etiquetas reciben atributos o propiedades
-Los atributos reciben un valor, que serán escritos entre comillas y despues de un igual
-El contenido de un elemento sera escrito entre las etiquetas de apertura y de clausura

<h1(etiqueta de apertura) allign(atributo)="center"(valor)>Hello there(contenido)</h1>(etiqueta de clausura)

Estructura basica de un documento html
-La etiqueta !DOCTYPE define la version de html que se está usando
-La etiqueta html define que todo el contenido del archivo será de html
-La etiqueta head, guarda toda la configuracion o información referente con el documento como autor, la codificacion de caracteres, el titulo a mostrar en la pestaña del navegador
-Dentro de head, la etiqueta meta define la codificacion de caracteres y la etiqueta title define lo que lleva la pestaña del navegador
-La etiqueta body contiene el contenido visual de la pagina en si

<!DOCTYPE>
<HTML>
<HEAD>
    <META CHARSET="UTF-8">
    <TITLE>Pestaña del navegador</TITLE>
</HEAD>
<BODY>
</BODY>
</HTML>

Ejercicio 1, Mi primer html
¡Hora de escribir nuestro primer HTML! Recordemos la estructura básica: todo documento HTML cuenta, al menos, con tres etiquetas esenciales: <html>, <head> y <body>

<html>
    <head>
        <title>"Mi primer HTML</title>
    </head>
<body>Say hello to my little friend!</body>
</html>

ELEMENTOS EL LINEA Y EN BLOQUE; COMPORTAMIENTO DE ELEMENTOS

-Los elementos en bloque ocupan todo el ancho total de la pagina independientemente de su contenido
-No permiten la disposicion o flujo de elementos laterales en la misma linea aunque haya espacio
-Generan un salto de linea

-Los elementos de linea determinan su tamaño o disposicion dependiendo de contenido
-Pueden convivir junto a otros elementos en la misma linea

-La propiedad display cambia la disposicion del elemento
-Los valores que recibe:
-Inline: define un elemento con comportamiento en linea. No recibe propiedades de elementos en caja
-Block: define un elemento con comportamiento de bloque o caja. Recibe propiedades de elementos en caja
-Inline-block: define un elemento con comportamiento de semi-bloque. Puede recibir propiedades de elementos en caja y de en linea
-None: oculta el elemento y desaparece de la vista

Ejercicio 1
En código vamos a poder ver 6 textos, de los cuales los primeros 3 deberían envolverse en forma de línea con la etiqueta span y los últimos 3 en forma de bloque con la etiqueta div. 

<html>
  <head>
  </head>
  <body>
    <! –– Las próximas lineas de texto debe estar cada una contenida dentro de una etiqueta span ––>
   <span> Esto es un texto dentro de un span.</span>
   <span> Otro texto dentro de un span</span>
    <span> Ultimo texto dentro de un span.</span>
    <! –– Las próximas lineas de texto debe estar cada una contenida dentro de una etiqueta div ––>
   <div> Esto es un texto dentro de un div.</div>
    <div>Otro texto dentro de un div.</div>
   <div> Ultimo texto dentro de un div.</div>
  </body>
</html>

ETIQUETAS DE TEXTO
-Son necesarias para jeraquizar y enfatizar la informacion en el documento html

Elementos de encabezado
-Describen seis niveles de importancia y sirven para diferenciar un bloque de texto respecto al resto del contenido o titulares
-Se veran en negrita y en diferente tamaños
-El h1 no se puede usar mas de una vez en un documento html
-Son elementos en bloque

Elementos de parrafo
-Se pueden usar cuantas veces queramos
-Nos permiten distribuir el texto en parrafos
-Son elementos en bloque

-strong sirve para darle estilo negrita al texto. Es un elemento en linea
-em sirve para darle estilo cursiva al texto. Es un elemento en linea
-br sirve para generar saltos de linea entre los elementos

Ejercicio 1, Practicamos cómo escribir etiquetas de texto
Nuestro trabajo será incluir las etiquetas <h1>, <h2>, y <p> y agregarles algún texto a cada una para evidenciar los resultados en el navegador.
<html>
  <head>
    <meta charset="utf-8">
    <title>Etiquetas de texto</title>
  </head>
  <body>
    <h1>Un par de años en silencio manso</h1>
    <h2>Potro, tenía dos perros y unos se comió al otro</h2>
    <p>Tener cintura, la de Orteguita, la dignidad de un cacho te la da y otro te la quita... y nacemos de nuevo. Vamos a construir un parque acuático!</p>
  </body>
</html>

LISTAS
-La eleccion de una lista depende del objetivo por la que la estamos creando
-Una lista ol es aquella que genera una lista con numeracion; proceso logico de pasos a realizar o secuencia
-Con el atributo type podemos cambiar la viñeta numerica: A(alfabetico), 1(nuemerico), I(romana)
-Por defecto se empieza a contar desde el 1, pero se puede configurar con el atributo start y el valor deseado a iniciar la lista

<ol type="A" start="3">
    <li>levantarse</li>
    <li>ducharse</li>
    <li>vstirse</li>
</ol>


-Una lista ul es aquella que genera una lista con viñeta de punto o bootleg; proceso al azar de elementos a agrupar
-Se puede cambiar el tipo de viñeta con type: disc, circle, square, none
<ul type="square">
    <li>levantarse</li>
    <li>ducharse</li>
    <li>vestirse</li>
</ul>

Lista anidadas
Nos permite crear diferentes niveles de jerarquia y organizacion
Solo se puede anidar un ol o un ul dentro de un li hijo

<ul type="square">
    <li>levantarse</li>
        <ol type="A" start="1">
            <li>un pie</li>
            <li>luego el otro</li>
        </ol>
    <li>ducharse</li>
    <li>vestirse</li>
</ul>

Ejercicio 1, Armando listas
En este caso, debemos definir dos listas, utilizando las etiquetas y sus atributos aprendidos. La primera deberá ser una lista desordenada de 3 colores (los que queramos). La segunda, una lista ordenada de 3 películas (también las que queramos), pero ¡ojo!, esta lista deberá empezar a partir del número 10.

<html>
  <head>
    <title>Listas</title>
  </head>
  <body>
      <ul>
        <li>Azul</li>
        <li>Rosa</li>
        <li>Violeta</li>
      </ul>
      <ol start="10">
        <li>Old school</li>
        <li>Leon</li>
        <li>Drive</li>
      </ol>
  </body>
</html>

RUTAS, HIPERVINCULOS E IMAGENES

Una ruta e sun trayecto que un documento html debe atravesar para llegar a la ubicacion de un determinado recurso
Le permite al navegador encontrar un recurso

Ruta absoluta
-Son coordenadas exactas para la ubicacion determinada de un recurso y hace referencia a una ubicacion dentro de internet
-Contienen toda la informacion de un recurso determinado
-No es necesario que el recurso este dentro del equipo
-El acceso al recurso siempre sera el mismo

Ruta relativa
-Contienen la informacion necesaria para que el documento html llegue a la ubicacion del recurso requerido
-Contiene coordenadas parciales de una determinada ubicacion de un recurso
-No pueden hacer referencia a una carpeta del disco duro 

Imagen
-La etiqueta img nos permite invocar imagenes en un documento html y no necesita cierre
-Al invocar el recurso, mediante el atributo href se hace referencia a la ubicacion donde esta alojada para que aparezcan en el navegador
-El valor puede ser una ruta absoluta o relativa
-Tambien recibe el atributo alt a modo de descripcion corta de la imagen invocada
-El atributo width permite definir el ancho de nuestra imagen; recibe valores de pocentaje, como numericos y la medida de unidad correspondiente
-El atributo height permite definir el alto de nuestra imagen; recibe valores de pocentaje, como numericos y la medida de unidad correspondiente

<img src="/images/gato.jpg" alt="imagen de perfil" width="320" height="230">

Enlaces e hipervinculos
-La etiqueta a nos permite generar enlaces
-Recibe el atributo href contiene la ruta que indica la direccion a la que nos llevara el navegador
-Entre las etiquetas contiene el texto que queremos visualizar en el navegador o al usuario
-El atributo target define donde queremos que se abra ese enlace propuesto

-Enlaces Externos: sus rutas estan por fuera de nuestro sitio, suelen ser absolutas y nos llevan a un recurso externo
-Enlaces locales: sus rutas estan por dentro de nuestro sitio, suelen ser relativas y nos lelvan a un recurso ubicado en la misma carpeta que el documento html
-Enlaces Anclas:
-Enlaces Telefonos:
-Enlaces Email:

<a href="https://www.digitalhouse.com">A DH!</a>

Ejericicio 1, Mis primeras rutas
Por ahora nada rebuscado. Primero, tenemos que crear un hipervínculo hacia la web de Digital House (https://www.digitalhouse.com) y,
 luego, insertar una imagen y utilizar como ruta el siguiente link: http://bit.do/imagen-blend.
<html>
  <head>
    <title>Rutas</title>
  </head>
  <body>
      <a href="https://www.digitalhouse.com">A DH!</a>
      <img src="http://bit.do/imagen-blend" alt="foto de DH">
  </body>
</html>

 Ejercicio 2, Imágenes linkeadas
Queremos que, al hacer clic en una imagen, la misma nos lleve hacia https://google.com. Es decir que, al pasar el mouse por encima de la imagen, deberíamos ver la "manito" indicándonos
que ese elemento es un hipervínculo. La URL de la imagen que debemos usar es la siguiente: https://bit.ly/2WDMapV

<html>
  <head>
    <title>Imágenes Linkeadas</title>
  </head>
  <body>  
      <a href="https://google.com"><img src=" https://bit.ly/2WDMapV"></a>
    
  </body>
</html>

Ejercicio 3, Listas linkeadas
Nuestro trabajo será crear una lista desordenada de los siguientes sitios web, que se vea en el siguiente orden y de la siguiente manera:
Facebook
Instagram
Olé

<html>
  <head>
    <title>Listas linkeadas</title>
  </head>
  <body>
    <ul>
      <li><a  href="https://www.facebook.com">Facebook</a></li>
      <li><a href="https://www.instagram.com">Instagram</a></li>
      <li><a href="https://www.ole.com.ar">Olé </a></li>
    </ul>
  </body>
</html>

INTRODUCCION A LA SEMANTICA


Etiquetas semanticas de bloque
Permiten generar un codigo mas entendible para que la interpretacion humana y artificial entiendan el contenido y la intencion que generamos 

-Las etiquetas semanticas de bloque se comportan del mismo modo que un divl, un elemento en bloque 
-Segun el nombre y el lugar donde las ubiquemos refieren a un contexto de la informacion que contienen

<header></header>
<nav></nav>
<footer></footer>
<section></section>
<article></article>

Header:
-Sirve para generar la cabecera del documento o de una seccion de contenido
-Contiene elementos como el logotipo, barra de navegacion, barra de busqueda, enlaces a redes sociales o enlaces de busquedas rapidas

<header>
    <!--Logotipo-->
    <!--Barra de navegacion-->
    <!--Enlaces-->
    <!--Busquedas rapidas-->
</header>

Nav:
-Sirve para generar una barra de navegacion, sea una principal o una barra alternativa
-Contiene un arbol de navegacion, definido por lista ordenadas y desordenadas, elementos de listas e hipervinculos

<nav>
    <ul>
        <li><a href="href="#">Inicio</a></li>
        <li><a href="href="#">Quienes somos</a></li>
        <li><a href="href="#">Contacto</a></li>
        <li><a href="href="#">Servicios</a></li>
    </ul>
</nav>

Footer:
-Sirve para generar el pie de pagina principal o de una seccion de contenido
-Contiene derechos reservados y enlaces de la web

<footer>
    <nav>
        <p>Todos los derechos reservados</p>
        <li><a href="href="#">Terminos y condiciones</a></li>
        <li><a href="href="#">Mapa de sitio</a></li>
        <li><a href="href="#">Informacion legal</a></li>
    </nav>
</footer>

Section:
-Sirve para definir una seccion de contenido
-Contiene un breve apartado de un producto o servicio
-Tambien puede usar etiquetas como footer y header


<section>
    <header>
        <h2>Producto destacado</h2>
    </header>
    <article>
        <!--Contenido del producto-->
    </article>
    <footer>
        <a href="#">Continuar leyendo...</a>
    </footer>
</section>

Article:
-Sirve para definir una pieza de contenido independiente; contenido que funciona bien por si solo, sin tener en cuente lo que lo rodea
-Se suelen ver dentro de secciones

<section>
    <article>
        <!--Contenido del producto-->
    </article>
    <article>
        <!--Contenido del producto-->
    </article>
</section>

ESTRUCTURA DE UN SITIO WEB

Todo lo que se ve en la pagina siempre dentro del body

1-A partide un boceto o de un wireframe se debe definir los bloques principales de contenido del sitio web: hader, section, footer
2-Luego se debe ir bloque por bloque identificado y definiendo los elementos necesarios para generar estas grandes divisiones
*/

