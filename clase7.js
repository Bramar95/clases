/*
Comandos basicos del git
pwd: nos muestra la carpeta actual en la que nos encontramos.
mkdir: nos permite crear carpetas, p. ej. mkdir NuevaCarpeta
touch: nos permite crear archivos nuevos, p.ej. touch NuevoArchivo.txt
cat: nos permite ver el contenido de un archivo, p.ej. cat NuevoArchivo.txt
cd: nos permite cambiarnos de carpeta, p.ej. cd NuevaCarpeta.
cd .. : nos permite regresar al directorio o carpeta anterior.
cd o cd ~: nos lleva a la ruta del usuario.
cd /c: nos vamos al disco C:/.
cd -: nos lleva directamente al ultimo directorio visitado.
ls: nos permite ver los archivos de la carpeta donde estamos actualmente.
ls -l: Ver todos los archivos como una lista en donde incluye el usuario, grupo, permisos sobre el archivo, tamaño, fecha y hora de creación.
ls -lh: Muestra la misma información que ls-l pero con unidades de tamaño, es decir, kb o mb.
ls-R: muestra el contenido de todos los sudirectorios de forma recursiva.
ls -S Ordena los resultados por tamaño de archivo.
rm: Nos permite borrar un archivo o carpeta ej: rm NuevoArchivo.txt
rmdir “nombre del directorio”/: borrar un directorio: Solo funciona con directorios vacíos.
rm -r ‘nombre de la carpeta’ :me permite eliminar la carpeta y los archivos dentro de ella de forma recursiva.
cp “nombre del archivo que quremos copiar” “nombre del directorio a donde lo queremos copiar”: nos permite copiar un archivo.
mv “el directorio de donde queremos mover/el nombre del archivo” “el directorio hacia donde lo queremos mover”: nos permite mover un archivo.
clear: nos permite limpiar la pantalla.
history: ver los últimos comandos que ejecutamos y un número especial con el que podemos volver a repetir el comando.
*/

//MANEJO DE PROYECTOS CON GIT

//INTRODUCCION GIT; sistema de versionado
//Git permite hacer un backup de mis archivos y compartir estos arhivos con un equipo de trabajo
//Software de control y seguimiento de versiones, lleva registro cronologio de los cambios de un archivo y el historial de las modificaciones que se dan entre varios colaboradores
//Se pueden tener varias versiones de un mismo proyecto y acceder a ellas cuando queramos para volver a un estado previo y revertir cambios

//INSTALACION
//Comando para verificar que git se haya instalado orrectamente 
// $ git
//Comando para verificar la version instalada de git en la computadora
// $ git --version

//CREAR REPOSITORIO REMOTO EN GITHUB
//Git es un sistema de versionado
//GitHub es un espacio virtual en la nube;una plataforma colaborativa que nos va a permitir llevar un control de versión sobre nuestro código
//Un repositorio es un almacen de archivos donde se iran guardando los archivos de nuestro proyecto en la nube usando git como sistema de versionado
//Un repositorio local es un proyecto guardado en mi computadora
//Un repositorio remoto es aquel alojado en gitHub

//Accedemos a nuestra cuenta y hacemos click en new
//Elegimos un nombre  para el repositorio y ponemos una descripcion para luego hacer click en create repository
//Al crear un repositorio gitHub nos provee un codigo de la url de nuestro usuario que debemos copiar en la terminal git despues del comando git clone:
//git clone https://github.com/Bramar95/pruebaNode.git

//CREAR REPOSITORIO LOCAL DESDE LA TERMINAL GIT

//Debemos ubicarnos en la carpeta de los archivos que queremos hacer un backup
//Escribir en la terminal el comando:$ git init
//Este comando arroja un mensaje que se ha creado un repositorio vacio en la carpeta

//Commit
//Un commit es un paquete de archivos guardados en un repositorio que tiene una timeStamp, o una fecha de creacion y una firma del autor
//Los commits funcionan como el historial de cambio que indican las modificaciones que se fueron haciendo en un proyecto


/*
//Crear repositorio local
$ git init "mi-usuario"//Crea el repositorio local
$ git config user.name //Agrega nuestra firma/identidad
$ git config user.email "emailusuario@gmail.com//Agrega nuestro email
$ git config --global user.email "emailusuario@gmail.com//Indicamos que usaremos este email para todos los repositorios locales
//Conectar el repositorio local con el repositorio remoto en gitHub
$ git remote add origin https://github.com/Bramar95/pruebaNode.git //Apunta al repositorio local con el remoto

$ git remote -v//Verifica que la conexion entre los repositorios fue correcta; se encarga de listar todas las conexiones junto con sus URLs::
$ git remote -v
origin  https://github.com/Bramar95/pruebaNode.git (fetch)
origin  https://github.com/Bramar95/pruebaNode.git (push)

*/

//AGREGAR ARCHIVOS AL REPOSITORIO

/*
$ git add archivo.extension//Agrega uno o varios archivos espeificos respecto al repositorio local
& git add .//Agrega todos los archivos presentes en el repositorio, tanto archivos nuevos como aquellos que hayan sufrido cambios
$ git commit -m "mensaje"//Comitea los cambios hechos
$ git status//Seguimiento del estado de los archivos respecto al repositorio
$ git push origin master//Envia los cambios hechos al repositorio remoto
*/
//Se guardan con $ git add. los archivos al commit del repositorio
//Git detecta esos archivos guardados en el repositorio con $ git add, sus modificaciones o nuevas versiones y hace un seguimiento de estado para con estos
//Si los archivos existentes en el repositorio sufren cambios o si son archivos nuevos se deben guardar con $ git add. y asi seran archivos preparados para el commit

//CONFIRMANDO ARCHIVOS
//Commit
//Es una confirmacion que indica al repositorio que los archivos que fuimos agregando al repositorio los queremos oficialmente como un paquete de modificaciones
//El commit es un punto especifico cronologio de un proyecto que tiene una marca indheleble de tiempo, una firma de autor y un mensaje a modo de descripcion

//En el commit se agrega un mensaje entre comillas describiendo la modificacion que realizamos a ese pequeño paquete de archivos

// $ git commit -m "mi primer commit"

//Es importante ser claro con el mensaje para que en el historial sepamos que fue el cambio que se hizo
//Con el comando $ git log se puede ver el hitorial de todos los commit realizados, los cambios en nuestro proyecto

//Cualquier modificacion, creacion o actualizacion de archivos en el repositorio local que deseemos guardar como un estado concreto de nuestro proyecto lo debemo comitear
//Archivos nuevos:untracked; U
//Archivos modificados pero existentes en el repositorio: modified; M
//Archivos agregados al repositorio: added; A
//Para comitear el directorio del repositorio se debe constatar el status de este ultimo, y si hay alguna adhesion o modificacion agregarlas al repositorio:
/*
$ git add//agrega archivos al repositorio
$ git status//realiza el seguimiento de los cambios
$ git add/$ git add.//agrega cambios de archivos preexistentes al repositorio
$ git commit -m "mensaje"//comitea los cambios hechos
*/

//SUBIR ARCHIVOS

//Le solicita a git que inserte o suba los archivos de nuestro repositorio local al repositorio remoto
//Ademas le solicita que inserte estos archivos en la rama principal o rama master

// $ git push origin master
//El comando push hace referencia a la accion de insertar
//Para git el repositorio remoto es origin y master hace referencia a la rama principal
//Solo se suben los commit ya cerrados, es decir cuando el directorio de trabajo esta limpio de cambios a comitear

//Una vez ejecutado el push saldra en la terminal o en una ventana emergente que se requiere el nombre del usuario y el email del autor
//Luego en gitHub se podra vislumbrar los archivos subidos y acceso a toda la informacion de modificacion y creacion de los archivos  y cambios, viendo quien los hizo y cuando
/*
$ git add//agrega archivos al repositorio
$ git status//realiza el seguimiento de los cambios
$ git add/$ git add.//agrega cambios de archivos preexistentes al repositorio
$ git commit -m "mensaje"//comitea los cambios hechos
$ git push origin master//envia los cambios al repositorio remoto
*/

/*Criterio al momento de realizar un commit
-funcionalidad estable
-integracion progresiva: en cada etapa de agregado de funcionalidades
*/

//Rama
//Copias alternativas de un archivo que se puede modificar y agregar funcionalidades sin alterar la rama principal

//BAJANDO ARCHIVOS

//GIT CLONE 
//Cuando los archivos a copiar no existen o se copian por primera vez;clonar repositorio remoto:
// $ git clone
//El comando clone replica de manera exacta los archivos contenidos dentro del repositorio remoto en nuestra computadora o repositorio local
//Los archivos que queremos copiar no deben existir previamente en la nuestra computadora
//Para clonar la carpeta de archivos se debe abrir la terminal el la ubicacion o carpeta deseada y usar $ git clone seguido de la url que nos provee gitHub
//   $ git clone https://github.com/Bramar95/pruebaNode.git
//La carpeta clonada ya se enecuentra sincronizada con el repositorio remoto

//GIT PULL
//Cuando los archivos a copiar ya existen;actualizar repositorio local:
// & git pull
//El comando pull 
//   $ git pull origin main

//RESOLVIENDO CONFLICTOS
//Un conflicto de versiones sucede cuando se modifican y se suben en simultaneo archivos al repositorio remoto
//Se debe actualizar nuestro repositorio local y traer esos cambios con $ git pull origin master y asi comparar para decidir que conviene a continuacion:
//dejar el codigo de la version a subir(cambios actuales), dejar el codigo de la version desde gitHub(cambios entrantes), o fusionar ambos
//En la terminal marcara un error al git querer fusionar esos archivos y no poder lograrlo
//VSCode nos marcara las lineas de codigos que se superponen y entonces habra que compararlas
/*Precauciones:
-Trabajar en paralelo con el uso de ramas
-Realizar commits pequeños en cambios y funcionalidad
-Estar comunicado con el equipo de desarrollo
