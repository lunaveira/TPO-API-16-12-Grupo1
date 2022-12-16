# TPO-API-16-12-Grupo1

# Introducción
La presente documentación hace referencia al trabajo práctico realizado para la materia Aplicaciones Interactivas, donde se desarrolló una aplicación sobre clases particulares. Esta materia nombrada es dictada en la Universidad Argentina de la Empresa los días Viernes en el turno mañana, con los profesores Sarasa, Maria Paula y Malio, Tomas Horacio.

El propósito de la creación de esta aplicación es ayudar a alumnos que no obtienen buenas notas durante su paso por el nivel secundario brindándoles un medio para poder contactarse con diversos profesores que dictan clases particulares, de diversas materias.

La aplicación realizada por las alumnas Gacetua, Antonella Daiana y Naveira, Lucia Jazmin fue diseñada basandose en el uso de componentes React, utilizando herramientas como Material UI y Tailwind (dicha libreria nos permitio manejar el CSS de la pagina).

# Tecnologías y lenguajes presentes en el trabajo sobre el backend y frontend
Html, Css, React Js, Node Js y Javascript. La base de datos utilizada es: PostgresSQL. Estas tecnologías y lenguajes fueron puestas en práctica sobre Visual Studio Code.
Para el envio de email se utilizo SendGrid y para la subida de imagenes se guardo base64 en la base de datos. Esta tecnologia consiste en convertir imagenes en texto.

# ¿Cómo correr el programa? 
El frontend y el backend se encuentran unidos en el mismo archivo, pero en distintas carpetas. Por lo que para correr el programa es necesario dividir la terminal en dos partes. 
En la primera terminal ingresar "cd backend" para pararse en la carpeta del backend, y en la segunda terminal ingresar "cd client" para pararse en la carpeta del front.
Luego en ambas terminales debe ingresarse el comando npm install y luego npm start (el back tambien se inicia haciendo npm start).
Para hacer uso de la bases de datos, se debe seguir el orden de las querys que se encuentran en el archivo queries.js. Esto puede hacerse en un PostBird o en un PSQL (ingresando con los datos que se encuentran en database.js). IMPORTANTE: SI NO SE REALIZA ESTE PASO EL BACKEND NO VA A FUNCIONAR!!.

# Requerimientos generales
La aplicación debe ser responsive. La aplicación deberá desarrollarse utilizando los siguientes lenguajes y librerías obligatorias: HTML/CSS, React, JavaScript y NodeJS La base de datos a utilizar es opción del grupo pudiendo escogerse entre SQL (MySql, SqlServer, Postgress) y NO SQL (MongoDB)

# Requerimientos específicos
La aplicación debe permitir la búsqueda, consulta y contratación de clases particulares que necesitan los alumnos. La aplicación debe impedir el acceso a usuarios que posean el mismo mail. La aplicación debe permitir el registro para el uso de la aplicación Tus Clases ingresando una contraseña y mail. La aplicación debe dar la opción de rehacer una contraseña, si esta fue olvidada. La aplicación debe estar basada según los roles Alumno y Profesor, donde estos tendrán diferentes permisos de acceso. La aplicación debe permitir que se califique, comente una clase y también que se bloqueen dichos comentarios.

# Funcionalidades
Ni bien ingresamos a la pagina podemos encontrar el sitio institucional, que consta de un cartel de presentacion, todas las clases que se pueden encontrar en la pagina (aunque no se las puede contratar ya que para eso hay que estar logueado), filtros de clases y un navegador con dos opciones: Login y Register.
Al hacer click en el boton register, el usuario sera redireccionado a un cartel con dos opciones: registrarse como alumno o como profesor. Dependiendo de la opcion seleccionada se lo redireccionara a un formulario u otro. Luego de registrarse, automaticamente sera enviado a la pagina de login donde va a poder ingresar con las credenciales con las que se registro previamente.
El login va a detectar el rol con el que ese usuario realizo el registro (profesor o alumno) y lo llevara hacia una pagina u otra dependiendo dicho rol.

Si el usuario ya tenia una cuenta pero se olvido su contraseña, va a poder ir a la seccion "forgot password?" que se encuentra debajo del login, y alli va a poder ingresar su email al que desee que le llegue un codigo con el cual poder ingresar.

# Rol alumno
Una vez logueado con el rol alumno, este mismo va a poder ver todas las clases existentes (al igual que en el sitio institucional) pero va a tener la posibilidad de contratarlas. Para eso debe seleccionar el carrito de compras que aparece en la esquina inferior izquierda de cada clase. Esto llevara al usuario a una pagina con un formulario para completar y enviarle un email al profesor con dicha contratacion, con la finalidad de que ambos puedan ponerse en contacto.
Ademas, el alumno podra ver todas las clases que contrato desde la seccion "mis clases" en el navegador, y ahi podra cambiarle el estado a las clases (cancelada / finalizada) asi como tambien dejar un comentario y una calificacion.


# Rol profesor
Una vez logueado con el rol profesor, este mismo va a poder ver todas las clases creadas por el, asi como tambien contara con un boton de "crear clase" que lo redireccionara a un formulario para completar con los datos de la nueva clase creada, y poder subir una imagen que acompañe. 
El profesor tambien podra acceder desde el navegador a sus contrataciones, donde tendra un listado de los alumnos que contrataron cada clase y va a poder cambiar el estado de esas mismas contrataciones (aceptada / finalizada / cancelada). Ademas, contara con una seccion adicional donde podra ver los comentarios de las clases y decidira si publicar o bloquear cada comentario (en el caso de bloquear debera completar un formulario con el motivo del bloqueo). 
Con respecto a sus clases ya creadas, va a poder eliminarlas o modificarlas seleccionando los botones correspondientes que se encuentran en cada clase.


# Endpoints
Los endpoints utilizados son: 
LOGIN: '/api/login'  PETICION: POST   RECIBE: body: {email, password }

REGISTER: '/api/register'  PETICION: POST  RECIBE: body: {nombre, apellido, email, password, titulo, experiencia, primaria, secundaria, terciario, universitario, fechaNac, rol }

VALIDACION DE TOKEN: '/api/validate-token' PETICION: GET 

USUARIOS POR ID: '/api/usuarios/:id'  PETICION: GET  RECIBE: params: {id}

OBTENER CLASES: '/api/clases'   PETICION: GET   

RECUPERAR PASSWORD: '/api/recuperar-password'  PETICION: GET   RECIBE: query: {email}

CREAR CLASE: '/api/crear-clase'   PETICION: POST   RECIBE: body: {name,
            materia,
            frecuencia,
            duracion,
            tipo,
            costo,
            descripcion,
            image, profesorId}

CONTRATAR CLASE: '/api/contratar-clase'  PETICION: POST   RECIBE: body: { email, telefono, horario, mensaje } 

ELIMINAR CLASE: '/api/eliminar-clase/:id'  PETICION: DELETE  RECIBE: params: {id}

