/*METODOLOGIAS DE DESARROLLO DE SOFTWARE
Metodologias de cascada o secuencial: antes de las metodologías ágiles

Modelo secuencial de desarrollo de software

System requirements
    Software requirements
        Analysis
            Program design
                Coding
                    Testing
                        Operations
-Origen de la automatizacion de tareas: Revolucion industrial 1760, modelo secuencial de pasos
-En 1970 Winston Royce postula un documento en el que propone evidenciar las deficiencias a mejorar del modelo de cascada
-En 1985 el Department of defense adapta sin tomar en cuenta las advertencias el documento de Royce
-Se empieza a implementar como requisito reglamentario que todas las empresas y organizaciones desarrolladoras de software tomen el modelo de cascada

Funciona bien en casos:
-En situaciones que conocemos bien las variables desde el inicio del proyecto
-En situaciones en las que necesitamos calcular detalle los tiempos y los costos

Debilidades:
-Deja fuera de la faase de desarrollo al usuario; el usuario no ve el producto hasta estar terminado
-No funciona bien ante los cambios constantes y cambios de requirimientos
-Es necesario conocer todos los detalles antes de empezar a trabajar
-Si una etapa se atrasa se necesita terminarla para avanzar con la siguiente; se traslada el retraso
*/

/*Metodologias agiles: SCRUM, Extreme programming, FDD, Crystal

-En 1994 se publica el reporte del caos: el 84% de los proyectos iniciados bajo la metodologia secuencial no finalizaban o cumplian con el tiempo y los costos

-Surge el manifiesto agil: un acuerdo para promover las metodologias que ayuden desarrollar software de manera optima
-Promover la agilidad dentro de todos los aspectos del desarrollo
-Proceso de desarrollo que evoluciona a su mejor version
-Se conocen mas las necesidades del cliente

Valores
-Se valora mas:
Individuos e interacciones
Software funcional
Colaboracion con el cliente
Respuesta al cambio

-Se valora menos:
Procesos y herramientas
Documentacion compleja
Apego a contratos
Seguimiento de un plan

Se caracteriza por:
-Foco en satisfacer al cliente: presente en todo el ciclo de desarrollo
-Software como medida principal de desarrollo: en cada ciclo se entrega una version incremental o mejor del proyecto, solo lo que esta terminado
-Mejora constante: reflexion regular del trabajo hecho, de los procesos implementados y de la experiencia del equipo
-Equipos autoorganizados: los que administran el proyecto deben generar un ambiente productivo y de buena comunicacion. La ejecucion queda a cargo del equipo de desarrollo 
-El cambio es bienvenido: los requisitos pueden cambiar por devoluviones del cliente o por situaciones externas, incluso en etapas avanzadas
-Simplicidad: mantener el resultado y minimizar el esfuerzo del equipo
*/

/*
Scrum: roles de equipo
Product owner; dueño del producto: 
-representa la voz del cliente
-toma las decisiones finales del producto
-se asegura que el equipo trabaje de manera adecuada bajo enfoque comercial
-escribe historias de usuario, las prioriza y las pone en el product backlog


Scrum Master; guia del equipo de trabajo, facilitador, no jefe: 
-comprueba que cada miembro use sus habilidades unicas en pos del proyecto
-responsable de contrololar los tiempos, la reuniones, y el proceso en general
-ayuda a evitar obstaculos
-proteccion del equipo ante distracciones

Equipo de desarrollo o de trabajo:
-tienen la responsabilidad 
-son horizontales; las decisiones se toman por consenso
-son autoorganizados y versatiles para cumplir todas las tareas 
-no hay nadie que los maneje directamente

Stakeholder; accionistas:
-personas que utilizaran o seran afectadas por producto o servicio


Flujo de trabajo 
-sera administrado y gestionado por los documentos

Documentos
Product backlog:
-conjunto de todos los requisitos del proyecto
-es gestionado por el product owner
-contiene descripciones genericas de funcionalidades deseables
-el proyecto que tenga mas urgencia en cuanto impacto positivo hacia el cliente se desarrolla primero

Sprint backlog: 
-conjunto de requisitos a desarrollar en el sprint actual
-la lista de tareas es gestionada por el equipo de desarrollo
-la duracion de cada sprint(periodo en el que se lleva a cabo el proyecto) es definifa por el equipo
-suelen durar de 2 a 4 semanas, y es siempre la misma en cada iteracion
-se hace uso de un tablero de tareas para organizar todas las tareas( Trelo, Monday):
    story: historias de usuarios que originaron las tareas
    To Do: tareas a realizar en el sprint
    in progress: tareas en curso en el sprint
    to verify: tareas listas que requieren verificacion
    done: tareas listas y verificadas

    Historias de usuario
        -permiten describir un comportamiento o una funcionalidad desde la perpectiva del usuario
        -tienen condiciones que deben cumplirse para constatar la finalizacion de una tarea
        -siguen un formato: 
            -como {rol de usuario}; 
            -quiero {objetivo}; 
            -para poder {beneficio}


Ceremomias
-estas destinadas a promover la comunicacion del equipo
-visibilizar las tareas y obstaculos que puedan surgir en el desarrollo

Planificacion
-trabajo que se hara durante el sprint
-se calcula e identifica cuanto esfuerzo probable a invertir en las tareas propuestas
-se hace con todo el equipo

Daily stand-up
-se comunica durante no mas de tres minutos la respuesta a tres preguntas:
que hizo el colaborador ayer?, tuvo impedimientos para realizar la tarea?, que hara hoy?
-suelen realizarse de pie

Revision o demo
-revisar el trabajo completado o incompleto para asi poder presentar el trabajo completo a los holders
-suele durar 4 horas para el sprint de 1 mes

Reflexiva
-se enfoca en la mejora continua del equipo y de la comunicacion del proceso
-suele durar 4 horas para el sprint de 1 mes
*/