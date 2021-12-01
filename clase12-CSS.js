/*
INTRODUCCION DE CSS; CASCADE STYLE SHEET
-Las hojas de estilo sirven para estilizar el codigo html

Vinculacion
-La hoja de estilo se guarda dentro de la carpeta public dentro de otra carpeta css del archivo del proyecto
incular el archivo css en el archivo html, en la parte del head, debajo de todo
-En el archivo html, en la parte del head, usamos la etiqueta link
-El valor del atributo rel nunca cambia
-href es la ubiacion de la hoja de estilo

<link href="/css/archivo.css" rel="stylesheet">


Reglas de CSS
-Es un conjunto de instrucciones que se aplican a un elemento determinado para agregarles estilos
-Se compone por un selector que designa el o los elementos a estilizar
-Luego entre llaves, la propiedad o propiedades del elementos que vamos a modificar
-Seguido de dos puntos y todavia entre llaves, el valor de la propiedad que desgina el comportamiento 
-Para poner mas de una regla por elementos se deben separar por ;
-Cuando se junta la propiedad ye la valor se habla de declaracion

header {
    font-weight: bold;
    text-decoration: none;
    color: black;
    font-size: 12px;
}

Propiedades:
-tipograficas
-fondos
-posicionamiento
-tamaños
-comportamiento
-interfaz
-visualizacion

Selectores de CSS
-Permiten especificar selectivamente a que elementos applicar reglas de estilo

Selector de etiqueta
-Aplica estilos a cualquier selector de etiqueta con el nombre mismo de la etiqueta html

<p>I get a little help from my friends<p>

-Al llamar al selector, se debe escribir el nombre de la etiqueta html

p {
    font-size: 14px;
}

Selector de clase
-A cada elemento html se le debe aplicar el atributo class y asinar el valor del nombre de la clase deseada
-Reciben un nombre y debe referir el objetivo general del selector o al uso

<h2 class="noticia destacada">Cien arcoiris sobre la ciudad</h2>

-Al llamar al selector, se empieza con un punto y se debe escribir todo el nombre de la clase en minuscula
-Se le pueden asignar varias clases a un mismo elemento

.noticia destacada{
    color: blue;
}

Selector de ID
-A cada elemento html se le debe aplicar el atributo id y asignar el valor del nombre id deseado
-Reciben un nombre y debe referir el objetivo general del selector o al uso

<h2 class="noticia">Cien elefantes en el metro</h2>

-Al llamar al selector, se empieza con un # y se debe escribir todo el nombre del id en minuscula
-Se debe nombrar con nombre unicos y no se deben repetir a lo largo del documento

#noticia {
    background-color: grey;
}

Selector descendente
-Se leen de atras hacia adelante
-Da estilo a un elemento siempre y cuando cumpla cuando una una condicion de ubicacion

<ul class="lista>
    <li><p>Hola a todos</p></li>
</ul>

-Aplica reglas de estilo a elementos hijos dentro de otros elementos atrpados en una clase o id

ul.lista li {
    background-color: grey;
}

Selectores combinados
-Es la combinacion de los selectores de etiqueta, de clase y de id
-Se pueden usar varios del mismo tipo

<h2 class="titulo">Un titulo aqui, por favor</h2>

-Al llamarlos, se debe agregar un selector al lado del otro, con la sintaxis propia correspondiente

h2.titulo {
    font-weight: bold;
}

FUENTES
Propiedades tipograficas:

font-family:
-permite definir la familia tipografica a utilizar
-recibe como valor el nombre del tipo de fuente o mas de una, en caso que la primera no funcione
-se puede usar una familia tipografica nativa o desde una webfont

p {
    font-family: "roboto", arial, verdana;
}

font-size: 
-permite definir el tamaño tipografico
-recibe un valor numerico y la unidad de medida a utilizar (px, em, cm)

p {
    font-size:  12px;
}


font-style: 
-define el estilo de la tipografia
-recibe valores como italic, normal, oblique

p {
    font-style:  italic;
}

font-weight:
-define el peso de la tipografia o grosor
-recibe los valores bold, lighter, normal o bien un valor numerico que se ira incrementado de 100 en 100

p {
    font-weight: bold;
}

text-align
-define la alineacion de un texto
-recibe como valor left, right, center, inherit, justify

p {
    text-align: center;
}

text-decoration:
-permite definir un tipo de decoracion para el texto
-recibe valores como underline, line-through, overline y none
-para los hipervinculos el valor por defecto sera underline

p {
    text-decoration: underline;
}

line-height:
-permite definir eñ alto de cada linea de textoo el interlineado
-recibe un valor numerico acompañado de una unidad de medida
-se relaciona con el font-size al tener que ser 8 unidades superior que ésta última

p {
    line-height: 14px;
}

COLOR

Formatos de color

Por nombre: 
-se debe especificar el nombre del color en ingles
-admite 140 colores nominales: p {color: red}

Hexadecimal:
-es el mas utilizado por desarroladores
-permite una gran paleta de colores
-se define con seis digitos que hacen referencia al color, anteponiendo el simbolo numeral: p {color: #3459ff}

Valores RGB: 
-es una funcion que recibe como valor numerico tres argumentos, que van desde el 0 hasta el 255: p {background-color: rgb(0,0,255)}


Valores RGBA:
-es una funcion que recibe como valor numerico tres argumentos, que van desde el 0 hasta el 255
-se le agrega el canal A(alpha) que define la opacidad del color y se define en decimal como un porcentaje:p {background-color: rgb(0,0,255, 0.4)}

Atributo color
-permite asignarle un color a la tipografia de un elemento
-recibe como valor cualquiera de los formatos de color

Atributo background-color:
-permite asignarle color al fondo del elemento
-recibe como valor cualquiera de los formatos de color

Atributo opacidad
-permite otorgar transparencia a todo el elemento
.recibe como valor el porcentaje de transparencia: p {opacity: 0.3} (un30%)

FONDOS

Atributo background-color:
-permite asignarle color al fondo del elemento
-recibe como valor cualquiera de los formatos de color

Atributo background-image:
-permite implementar una imagen de fondo al elemento
-recibe como valor una funcion url que toma como argumento una ruta relativa o absoluta

body{background-image: url("../images/star.png")};

-la imagen queda por encima del color de fondo

Atributo background-repeat:
-permite definir si una imagen se va a repetir y de que manera
-recibe los valores repeat, no-repeat, repeat-x, repeat-y, round y space

body{background-repeat: round};

Atributo background-position:
-nos permite mover la imagen dentro del elemento y decidir donde posicionarla
-recibe como valor porcentajes, valores numericos con unidad de medida y tambien posiciones como left, bottom, right, center
-si recibe dos valores, con el primero se especifica con los valores seguido de un espacio la disposicion sobre el eje x y el segundo la posicion sobre el y

body{background-position: bottom};

Atributo background-attachment:
-nos permite definir si la imagen de fondo se movera junto con la pagina o se quedara fija la realizar el scroll
-recibe valores como fixed, scroll, inherit e initial

body{background-attachment: fixed};

Atributo background-size:
-permite establecer el tamaño de la imagen de fondo
-recibe como valor contain, cover, inherit, asi como tambien tamaños en pixeles o cm, indicando como primer valor el largo 
y como segundo valor el alto de la imagen

body{background-size: 130px, 250px};

Ejercicio 1, Imagen de fondo
El <body> debe tener una imagen de fondo que ocupe todo el tamaño de la página. El link a la imagen es el siguiente: https://images3.alphacoders.com/621/621682.jpg
El <h1> debe tener un fondo de color negro con una opacidad de 0.8 y que la tipografía sea de color #f4e033.
El <h2> debe tener un fondo de color naranja, que la tipografía sea de color blanca y que la caja completa (fondo y texto) tenga una opacidad de 0.4.

body {
background-image: url('https://images3.alphacoders.com/621/621682.jpg');
background-size: cover;
}

h1 {
background-color: rgba(0, 0, 0, 0.8);
color: #f4e033;
}

h2 {
background-color:  orange;
color:white;
opacity: 0.4;
}
Normalize es una libreria, o bien un reset que se utiliza para generar estilos para que la mayoria de los elementos
 de un html se visualicen de una manera constante y homogenea en todos los navegadores

 Guardar la hoja de estilo en la carpeta public y luego vincularla en la hoja de estilo principal o en el head del html

*/